import Link from "next/link";
import React from "react";
import Image from "next/image";
const PostItem = (props) => {
  const { post } = props;
  const { title, image, excerpt, date, slug } = post;
  const postLink = `/Blog/${slug}`;
  const imageSrc = `/images/posts/${slug}/${image}`;

  return (
    <Link href={postLink}>
      <article className="blogPosts-list-item">
        <Image
          className="blogPosts-list-item-image"
          src={imageSrc}
          width={200}
          height={200}
          alt={title}
          layout="responsive"
        />
        <h1 className="blogPosts-list-item-title">{title}</h1>
        <span className="blogPosts-list-item-date">{date}</span>
        <p className="blogPosts-list-item-exe">{excerpt}</p>
      </article>
    </Link>
  );
};

export default PostItem;
