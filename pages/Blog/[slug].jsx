import React from "react";
import PostDetails from "../../Components/Blog/PostDetails";
import { getFileNames, getSinglePost } from "../../lib/postUtel";

const PostDetailsPage = (props) => {
  console.log(props.post);
  if (!props.post) {
    return (
      <div>
        <p>page is not found</p>
      </div>
    );
  }
  return (
    <div>
      <PostDetails post={props.post} />
    </div>
  );
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

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
