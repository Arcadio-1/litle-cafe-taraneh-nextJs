import React from "react";
import PostItem from "./PostItem";

const PostList = (props) => {
  const { posts } = props;
  return (
    <div className="blogPosts-listContainer">
      <div className="blogPosts-list">
        {posts.map((post) => {
          return <PostItem key={post.slug} post={post} />;
        })}
      </div>
    </div>
  );
};

export default PostList;
