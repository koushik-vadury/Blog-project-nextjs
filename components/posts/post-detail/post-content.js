import SyntaxHighlighter from "react-syntax-highlighter";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const PostContent = (props) => {
  const { post } = props;

  const customRenderers = {
    p(p) {
      const { node } = p;
      if (node.children[0].type === "element") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{p.children}</p>;
    },
    code(code) {
      const { node } = code;
      const value = node.children[0].value;
      const language = code.className.split("-")[1];
      return <SyntaxHighlighter>{value}</SyntaxHighlighter>;
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
