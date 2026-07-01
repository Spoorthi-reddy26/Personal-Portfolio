import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-20"
    >
      {/* LEFT SIDE */}
      <div className="lg:w-1/2">

        <p className="text-purple-400 text-2xl font-semibold">
          Hello, I'm
        </p>

        <h1 className="text-6xl lg:text-8xl font-bold text-white mt-3">
          Spoorthi
          <br />
          <span className="text-purple-500">H A</span>
        </h1>

        <div className="mt-5 text-3xl text-gray-300">
          <TypeAnimation
            sequence={[
              "Java Full Stack Developer",
              2000,
              "Spring Boot Developer",
              2000,
              "React Developer",
              2000,
              "Software Engineer",
              2000,
            ]}
            repeat={Infinity}
          />
        </div>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          Passionate Computer Science and Engineering Graduate with hands-on
          experience in Java Full Stack Development, Spring Boot, MySQL,
          REST APIs, React, and modern web technologies.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full"
          >
            View Projects
          </a>

          <a
            href="/resume/Spoorthi_HA_Resume.pdf"
            download
            className="border border-white px-6 py-3 rounded-full"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-purple-500 px-6 py-3 rounded-full"
          >
            Contact Me
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-10 text-3xl">

          <a
            href="https://github.com/Spoorthi26-reddy"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/spoorthi-reddy-5bb05b348"
            target="_blank"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:spoorthireddyy26@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE PHOTO */}
      <div className="lg:w-1/2 flex justify-center mt-16 lg:mt-0">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-40"></div>

          <img
            src="/images/profile.jpeg"
            alt="Spoorthi"
            className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]
                       rounded-full object-cover border-4 border-purple-500"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;