import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";
import Featured from "../assets/Featured.png";
import Portfolio from "../assets/Portfolio.png";

const projects = [
  {
    id: "LMS SaaS",
    title: "Learning Management SaaS",
    desc: "A scalable compact SaaS dashboard with role-based auth and real-time analytics.",
    tag: "Featured Project",
    image: Featured,
    github: "https://github.com/Khyruddin-Hashanulla/thenextera.git",
    live: "https://thenextera.in",
    details: {
      overview:
        "A multi-tenant learning management system (LMS) SaaS platform with real-time analytics, role-based authentication, and a modular architecture. Designed for scalability and ease of use.Users can sign up as students or teachers, track progress, and manage courses. Admins have access to detailed analytics and user management features.Students can enroll in courses, track their progress.Teacher dashboards allow for course creation, student management, and performance tracking.",
      features: [
        "JWT Authentication",
        "Progress Tracking",
        "Admin Dashboard",
        "Student, Teacher Roles",
      ],
      tech: ["React", "Tailwind", "Node", "MongoDB"],
    },
  },
  {
    id: "mern-auth",
    title: "MERN Auth System",
    desc: "JWT authentication with role-based access and secure APIs.",
    tag: "Backend + Frontend",
    github: "#",
    live: "#",
    details: {
      overview:
        "Secure authentication system with refresh tokens, RBAC, and protected APIs.",
      features: ["JWT + Refresh Tokens", "RBAC", "Secure APIs"],
      tech: ["React", "Express", "MongoDB"],
    },
  },
  {
    id: "portfolio",
    title: "Creative Portfolio",
    desc: "Portfolio site with cinematic motion and smooth transitions.",
    tag: "UI / UX",
    image: Portfolio,
    github: "https://github.com/Khyruddin-Hashanulla/MY-PORTFOLIO.git",
    live: "https://khyruddin-hashanulla.github.io/MY-PORTFOLIO/",
    details: {
      overview:
        "Portfolio site with cinematic motion and smooth transitions. Showcases projects elegantly. Show education experience and skills with interactive elements and animations.",
      features: ["Shared Layout Animations", "Scroll FX", "Glassmorphism"],
      tech: ["React", "Framer Motion"],
    },
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    desc: "A real-time messaging platform with private chats, groups and live presence.",
    tag: "Fullstack Project",
    github: "#",
    live: "#",
    details: {
      overview:
        "A scalable real-time chat application supporting private and group conversations with live online status and message delivery.",
      features: [
        "WebSocket / Socket.IO",
        "Typing Indicators",
        "Online Presence",
        "Message Read Receipts",
      ],
      tech: ["React", "Node", "Socket.IO", "MongoDB"],
    },
  },
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    desc: "An AI-powered tool that analyzes resumes and provides smart insights.",
    tag: "AI + Frontend",
    github: "#",
    live: "#",
    details: {
      overview:
        "An intelligent resume analysis platform that evaluates resumes using AI and provides actionable insights and scoring.",
      features: [
        "Resume Parsing",
        "AI Skill Matching",
        "ATS Score Analysis",
        "PDF Upload Support",
      ],
      tech: ["React", "Tailwind", "OpenAI API", "Node"],
    },
  },
  {
    id: "ecommerce-admin",
    title: "E-Commerce Admin Panel",
    desc: "A powerful admin dashboard for managing products, orders and users.",
    tag: "Dashboard System",
    github: "#",
    live: "#",
    details: {
      overview:
        "A full-featured e-commerce admin dashboard for managing inventory, orders, users and analytics.",
      features: [
        "Product Management",
        "Order Tracking",
        "Role-Based Access",
        "Sales Analytics",
      ],
      tech: ["React", "Tailwind", "Node", "PostgreSQL"],
    },
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#061a1d] text-white overflow-hidden py-8"
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-emerald-400 font-extrabold text-4xl md:text-6xl mb-4">
            PROJECTS
          </p>
          <h2 className="text-3xl max-w-xl">
            Things I’ve built with passion, curiosity and code.
          </h2>
        </motion.div>

        {/* GRID */}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[220px]"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              layoutId={p.id}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                show: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className={`
              group relative isolate rounded-3xl p-6
              backdrop-blur-xl bg-white/5
              border border-white/10
              shadow-xl
              overflow-hidden
              ${i === 0 ? "md:col-span-2 row-span-2" : ""}
            `}
            >
              {/* DETAILS BUTTON */}

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(p);
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                absolute top-4 right-4 z-999
                text-xs px-3 py-1 rounded-full
                bg-black/60 backdrop-blur-md
                border border-white/20
                hover:bg-black/80
                transition
                cursor-pointer
              "
              >
                Details
              </motion.button>

              {/* new content */}

              <div className="relative z-10 flex flex-col justify-between h-full">
                {/* FEATURED IMAGE */}

                {p.tag === "Featured Project" && p.image && (
                  <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg pointer-events-none">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="
                      w-full h-full
                      object-cover
                      object-center
                      brightness-75
                    "
                    />

                    {/* overlay */}

                    <div className="absolute inset-0 rounded-lg bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                  </div>
                )}

                {/* TEXT CONTENT */}

                <motion.div className="backdrop-blur-lg p-3 rounded-lg bg-black/40 border border-white/20">
                  <span className="text-xs text-emerald-400 uppercase tracking-wider">
                    {p.tag}
                  </span>

                  <h3 className="text-xl font-semibold mt-3 mb-2">{p.title}</h3>

                  <p className="text-sm text-white/70 max-w-[90%]">{p.desc}</p>
                </motion.div>

                {/* LINKS */}

                <motion.div className="flex gap-6 mt-6 opacity-0 group-hover:opacity-100 transition duration-500">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 cursor-pointer"
                    >
                      <FaGithub />
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-emerald-400 cursor-pointer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </motion.div>
              </div>

              {/* new content */}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* EXPANDED OVERLAY */}

      <AnimatePresence>
        {active && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setActive(null)}
            />

            {/* Expanded Card */}

            <motion.div
              layoutId={active.id}
              className="fixed inset-0 z-50
              flex items-center justify-center
              p-6
              bg-black/70
              backdrop-blur-sm
              overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="
                relative w-full max-w-6xl h-[80vh]
                rounded-3xl
                backdrop-blur-2xl bg-[#061a1d]/90
                border border-white/10
                shadow-2xl
                grid grid-cols-1
                md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                overflow-hidden
                "
              >
                <button
                  onClick={() => setActive(null)}
                  className=" cursor-pointer absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <X size={18} />
                </button>

                {/* LEFT – IMAGE / VIDEO PREVIEW */}
                <div className="relative w-full h-full overflow-hidden bg-black flex items-center justify-center">
                  {active.image ? (
                    <img
                      src={active.image}
                      alt={active.title}
                      className="
                      w-full h-full
                      object-contain
                      md:object-contain
                      select-none
                    "
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/40">
                      Project Preview
                    </div>
                  )}

                  {/* Optional gradient for aesthetics */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/40 via-black/10 to-transparent" />
                </div>

                {/* RIGHT */}

                <div
                  className="
                    min-w-0 p-10 flex flex-col justify-between overflow-y-auto
                  "
                >
                  <div>
                    <span className="text-xs text-emerald-400 uppercase">
                      {active.tag}
                    </span>
                    <h3 className="text-3xl font-bold mt-4 mb-4">
                      {active.title}
                    </h3>
                    <p className="text-white/70 mb-6">
                      {active.details.overview}
                    </p>

                    <h4 className="text-emerald-400 text-sm mb-2">Features</h4>
                    <ul className="space-y-2 text-sm text-white/70 mb-6">
                      {active.details.features.map((f, i) => (
                        <li key={i}>— {f}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {active.details.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.div className="flex gap-6 mt-8">
                    {/* GitHub */}

                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      text-white/70
                      hover:text-emerald-400
                      transition-colors duration-300
                    "
                      aria-label="View source code on GitHub"
                    >
                      <FaGithub size={20} />
                    </a>

                    {/* Live Demo */}

                    <a
                      href={active.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-white/70
                        hover:text-emerald-400
                        transition-colors duration-300
                      "
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
