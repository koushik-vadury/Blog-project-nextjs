import Hero from "/components/home/hero";
import FeaturedPosts from "@/components/home/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

const HomePage = (props) => {
  return (
    <>
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
