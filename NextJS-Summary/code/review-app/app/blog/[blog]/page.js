import styles from "./blog.module.css";
import ImagePikcer from "@/components/ImagePicker";

async function PBlog({ params }) {


  let paramsSeparate = params.blog.split("-");

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/${paramsSeparate[0]}s/${paramsSeparate[1]}`
  );
  const resData = await data.json();

  return (
    <>
      <h3 className={styles.title}>Hello-PBlog</h3>
      <div className={styles.params}>{params.blog}</div>
      <div>
        <div>{resData.title}</div>
        <div>{resData.userId}</div>
      </div>
      <ImagePikcer></ImagePikcer>

    </>
  );
}

export default PBlog;
