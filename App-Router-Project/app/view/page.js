'use client'

import { useEffect } from "react";

function ImagePage(){

    useEffect(()=>{
        async function delayFunction(){
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const resData = await response.json();
            console.log(resData);
        }
        delayFunction();
    }, [])


    return(
        <>
            <h1>Image - Page</h1>
        </>
    )
}

export default ImagePage;