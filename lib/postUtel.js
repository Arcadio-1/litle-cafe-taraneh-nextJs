import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "posts");

export const getFileNames = () => {
  const files = fs.readdirSync(postsDirectory);
  return files;
};

export const getSinglePost = (fileName) => {
  try {
    const postName = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, `${postName}.md`);
    if (!filePath) {
      throw new Error("Page is Not Found");
    }
    const fileData = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileData);

    const postData = {
      slug: postName,
      ...data,
      content,
    };

    return postData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllPost = () => {
  const allNames = getFileNames();
  const allPost = allNames.map((item) => {
    return getSinglePost(item);
  });
  const sortedPosts = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPost();
  const feturedPosts = allPosts.filter((item) => item.isFeatured);
  return feturedPosts;
};
