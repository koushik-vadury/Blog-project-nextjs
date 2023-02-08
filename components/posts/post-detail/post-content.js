import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with nextjs",
  image: "getting-started-nextjs.png",
  excerpt:
    "Nextjs is a the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built in SSR",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostContent = () => {
  return (
    <article className={classes.content}>
      <PostHeader
        title={DUMMY_POST.title}
        image={`/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
