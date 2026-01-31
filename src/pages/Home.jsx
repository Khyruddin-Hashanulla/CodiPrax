import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "../assets/Home.png";
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaSalesforce,
  FaBootstrap,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";

const Home = () => {
  const icons = [
    DiMongodb,
    DiNodejs,
    FaReact,
    FaNodeJs,
    FaAngular,
    FaSalesforce,
    RiTailwindCssFill,
    FaBootstrap,
    SiRedux,
    FaGithub,
    FaCss3Alt,
  ];
  return (
    <div className="w-full flex-col min-h-screen inset-0 bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black flex items-center justify-center">
      {/* HOME-SECTION */}

      <section id="home" className="w-full z-0 ">
        {/* bg-linear-to-br from-[#7A3550] via-[#3A141E] to-[#140709] */}
        <div className="relative w-full min-h-screen md:h-screen inset-0 bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black overflow-hidden flex items-center justify-center">
          {/* BIG HEADING */}
          <motion.div
            className="absolute top-17 text-center leading-none font-extrabold tracking-wider z-0 pointer-events-none
                px-4 sm:px-6 md:px-8 lg:px-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-emerald-400 animate-pulse">
              EXPLORE MY
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-black -mt-1 sm:-mt-2 md:-mt-3 animate-pulse">
              PORTFOLIO
            </h1>
          </motion.div>
          {/* CENTER IMAGE */}
          <motion.div
            className="
            relative z-10
            flex justify-center items-center
            w-full
            min-h-[85vh]
            md:min-h-0 md:h-full md:items-end
          "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <img
              src={Image}
              alt="Hero"
              className="
              /* MOBILE: force scale */
              w-[140%]
              max-w-none
              h-auto
              max-h-[60vh]

              /* TABLET & UP */
              md:w-auto
              md:max-h-[55vh]
              lg:max-h-[75vh]

              object-contain
              drop-shadow-xl
              hover:scale-[1.02]
              transition-transform duration-1000
              mask-[linear-gradient(to_bottom,black_70%,transparent)]
              animate-pulse
            "
            />
          </motion.div>

          {/* LEFT DOWN TEXT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-4 sm:left-6 md:left-10 lg:left-16 
            bottom-24 sm:bottom-28 md:bottom-32
            text-[10px] sm:text-xs tracking-widest text-gray-300 uppercase
            z-50 pointer-events-auto"
          >
            Designer est. 2024
            <Link
              to="/#projects"
              className="mt-6 w-12 h-12 border-4 border-t-emerald-400 border-b-emerald-400 bg-black rounded-full 
              flex items-center justify-center text-3xl
              hover:bg-white/10 transition-all 
              cursor-pointer animate-bounce"
            >
              ↓
            </Link>
          </motion.div>

          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              absolute left-4 sm:left-6 md:left-10 lg:left-16
              top-42 sm:top-46 md:top-54 lg:top-82
              text-[10px] sm:text-xs tracking-widest text-gray-300 uppercase
              text-left
              max-w-35 sm:max-w-45 md:max-w-55
            "
          >
            <p className="font-extrabold text-emerald-400 text-3xl">
              Khyruddin Hashanulla
            </p>

            {/* Animated Role */}
            <p className="mt-1">
              <Typewriter
                words={[
                  "Software Engineer",
                  "MERN Stack Developer",
                  "UI/UX Enthusiast",
                  "Tech Content Creator",
                ]}
                loop={0} // infinite
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </p>
          </motion.div>

          {/* RIGHT TEXT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-4 sm:right-6 md:right-10 lg:right-16 
             top-42 sm:top-46 md:top-54 lg:top-82
             text-[10px] sm:text-xs tracking-widest text-gray-300 text-right uppercase
             max-w-35 sm:max-w-45 md:max-w-55 animate-pulse"
          >
            I am passionate about creating web platforms that stand out from the
            crowd.
          </motion.div>
          {/* RIGHT DOWN TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute right-4 sm:right-6 md:right-10 lg:right-16 
             bottom-24 sm:bottom-28 md:bottom-32
             text-[10px] sm:text-xs tracking-widest text-gray-300 text-right uppercase
             space-y-1"
          >
            <p>UI/UX</p>
            <p>DSA in JAVA</p>
            <p>Salesforce Admin</p>
            <p>Ai Software Engineer</p>
            <p>MERN Stack Developer</p>
          </motion.div>
        </div>

        {/* ICONS SECTION */}

        <div className="relative w-full overflow-hidden py-3 border-t border-b">
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-linear-to-r from-teal-900 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-linear-to-l from-teal-950 to-transparent z-10" />

          {/* Infinite marquee */}
          <motion.div
            className="flex gap-8 w-max "
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "backInOut",
            }}
          >
            {[...icons, ...icons].map((Icon, i) => (
              <div
                key={i}
                className="
          group
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full text-white/50 border-3
          border-b-emerald-400 border-t-emerald-400
          flex items-center justify-center
          cursor-pointer
          transition-all duration-300
          hover:scale-110
          hover:shadow-lg
        "
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 group-hover:drop-shadow-md transition-all" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABOUT-SECTION */}

      <section id="about" className="w-full min-h-screen bg-[#f6f7fb] scroll-mt-38">
        <About />
      </section>

      {/* PROJECTS-SECTION */}

      <section id="projects" className="w-full min-h-screen bg-[#f6f7fb] scroll-mt-16">
        <Projects />
      </section>

      {/* BLOG-SECTION */}

      {/* <section id="blog" className="w-full min-h-screen bg-[#f6f7fb] scroll-mt-16">
        <Blog />
      </section> */}

      {/* CONTACT-SECTION */}

      <section id="contact" className="w-full min-h-screen bg-[#f6f7fb] scroll-mt-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
