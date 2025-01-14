import classes from "./AllPost.module.css";
import PostGrid from "./PostGrid";

function AllPost(props) {
  return (
    <>
      <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={props.posts}></PostGrid>
      </section>
    </>
  );
}

export default AllPost;
