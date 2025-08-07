import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import Aboutsection from '../Section/About'
import Hero from '../Section/Hero';

function About() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Aboutsection />
      {/* More Info */}
   {/* Why Choose Us */}
      <section className="bg-white px-6 py-20 text-center">
        <h3 className="text-4xl font-bold text-[#187530] mb-12">
          Why Choose Us
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            {
              title: "End-to-End Management",
              text: "From documentation to maintenance, we manage the full property lifecycle.",
            },
            {
              title: "NRI-Centric Approach",
              text: "Remote owners get full transparency, legal support, and peace of mind.",
            },
            {
              title: "Community-Centered",
              text: "We nurture cooperative societies through tech, care, and governance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#f2e9df] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold text-[#187530] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[#f9f4ef] px-6 py-20 text-center">
        <h3 className="text-4xl font-bold text-[#187530] mb-16">How We Work</h3>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal dashed line (desktop only) */}
          <div className="hidden md:block absolute top-[32px] left-0 right-0 h-0.5 border-t-2 border-dashed border-[#187530] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {[
              {
                title: "Consultation",
                text: "We begin by understanding your unique project goals, needs, and challenges.",
              },
              {
                title: "Planning",
                text: "We craft a custom roadmap with roles, timelines, and KPIs tailored for you.",
              },
              {
                title: "Execution",
                text: "Our team oversees service delivery, communication, and issue resolution.",
              },
              {
                title: "Ongoing Support",
                text: "You receive regular reports, feedback loops, and improvement suggestions.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >
                {/* Circle */}
                <div className="w-14 h-14 rounded-full bg-[#187530] text-white flex items-center justify-center text-lg font-semibold mb-4 z-10">
                  {index + 1}
                </div>
                {/* Title */}
                <h4 className="text-lg font-bold text-[#187530] mb-2">
                  {step.title}
                </h4>
                {/* Description */}
                <p className="text-gray-700 text-sm max-w-xs">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-white px-6 py-20 text-center">
        <h3 className="text-4xl font-bold text-[#187530] mb-12">Our Team</h3>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              name: "Ravi Kumar",
              role: "Head of Operations",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Neha Sharma",
              role: "Legal & Compliance Lead",
              image: "https://via.placeholder.com/150",
            },
            {
              name: "Ajay Verma",
              role: "Community Engagement Manager",
              image: "https://via.placeholder.com/150",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#f9f9f9] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-[#187530]">
                {member.name}
              </h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </div>
  )
}

export default About
