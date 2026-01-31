import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/About.png";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen inset-0 bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black scroll-mt-24 border-b"
    >
      {/* Background Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          absolute top-6 left-4 sm:left-6 md:left-25
          font-extrabold
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          text-emerald-400
          pointer-events-none
        "
      >
        WHO I AM ?
      </motion.h2>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div
              className="
                w-full max-w-sm sm:max-w-md
                rounded-2xl
                backdrop-blur-2xl bg-white/20
                border border-white/40
                shadow-2xl
                hover:scale-[1.02]
                transition-transform duration-800
                mask-[linear-gradient(to_bottom,black_60%,transparent)]
              "
            >
              <img
                src={Image}
                alt="Khyruddin"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">About Me</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm Khyruddin, a software engineer focused on building modern,
              responsive web applications with clean UI and scalable
              architecture.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I work with React, Tailwind, Node.js and MongoDB, while growing as
              a tech content creator.
            </p>
          </motion.div>
        </div>

        {/* JOURNEY + EXPERIENCE */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* JOURNEY */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-10 text-emerald-400"
            >
              Journey
            </motion.h3>

            <div className="relative border-l border-gray-300 pl-7.5 space-y-16">
              {[
                { year: "2022", text: "Started learning web development" },
                { year: "2023", text: "Built real-world projects with React" },
                {
                  year: "2024",
                  text: "Exploring full-stack and system design",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-9.5 top-1 w-4 h-4 rounded-full bg-black" />
                  <p className="text-sm text-emerald-400 font-medium">
                    {item.year}
                  </p>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-10 text-emerald-400"
            >
              Experience
            </motion.h3>

            <div className="space-y-8">
              {[
                {
                  title: "Frontend Developer",
                  desc: "Built responsive, accessible UIs using React and Tailwind CSS.",
                },
                {
                  title: "Full Stack Projects",
                  desc: "Developed MERN applications with authentication, APIs, and clean architecture.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="
                    p-6 rounded-2xl
                    backdrop-blur-xl bg-white/5
                    border border-white/30
                    shadow-lg
                    hover:shadow-xl hover:scale-[1.02]
                    hover:-translate-y-1 hover:bg-white/10
                    transition-all duration-800
                  "
                >
                  <h4 className="text-lg font-semibold mb-2 text-emerald-400">{item.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
