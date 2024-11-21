import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto">
            I am a dynamic Fullstack Developer driven by the pursuit of crafting impactful, user-centered digital solutions. I bring innovation and expertise to every project I undertake.
          </p>
          <div className="mt-6 h-1 w-16 bg-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-16">
          {/* Image Section */}
          <div className="w-full md:w-6/12 flex justify-center md:justify-start mt-12 md:mt-0">
            <div className="relative w-full md:w-[90%] aspect-square">
              {/* Styled Borders */}
              <div className="absolute -inset-4 rounded-xl border-4 border-blue-700 shadow-2xl hidden md:block"></div>
              <div className="absolute -inset-2 rounded-xl border-4 border-gray-400 shadow-2xl hidden md:block"></div>
              <Image
                src="/images/codeimage.jpg"
                alt="Ronald McGarret"
                className="relative rounded-xl shadow-lg object-cover"
                fill
                sizes="(max-width: 760px) 900vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-3xl font-semibold text-blue-900 text-center md:text-left leading-tight mt-3">
              Blending Creativity & Technical Excellence
            </h3>
            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
            As a Fullstack Developer specializing in crafting modern, scalable web and mobile applications. My passion lies in transforming challenges into seamless, impactful solutions.
            </p>

            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
              Whether it&apos;s building sleek, responsive interfaces or engineering robust backend systems, I strive to deliver digital experiences that are intuitive, efficient, and exceed expectations. My expertise stems from hands-on experience with diverse projects and a dedication to continuous learning.
            </p>

            <p className="text-gray-700 text-lg text-center md:text-left leading-relaxed">
              Collaboration fuels my growth, and I am eager to contribute to projects that challenge the norm. Let’s innovate together and build solutions that leave a lasting impact.
            </p>

            <a
              href="https://wa.me/254743823564?text=Hello!%20I%27m%20interested%20in%20collaborating%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg mt-6"
            >
              Let&apos;s Collaborate
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
