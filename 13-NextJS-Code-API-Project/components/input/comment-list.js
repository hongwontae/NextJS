import classes from "./comment-list.module.css";

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments &&
        comments.map((ele) => {
          return (
            <>
              <li key={ele._id}>{ele.text}</li>
              <div>{ele.email}</div>
            </>
          );
        })}
    </ul>
  );
}

export default CommentList;
