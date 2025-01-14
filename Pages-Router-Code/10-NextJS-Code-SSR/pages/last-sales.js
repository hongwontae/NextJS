import { useEffect } from "react";
import useSWR from "swr";

function LastSale() {

    const fetcher = (url)=>{
        return fetch(url).then((res)=>res.json());
    }

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher);


  if (error) {
    return <p>Error!</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return <>
    <p>Data 존재</p>
  </>;
}

export default LastSale;
