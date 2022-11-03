import React from "react";
import PostList from "./PostList";

const BlogPosts = (props) => {
  const { blogTitle } = props;
  const { posts } = props;
  return (
    <div className="blogPosts">
      <h1 className="blogPosts-title">{blogTitle}</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default BlogPosts;
