import ReactMarkdown from "react-markdown";

import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import Image from "next/image";

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderes = {
    image(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        ></Image>
      );
    },
  };

  return (
    <>
      <article className={classes.content}>
        <PostHeader image={imagePath} title={post.title}></PostHeader>
        <ReactMarkdown components={{image : ()=>{}}}>{post.content}</ReactMarkdown>
      </article>
    </>
  );
}

export default PostContent;
