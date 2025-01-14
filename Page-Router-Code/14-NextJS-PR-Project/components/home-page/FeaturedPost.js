import PostGrid from "../posts/PostGrid";
import classes from "./FeaturedPost.module.css";

function FeaturedPosts(props) {
  return (
    <>
      <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={props.posts}></PostGrid>
      </section>
    </>
  );
}

export default FeaturedPosts;
