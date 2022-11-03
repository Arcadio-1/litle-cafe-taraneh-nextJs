import Image from "next/image";
import React from "react";
import { getFeaturedPosts } from "../../lib/postUtel";
import BlogPosts from "../../Components/Blog/BlogPosts";
import Link from "next/link";

const Blog = (props) => {
  return (
    <div className="blogPage">
      <BlogPosts blogTitle="Featured Posts" posts={props.posts} />
      <div className="blogPage-link">
        <Link href={"/Blog/list"}>Show Post List</Link>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const FeaturedPosts = getFeaturedPosts();
  return {
    props: {
      posts: FeaturedPosts,
    },
  };
}

export default Blog;
