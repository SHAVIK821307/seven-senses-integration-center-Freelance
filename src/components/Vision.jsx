import React from "react";
import visionImg from "../assets/visionImg.png"
const Vision = () => {
  return (
    <section className="flex flex-col items-center py-16  bg-[#FFF6E0] md:px-10 lg:px-20 bg-cover bg-center" style={{backgroundImage:`url(${visionImg})`}}>
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl mb-8  font-extrabold ">
        Our Vision
      </h1>
      <p className="font-semibold text-justify px-3">
        To be the leading online resource and community for children with
        disabilities and their families, fostering an inclusive environment
        where access to specialized therapies, educational resources, and
        supportive networks is seamless and empowering. We aim to transform the
        way families navigate and engage with disability services by providing a
        centralized hub that promotes growth, development, and well-being for
        every child.
      </p>
    </section>
  );
};

export default Vision;
