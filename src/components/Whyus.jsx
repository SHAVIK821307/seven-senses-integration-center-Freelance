import React from "react";
import whyusImg from "../assets/whyusImg.png";
const Whyus = () => {
  const whyusArr = [
    {
        id:1,
      heading: "Expert Team:",
      definition:
        "Our experienced professionals provide high-quality, evidence-based therapies tailored to each child’s needs.",
    },
    {
        id:2,
      heading: "Comprehensive Information:",
      definition:
        "Access detailed, user-friendly descriptions of a wide range of therapies and services in one place.",
    },
    {
        id:3,
      heading: "Accessible Design:",
      definition:
        "Our website is designed for easy navigation, ensuring that all families can find the information they need.",
    },
    {
        id:4,
      heading: "Supportive Community:",
      definition:
        "Connect with other families and professionals through our platform, fostering a supportive network.",
    },
    {
        id:5,
      heading: "Reliable and Current:",
      definition:
        "We offer up-to-date, evidence-based information to keep you informed about the latest in therapy and support.",
    },
    {
        id:6,
      heading: "Personalized Approach:",
      definition:
        "Our resources and services are tailored to meet the unique needs of each child and family.",
    },
    {
        id:7,
      heading: "Continuous Improvement:",
      definition:
        "We regularly update our content and features based on feedback and new developments.",
    },
    {
        id:8,
      heading: "Advocacy and Empowerment:",
      definition:
        "We are committed to advocating for children with disabilities and empowering families with the resources they need.",
    },
  ];
  return (
    <section
      className="flex flex-col py-16  bg-[#FFF6E0] md:px-10 lg:px-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${whyusImg})` }}
    >
      <h1 className="text-black text-center text-3xl md:text-4xl lg:text-5xl mb-8  font-extrabold ">
        Why Us?
      </h1>
      <p className="font-bold text-left px-3">
        Opt for us for professional expertise, trustworthy information, and a
        compassionate community focused on your child’s growth and well-being.
      </p>
      <br />
      <p className="font-bold text-justify px-3">WE HAVE commands on:-</p>
      <br />
      {whyusArr.map((point, index) => {
        return (
          
            <p className="font-semibold text-justify px-3 mb-4" key={point.id}>
              <span className="font-bold" >
                {index+1}. {point.heading}
              </span>{" "}
              {point.definition}
            </p>
          
        );
      })}
    </section>
  );
};

export default Whyus;
