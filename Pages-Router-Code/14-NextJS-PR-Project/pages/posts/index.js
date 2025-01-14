import AllPost from "@/components/posts/AllPost";
import { getAllPosts } from "@/lib/posts-util";

function AllPostPage(props) {
  return (
    <>
      <AllPost posts={props.posts}></AllPost>
    </>
  );
}

export function getStaticProps(){
  const allPosts = getAllPosts();

  return {
    props : {
      posts : allPosts
    }
  }
}

export default AllPostPage;
