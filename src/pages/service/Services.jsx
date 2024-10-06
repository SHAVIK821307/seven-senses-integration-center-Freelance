import React from "react";
import { assets } from "../../assets/assets";

const Services = () => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    padding: "20px",

    backgroundColor: "transparent",
  };

  const numberStyle = {
    fontSize: "300px",

    color: "#0000004D",
    fontWeight: "800",
    position: "absolute",

    top: "-10%",
  };

  const titleStyle = {
    fontSize: "1.6rem",
    textAlign: "center",
    color: "#2F2F2F",
    fontWeight: "bold",
    padding: "1rem 0",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#2F2F2F",
    textAlign: "center",
    fontWeight: "600",
  };

  const services = [
    {
      id: "01",
      numberImg: assets.numberimg1,
      title: "Occupational Therapy",
      description:
        "Focuses on helping children develop the skills needed for everyday activities, such as self-care, school tasks, and play. Through customized activities and exercises, occupational therapy improves fine motor skills, hand-eye coordination, and adaptive techniques.  ",
      image: assets.Service1,
    },
    {
      id: "02",
      numberImg: assets.numberimg2,
      title: "SPEECH & LANGUAGE THERAPY",
      description:
        "Aims to enhance communication abilities by addressing speech, language, and social interaction skills. Techniques include articulation exercises, language development activities, and strategies to improve understanding and expression.",
      image: assets.Service2,
    },
    {
      id: "03",
      numberImg: assets.numberimg3,
      title: "Behavioral Counseling",
      description:
        "Provides support for managing behavioral issues and emotional challenges. This service uses counseling techniques to address behavior problems, improve coping strategies, and guide both children and parents in fostering positive behavioral changes.",
      image: assets.Service3,
    },
    {
      id: "04",
      numberImg: assets.numberimg4,
      title: "SPECIAL EDUCATION",
      description:
        "Offers individualized educational support tailored to each child’s unique learning needs. This includes customized lesson plans, one-on-one instruction, and specialized tools to help children achieve their academic goals and overcome learning challenges.",
      image: assets.Service4,
    },
    {
      id: "05",
      numberImg: assets.numberimg5,
      title: "Sensory Integration Therapy",
      description:
        "Helps children better process and respond to sensory information, such as sight, sound, touch, and movement. Through sensory-rich activities and play, this therapy improves sensory processing, coordination, and overall sensory integration.",
      image: assets.Service5,
    },
    {
      id: "06",
      numberImg: assets.numberimg6,
      title: "Diet and Home Guidelines",
      description:
        "Helps children better process and respond to sensory information, such as sight, sound, touch, and movement. Through sensory-rich activities and play, this therapy improves sensory processing, coordination, and overall sensory integration.",
      image: assets.Service6,
    },
    {
      id: "07",
      numberImg: assets.numberimg7,
      title: "Psychological Counseling and IQ Tests",
      description:
        "Offers emotional support and cognitive assessments to better understand and address a child's psychological and cognitive needs. This service includes individual counseling and assessments to identify strengths, challenges, and appropriate interventions.",
      image: assets.Service7,
    },
    {
      id: "08",
      numberImg: assets.numberimg8,
      title: "Neurodevelopmental Therapy",
      description:
        "Supports the development of neurological and cognitive functions through structured exercises and activities. Aims to enhance cognitive skills, motor abilities, and overall neurological development for children with neurodevelopmental disorders.",
      image: assets.Service8,
    },
    {
      id: "09",
      numberImg: assets.numberimg9,
      title: "Brain Gym",
      description:
        "Uses physical exercises designed to stimulate brain function and improve motor skills. This therapy integrates physical movement with cognitive tasks to boost coordination, learning abilities, and overall cognitive performance.",
      image: assets.Service9,
    },
    {
      id: "10",
      numberImg: assets.numberimg10,
      title: "Group Therapy",
      description:
        "Provides therapeutic support in a group setting, encouraging social interaction and shared experiences. Through group activities and discussions, children benefit from peer support and collaborative learning",
      image: assets.Service10,
    },
  ];
  return (
    <div className="flex flex-col items-center py-16 min-h-screen bg-[#FFF6E0] md:px-10 lg:px-20">
      <h1 className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-semibold ">
        Services
      </h1>
      {services.map((service, index) => (
        
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 my-8  w-full"
          >
            <img
              src={service.image}
              className={`w-auto h-[290px] md:h-[420px] mx-auto ${
                index % 2 && "md:col-start-2 md:col-end-3"
              }`}
              alt=""
            />
            <div
              style={cardStyle}
              className={`mx-auto relative px-0 ${
                index % 2 &&
                "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2"
              }`}
            >
              {/* <h1 style={numberStyle} className="sm:text-[200px]">{service.id}</h1> */}
              <img src={service.numberImg} alt="" />
              <div className="">
                <div style={titleStyle}>{service.title}</div>
                <p style={descriptionStyle}>{service.description}</p>
              </div>
            </div>
          </div>
        
      ))}
    </div>
  );
};

export default Services;
