import Head from "next/head";
import React, { Fragment } from "react";
import BlogPosts from "../../../Components/Blog/BlogPosts";
import { getAllPost } from "../../api/blog/index";

const PostList = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>Blog Posts List</title>
        <meta name="descripton" content="Here You Can See All Posts..." />
      </Head>
      <div className="blogPage">
        <BlogPosts blogTitle="All Posts" posts={posts} />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  const posts = getAllPost();
  return {
    props: {
      posts: posts,
    },
  };
}

export default PostList;
