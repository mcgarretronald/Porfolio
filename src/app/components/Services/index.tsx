"use client";

import React, { useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaProjectDiagram, FaPencilRuler, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode size={60} className="text-blue-500" />,
    shortDescription: "Creating dynamic and responsive web interfaces with a focus on user experience.",
    details: "I specialize in building intuitive and responsive user interfaces using modern tools like React and Next.js. I ensure performance, accessibility, and mobile-first design in all web applications.",
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt size={60} className="text-blue-500" />,
    shortDescription: "Developing seamless mobile apps with React Native, ensuring scalability and great user experience.",
    details: "Using React Native, I create mobile applications that are both efficient and visually appealing. My focus is on delivering cross-platform apps that run smoothly on both Android and iOS devices.",
  },
  {
    title: "Backend Development",
    icon: <FaDatabase size={60} className="text-blue-500" />,
    shortDescription: "Building robust and scalable backend systems to power your web and mobile apps.",
    details: "With Django and RESTful APIs, I create secure and efficient backend systems that handle your app's data and logic seamlessly.",
  },
  {
    title: "Cloud Infrastructure",
    icon: <FaCloud size={60} className="text-blue-500" />,
    shortDescription: "Deploying applications on reliable and scalable cloud environments.",
    details: "I provide cloud solutions using Docker and cloud platforms, ensuring your applications are scalable, reliable, and cost-effective.",
  },
  {
    title: "UX/UI Design",
    icon: <FaPencilRuler size={60} className="text-blue-500" />,
    shortDescription: "Designing visually engaging and user-friendly digital experiences.",
    details: "I focus on creating designs that are both visually appealing and user-centric, using tools like Figma and Adobe Illustrator to bring your vision to life.",
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDetails = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-32 bg-pink-50">
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-black-500">What Services I&rsquo;m Providing</h2>
          <p className="text-gray-600 mt-2 md:text-xl text-[10px]">Click &quot;Learn More&quot; to discover how I can help bring your ideas to life.</p>
          <div className="mt-2 h-1 w-16 bg-pink-500 mx-auto"></div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center transition-transform transform hover:-translate-y-2 duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <div className="flex justify-center items-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-black-500 text-lg mb-6">
                {expandedIndex === index ? service.details : service.shortDescription}
              </p>
              <button
                onClick={() => toggleDetails(index)}
                className="flex justify-center items-center text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                {expandedIndex === index ? "Show Less" : "Learn More"} <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
