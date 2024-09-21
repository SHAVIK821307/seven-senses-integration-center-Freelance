import React from "react";
import { assets } from "../../assets/assets";
const Gallery = () => {
  const images = [
    { src: assets.img4, large: true },
    { src: assets.img4, large: true },
    { src: assets.img4, large: false },
    { src: assets.img4, large: false },
    { src: assets.img4, large: true },
    { src: assets.img4, large: true },
    { src: assets.img4, large: true },
    { src: assets.img4, large: true },
    { src: assets.img4, large: false },
    { src: assets.img4, large: false },
  ];
  return (
    <div className="flex flex-col items-center py-16 min-h-screen md:px-10 lg:px-20">
      <h1 className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold ">
        Gallery
      </h1>
      <div className="flex flex-wrap justify-center gap-4  my-8">
        {images.map((image, index) => {
          // Determine if the image should be large based on its position
          const isLarge = index % 3 === 2 ? "w-1/5" : "w-2/5";
          return (
            <div key={index} className={`flex-initial ${isLarge} `}>
              <img
                src={image.src}
                alt={`Gallery item ${index + 1}`}
                className="w-full h-full rounded-lg shadow-lg border-2 border-black"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
