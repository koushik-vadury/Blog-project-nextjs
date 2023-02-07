import AllPosts from "@/components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built in SSR",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
