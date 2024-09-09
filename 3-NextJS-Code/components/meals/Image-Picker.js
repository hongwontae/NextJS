'use client'

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState(null);

    const imageInputRef = useRef(null);

    function imageHandler(){
        imageInputRef.current.click();
    }

    function handleImageChange(event){
        const file = event.target.files[0];

        if(!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            setPickedImage(fileReader.result)
        };

        fileReader.readAsDataURL(file);

    }

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.control}>
            <div className={classes.preview}>
            {!pickedImage && <p>No Image picked yer</p>}
            {pickedImage && <Image src={pickedImage} fill alt="The Image"></Image>}
            </div>
          <input
            className={classes.input}
            type="file"
            id={name}
            accept="image/png, image/jpeg, image/jpg"
            name={name}
            ref={imageInputRef}
            onChange={handleImageChange}
          ></input>
          <button onClick={imageHandler} className={classes.button} type="button">
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}

export default ImagePicker;
