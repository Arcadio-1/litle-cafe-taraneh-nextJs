import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
SyntaxHighlighter.registerLanguage("js", js);

const PostDetails = ({ post }) => {
  const { slug, title, date, image, excerpt, content } = post;
  const imageUrl = `/images/posts/${slug}/${image}`;
  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          width={300}
          height={180}
          alt={title}
        />
      );
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <div className="blogPosts-details">
      <Image
        className="blogPosts-details-image"
        src={imageUrl}
        width={400}
        height={300}
        alt={title}
        layout="fixed"
      />
      <h1 className="blogPosts-details-title">{title}</h1>
      <span className="blogPosts-details-date">{date}</span>
      <div className="blogPosts-details-content">
        <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostDetails;
