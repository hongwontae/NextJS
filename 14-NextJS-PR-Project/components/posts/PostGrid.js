import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";

function PostGrid(props) {
  const { posts } = props;

  return (
    <>
      <ul className={classes.grid}>
        {posts &&
          posts.map((ele) => {
            return <PostItem key={ele.slug} post={ele}></PostItem>;
          })}
      </ul>
    </>
  );
}

export default PostGrid;
