import FeaturedPosts from "@/components/home-page/FeaturedPost";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";


function HomePage(props) {

  console.log(props.posts)

  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </>
  );
}

export function getStaticProps(){
  const feturedPost = getFeaturedPosts();

  return {
    props : {
      posts : feturedPost
    }
  }

}

export default HomePage;

// 1.Hero Section (자기 소개)
// 2. Featured Posts (더미 컨텐츠)
