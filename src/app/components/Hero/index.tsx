"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const jobTitles = [
  "A Frontend Developer.",
  "A Backend Developer.",
  "A UI/UX Designer.",
  "A Machine Learning Enthusiast.",
];

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-8">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-6 md:space-y-8">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Hi, I&apos;m Ronald<br />
            <span className="text-2xl md:text-3xl text-blue-700 transition-opacity duration-500">
              {jobTitles[currentTitleIndex]}
            </span>
          </h1>
          <p className="text-gray-300 text-xl md:text-xl lg:text-2xl">
            I craft cutting-edge web applications that blend seamless functionality with striking design, ensuring every project not only meets but redefines expectations.
          </p>
        </div>

        <div className="flex space-x-6 mt-6 justify-center md:justify-start">
          <a
            href="https://www.linkedin.com/in/ronald-mcgarret/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="mailto:mcgarretronald@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/mcgarretronald"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>

        <a
          href="/images/Ronald_Mcgarret_C.V.pdf"
          download="Ronald Mcgarret CV.pdf"
          className="inline-block bg-blue-700 text-white px-8 py-3 ml-[25%] md:ml-[0%] rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 self-center md:self-start"
        >
          Download CV
        </a>
      </div>
      {/* Image Section */}
      <div className="w-full md:w-6/12 flex justify-end mt-12 md:mt-0">
        <div className="relative w-full md:w-[80%] aspect-square">
          <Image
            src="/images/profile_pic.jpeg"
            alt="Ronald Mcgarret"
            className="rounded-2xl shadow-lg object-cover"
            fill
            sizes="(max-width: 760px) 90vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
