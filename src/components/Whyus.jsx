import React from "react";
import whyusImg from "../assets/whyusImg.png";
const Whyus = () => {
  const whyusArr = [
    {
      heading: "Expert Team:",
      definition:
        "Our experienced professionals provide high-quality, evidence-based therapies tailored to each child’s needs.",
    },
    {
      heading: "Comprehensive Information:",
      definition:
        "Access detailed, user-friendly descriptions of a wide range of therapies and services in one place.",
    },
    {
      heading: "Accessible Design:",
      definition:
        "Our website is designed for easy navigation, ensuring that all families can find the information they need.",
    },
    {
      heading: "Supportive Community:",
      definition:
        "Connect with other families and professionals through our platform, fostering a supportive network.",
    },
    {
      heading: "Reliable and Current:",
      definition:
        "We offer up-to-date, evidence-based information to keep you informed about the latest in therapy and support.",
    },
    {
      heading: "Personalized Approach:",
      definition:
        "Our resources and services are tailored to meet the unique needs of each child and family.",
    },
    {
      heading: "Continuous Improvement:",
      definition:
        "We regularly update our content and features based on feedback and new developments.",
    },
    {
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
          <>
            <p className="font-semibold text-justify px-3 mb-4" key={index}>
            <span className="font-bold">{index + 1}. {point.heading}</span> {point.definition}
            
            </p>
            
            
          </>
        );
      })}
    </section>
  );
};

export default Whyus;
