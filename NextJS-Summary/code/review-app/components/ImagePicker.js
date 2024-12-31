"use client";

import Image from "next/image";
import { useRef, useState } from "react";

function ImagePikcer() {
  const [imageData, setImageData] = useState(null);
  const inputRef = useRef();

  function ButtonClickHandler() {
    inputRef.current.click();
  }

  function inputHandler(e) {
    const file = e.target.files[0];

    if (!file) {
      setImageData(null);
      return;
    }

    const fr = new FileReader();
    fr.readAsDataURL(file);

    fr.onload = (e) => {
      setImageData(e.target.result);
    };
  }

  return (
    <>
      <input
        type="file"
        hidden
        accept="image/png image/jpg"
        ref={inputRef}
        onChange={inputHandler}
      ></input>
      <button onClick={ButtonClickHandler} type="button" className="block">
        Image Click
      </button>
      {imageData ? (
        <Image
          width={250}
          height={250}
          alt="Fail Image"
          src={imageData}
          className="rounded-lg"
        ></Image>
      ) : (
        "not Data"
      )}
    </>
  );
}

export default ImagePikcer;
