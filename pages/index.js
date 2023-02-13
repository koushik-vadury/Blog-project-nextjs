import Hero from "/components/home/hero";
import FeaturedPosts from "@/components/home/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NextJs Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
};
export default HomePage;
