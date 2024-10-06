import React from "react";
import { assets } from "../assets/assets";
const Director = () => {
  return (
    <section className="flex flex-col items-center py-16 min-h-screen bg-[#FFF6E0] md:px-10 lg:px-20">
      <h1 className="text-black text-3xl md:text-4xl lg:text-5xl  font-extrabold ">
        Director’s Profile
      </h1>
      <div className="grid md:grid-cols-2  my-10 gap-8">
        <div className="flex flex-col justify-between text-[#2F2F2F] px-3 md:text-xl lg:text-3xl font-medium text-justify">
          <p>
            Ms. Payel Maity, the founder & director of the institute{" "}
            <span className="text-green-500">
              Seven Senses Integration Centre
            </span>
            , is a trained Special Educator with over seven years of work
            experience in autism, Development Delayed, ADD/ADHD, Down Syndrome,
            etc.
            <br />
            <br />
            She has undergone a Master's in Child Psychology and also training
            in{" "}
            <span className="text-[#FF0000]">
              Auditory Verbal Training (AVT).
            </span>{" "}
            <br /> <br />
            She constantly updates herself with new experiences & explores new
            things & also upgrades her team & centre with their skills.
          </p>
        </div>
        <div className="px-6">
          <div className="bg-transparent rounded-3xl overflow-hidden">
            <img src={assets.DirectorImg} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;
