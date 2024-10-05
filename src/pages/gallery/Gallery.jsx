import React, { useState } from "react";
import "./Gallery.css"
import { ImCross } from "react-icons/im";
import { gallery } from "../../assets/assets";
const Gallery = () => {
  const [img,setImg]=useState(false)
  const [tempImg,setTempImg]=useState("")
  const getImg=(image)=>{
    setTempImg(image)
    setImg(true)
    
  }
  return (
    <div className="flex flex-col items-center py-16 min-h-screen md:px-10 lg:px-20">
      <h1 className="text-[#2F2F2F] mb-4 text-3xl md:text-4xl lg:text-5xl  font-bold ">
        Gallery
      </h1>
      <div className={img? "model open": "model"}>
        <ImCross
              className="cursor-pointer text-2xl fixed top-6 right-6 text-white"
              onClick={() => setImg(false)}
            />
        <img src={tempImg} />
      </div>
      <div className="gallery">
        {gallery.map((image, index) => {
          
          return (
            <div key={index} className={`pics border-2 border-black rounded-2xl overflow-hidden `}>
              <img
                src={image}
                alt={`Gallery item ${index + 1}`}
                className="w-full"
                onClick={()=>getImg(image)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
