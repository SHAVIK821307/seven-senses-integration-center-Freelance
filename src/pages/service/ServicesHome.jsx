import React from 'react'
import { FaHandHoldingHeart, FaComments, FaUserFriends, FaGraduationCap, FaPuzzlePiece, FaAppleAlt, FaBrain, FaRunning, FaDumbbell, FaUsers } from 'react-icons/fa'

const services = [
  { name: 'Occupational Therapy', icon: FaHandHoldingHeart },
  { name: 'Speech & Language Therapy', icon: FaComments },
  { name: 'Behavioral Counseling', icon: FaUserFriends },
  { name: 'Special Education', icon: FaGraduationCap },
  { name: 'Sensory Integration Therapy', icon: FaPuzzlePiece },
  { name: 'Diet and Home Guidelines', icon: FaAppleAlt },
  { name: 'Psychological Counseling and IQ Tests', icon: FaBrain },
  { name: 'Neurodevelopmental Therapy', icon: FaRunning },
  { name: 'Brain Gym', icon: FaDumbbell },
  { name: 'Group Therapy', icon: FaUsers },
]

export default function ServicesHome() {
  return (
    <div className="bg-[#FFF6E0] min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-black text-3xl md:text-4xl lg:text-5xl  font-extrabold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {React.createElement(service.icon, { className: "w-12 h-12 text-[#FFD700] mb-4" })}
              <h3 className="text-sm font-semibold text-center text-[#4A4A4A]">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}