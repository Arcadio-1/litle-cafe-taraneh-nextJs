import React, { Fragment } from "react";
import { getFeaturedPosts } from "../api/blog/index";
import BlogPosts from "../../Components/Blog/BlogPosts";
import Link from "next/link";
import Head from "next/head";
const Blog = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Cafe Taraneh Blog</title>
        <meta name="description" content="in this page you can see posts..." />
      </Head>
      <div className="blogPage">
        <BlogPosts blogTitle="Featured Posts" posts={props.posts} />
        <div className="blogPage-link">
          <Link href={"/Blog/list"}>Show Post List</Link>
        </div>
      </div>
    </Fragment>
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
