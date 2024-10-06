import React from "react";
import { assets } from "../../assets/assets";
import Director from "../../components/Director";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";

const About = () => {
  return (
    <>
      <Director></Director>
      <section className="flex flex-col items-center py-16 min-h-screen bg-[#FFF6E0] md:px-10 lg:px-20">
        <h1 className="text-black text-3xl md:text-4xl lg:text-5xl  font-extrabold ">
          About Us
        </h1>
        <div className="grid md:grid-cols-2  my-10 gap-8">
          <div className="flex flex-col justify-between text-[#2F2F2F] px-3 font-medium text-justify">
            <p>
              Welcome to Seven Senses Integration Center, where we are devoted
              to nurturing the growth and development of children through
              personalized therapeutic care. Our center serves as a hub of
              specialized psychological and developmental services, all designed
              to help children overcome challenges, enhance their unique
              abilities, and achieve their fullest potential. We believe that
              early intervention and structured, evidence-based therapies can
              make a significant difference in shaping a child’s developmental
              journey and overall well-being.
            </p>
            <p>
              At 7 Senses, we recognize that each child is wonderfully unique,
              with their own distinct strengths, challenges, and aspirations. We
              take a holistic approach to therapy, which means we don’t just
              focus on the immediate issues but also aim to foster long-term
              growth, independence, and confidence. Our highly skilled team of
              therapists, educators, and specialists collaborates across
              multiple disciplines to create individualized and comprehensive
              treatment plans that are specifically tailored to the emotional,
              behavioral, and developmental needs of each child.
            </p>
            <p>
              Our team is committed to providing a nurturing environment where
              children feel supported, safe, and motivated to grow. We believe
              that strong collaboration between parents, caregivers, and
              educators is key to success. By working closely with families, we
              ensure that every child receives the guidance, care, and
              encouragement they need both in and outside the therapy center.
              Whether your child requires assistance with communication,
              behavior, learning, or developmental challenges, we are here to
              walk with them every step of the way on their journey to success.
            </p>
          </div>
          <div className="px-6">
            <div className="bg-white rounded-3xl overflow-hidden object-contain">
              <img src={assets.appointment_img} className="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <Vision></Vision>
      <Mission></Mission>
    </>
  );
};

export default About;
