import React from "react";
import BlogPosts from "../../../Components/Blog/BlogPosts";
import { getAllPost } from "../../../lib/postUtel";

const PostList = ({ posts }) => {
  return (
    <div className="blogPage">
      <BlogPosts blogTitle="All Posts" posts={posts} />
    </div>
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
