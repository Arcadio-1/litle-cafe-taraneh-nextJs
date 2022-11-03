import React from "react";
import PostDetails from "../../Components/Blog/PostDetails";
import { getFileNames, getSinglePost } from "../../lib/postUtel";

const PostDetailsPage = (props) => {
  return (
    <div>
      <PostDetails post={props.post} />
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const fileData = getSinglePost(slug);
  return {
    props: {
      post: fileData,
    },
  };
}

export async function getStaticPaths() {
  const fileFullNames = getFileNames();
  const fileNames = fileFullNames.map((item) => item.replace(/\.md$/, ""));
  const fileParams = fileNames.map((name) => ({ params: { slug: name } }));
  return {
    paths: fileParams,
    fallback: false,
  };
}

export default PostDetailsPage;
