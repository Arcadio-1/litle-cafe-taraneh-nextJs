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
      <h1>fuck you</h1>
      {/* <PostDetails post={props.post} /> */}
    </div>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const fileData = getSinglePost(slug);
  console.log("this is file Data " + fileData);
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
    fallback: true,
  };
}

export default PostDetailsPage;
