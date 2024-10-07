import React from "react";
import missionImg from "../assets/missionImg.png"
const Mission = () => {
  return (
    <section className="flex flex-col items-center py-16  bg-[#FFF6E0] md:px-10 lg:px-20 bg-cover bg-center" style={{backgroundImage:`url(${missionImg})`}}>
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl mb-8  font-extrabold ">
        Our Mission
      </h1>
      <p className="font-semibold text-justify px-3">
      To be the leading online resource and community for{" "}
          <span className="font-bold text-red-500">
            children with disabilities
          </span>{" "}
          and their families, fostering an{" "}
          <span className="font-bold text-blue-500">inclusive environment</span>{" "}
          where access to{" "}
          <span className="font-bold text-indigo-600">
            specialized therapies
          </span>
          , educational resources, and supportive networks is{" "}
          <span className="italic font-bold text-red-500">seamless and empowering</span>. We
          aim to transform the way families navigate and engage with{" "}
          <span className="font-bold text-red-500">disability services</span> by
          providing a{" "}
          <span className="font-bold text-blue-500">centralized hub</span> that
          promotes{" "}
          <span className="italic font-bold text-red-500">
            growth, development, and well-being
          </span>{" "}
          for every child.
      </p>
    </section>
  );
};

export default Mission;
