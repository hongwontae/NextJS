import { useState } from "react";
import { buildPath, fileDataGet } from "../api/feedback";

function FeedbackPage(props) {

    const [item, setItem] = useState();
    console.log(item)

    async function detailDataGet(id){
        const response = await fetch(`http://localhost:3000/api/${id}`);
        const resData = await response.json();
        setItem(resData.data);
    }


  return (
    <>
    <div>
        {item && item.email}
    </div>
      <ul>
        {props &&
          props.data.map((ele) => {
            return (
              <>
                <li key={ele.id}>{ele.feedbackText}</li>
                <button onClick={detailDataGet.bind(null, ele.id)}>Show Details</button>
              </>
            );
          })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildPath();
  const data = fileDataGet(filePath);
  return {
    props: { data },
  };
}

export default FeedbackPage;
