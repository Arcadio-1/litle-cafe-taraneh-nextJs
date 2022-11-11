import React, { Fragment } from "react";
import PostDetails from "../../Components/Blog/PostDetails";
import { getFileNames, getSinglePost } from "../api/blog/index";
import Head from "next/head";

const PostDetailsPage = (props) => {
  if (!props.post) {
    return (
      <div>
        <p>page is not found</p>
      </div>
    );
  }
  return (
    <Fragment>
      <Head>
        <title>Cafe Taraneh {props.post.title}</title>
        <meta name="description" content={props.post.title} />
      </Head>
      <div>
        <PostDetails post={props.post} />
      </div>
    </Fragment>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getSinglePost(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getFileNames();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
