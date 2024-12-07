"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaDatabase,
  FaPaintBrush,
  FaRobot,
} from "react-icons/fa";

const Skills = () => {
  const courses = [
    {
      category: "Frontend Development",
      icon: <FaLaptopCode size={40} className="text-blue-600" />,
      topics: [
        "Use of JavaScript and  TypeScript ",
        "Consuming RESTful APIs using fetch and Axios",
        "Multi-Device Layout Optimization",
        "Optimization Techniques",
        "Responsive Design",
      ],
      progressLabel: "Advanced",
      progressValue: "95%",
    },
    {
      category: "Mobile Development",
      icon: <FaMobileAlt size={40} className="text-green-500" />,
      topics: ["Learning Mobile Development",
        "Building Android and iOS apps using React Native",
      ],
      progressLabel: "Beginner",
      progressValue: "50%",
    },
    {
      category: "Backend Development",
      icon: <FaServer size={40} className="text-purple-600" />,
      topics: [
        "Web Development with Django",
        "Implementing RESTful APIs with Django Rest Framework",
        "Database Management with PostgreSQL",
        "JWT Authentication /Auth0 Authentication",
      ],
      progressLabel: "Proficient",
      progressValue: "85%",
    },
    {
      category: "Cloud Infrastructure",
      icon: <FaCloud size={40} className="text-indigo-500" />,
      topics: ["Containerization with Docker", "Implementing CI/CD Pipelines", "Deployment on Kubernetes"],
      progressLabel: "Intermediate",
      progressValue: "60%",
    },
    {
      category: "Version Control and Collaboration",
      icon: <FaDatabase size={40} className="text-gray-600" />,
      topics: [
        "Git and GitHub",
        "Version Control with Git",
        "Collaboration with GitHub",
        "GitHub Flow and Pull Requests",
      ],
      progressLabel: "Proficient",
      progressValue: "90%",
    },
    {
      category: "UX/UI Design",
      icon: <FaPaintBrush size={40} className="text-teal-500" />,
      topics: [
        "Design Principles",
        "Wireframing and Prototyping",
        "Responsive Design",
        "Accessibility and Usability",
      ],
      progressLabel: "Advanced",
      progressValue: "80%",
    },
    {
      category: "Machine Learning",
      icon: <FaRobot size={40} className="text-orange-500" />,
      topics: [
        "Machine Learning Basics",
        "Implementing Machine Learning Models",
        "Feature Engineering and Preprocessing",
        "Model Evaluation and Optimization",
      ],
      progressLabel: "Beginner",
      progressValue: "40%",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Animation */}
        <motion.h2
          className="text-5xl font-bold text-center text-black-500 mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        {/* Animated Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}  // This will allow repeated animation when entering the viewport
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-6">
                {course.icon}
                <h3 className="text-xl font-bold ml-4 text-black-500">
                  {course.category}
                </h3>
              </div>

              {/* Topics */}
              <ul className="text-black-500 mb-6 list-disc ml-8">
                {course.topics.map((topic, index) => (
                  <li
                    key={index}
                    className="text-[12px] mb-2 truncate overflow-hidden whitespace-nowrap max-w-[280px]"
                  >
                    {topic}
                  </li>
                ))}
              </ul>

              {/* Animated Progress Bar */}
              <div className="relative pt-1">
                <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: course.progressValue }}
                    viewport={{ once: false }}  // Ensure this triggers every time the element is in the viewport
                    transition={{ duration: 1 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-500 to-purple-500"
                  ></motion.div>
                </div>
                <span className="font-bold text-black-500 text-lg">
                  {course.progressLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
