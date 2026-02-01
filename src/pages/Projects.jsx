import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { X } from "lucide-react";
import Featured from "../assets/Featured.png";
import Portfolio from "../assets/Portfolio.png";
import Oxiwell from "../assets/Oxiwell.png";
import TrenZo from "../assets/TrenZo.png";
import OrbitIQ from "../assets/OrbitIQ.png";
import StayZo from "../assets/StayZo.png";

const projects = [
  {
    id: "LMS SaaS",
    title: "Learning Management SaaS",
    desc: "A multi-tenant LMS platform with real-time analytics and role-based authentication.",
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
        "Real-Time Analytics",
        "Modular Architecture",
        "Responsive Design",
        "RESTful APIs",
        "Cloud Deployment",
      ],
      tech: ["React", "Tailwind", "Node.js", "MongoDB", "JWT", "Express"],
    },
  },
  {
    id: "Healthcare-management",
    title: "Oxiwell",
    desc: "Healthcare Management System for patient records, appointments and staff.",
    tag: "Backend + Frontend",
    image: Oxiwell,
    github: "https://github.com/Khyruddin-Hashanulla/Oxiwell.git",
    live: "https://oxiwell.onrender.com",
    details: {
      overview:
        "A full-featured healthcare management system that streamlines patient records, appointment scheduling, and medical staff management. Designed to improve efficiency and patient care in medical facilities. Patients can book appointments, view medical history, and communicate with healthcare providers. Medical staff can manage patient records, schedule appointments, and access analytics. Admins have control over user roles and system settings.Doctors can view their schedules, patient details, and update medical records.",
      features: ["JWT + Refresh Tokens", "RBAC", "Secure APIs"],
      tech: ["React", "Express", "MongoDB", "JWT", "Node.js"],
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
      features: [
        "Shared Layout Animations",
        "Scroll FX",
        "Glassmorphism",
        "Responsive Design",
        "Dark Mode",
        "Typewriter Effect",
        "Lazy Loading",
      ],
      tech: ["HTML", "CSS", "JavaScript"],
    },
  },
  {
    id: "Space Data & Mission Tracker",
    title: "OrbitIQ",
    desc: "Real-time space data and mission tracker with 3D visualization.",
    tag: "Fullstack Project",
    image: OrbitIQ,
    github: "https://github.com/Khyruddin-Hashanulla/OrbitIQ.git",
    live: "https://orbitiq.onrender.com",
    details: {
      overview:
        "A real-time space data and mission tracker with 3D visualization. Provides up-to-date information on satellites, space missions, and celestial events. Users can explore interactive 3D models of spacecraft and track their orbits in real-time.Data is sourced from public space APIs and presented with engaging visualizations.Users can search for specific missions, view satellite trajectories, and access detailed information about space events. The platform includes a 3D globe visualization powered by Three.js, allowing users to see satellite positions and orbits in an interactive manner. Satellite tracking with real-time updates on positions and trajectories.",
      features: [
        "3D Visualization",
        "Real-Time Data",
        "Satellite Tracking",
        "Mission Details",
        "Interactive Globe",
        "Responsive Design",
        "API Integration",
        "Search Functionality",
      ],
      tech: ["React", "Node", "Express", "MongoDB", "NASA APIs", "Three.js", "Tailwind", "NY20"],
    },
  },
  {
    id: "Tourism Website",
    title: "StayZo",
    desc: "Tourism website for booking and exploring destinations.",
    tag: "Fullstack Project",
    image: StayZo,
    github: "https://github.com/Khyruddin-Hashanulla/StayZo.git",
    live: "https://stayzo-46kr.onrender.com",
    details: {
      overview:
        "A tourism website for booking accommodations and exploring travel destinations. Users can search for hotels, read reviews, and make reservations. The platform offers destination guides, travel tips, and personalized recommendations based on user preferences.Users can browse accommodations by location, price, and amenities. Detailed listings include photos, descriptions, and user reviews. The booking system allows users to check availability, select dates, and complete reservations securely. Admins can manage listings, bookings, and user accounts through a dedicated dashboard. The website features a responsive design for optimal viewing on all devices.",
      features: [
        "Accommodation Search",
        "Booking System",
        "User Reviews",
        "Destination Guides",
        "Responsive Design",
      ],
      tech: ["HTML","CSS", "Java Script" , "JWT Authentication", "RESTful APIs", "Cloudinary"],
    },
  },
  {
    id: "ecommerce-admin",
    title: "TrenZo",
    desc: "E-commerce Admin Dashboard for inventory, orders, users and analytics.",
    tag: "Dashboard System",
    image: TrenZo,
    github: "https://github.com/Khyruddin-Hashanulla/TrenZo.git",
    live: "https://trenzo-rouge.vercel.app",
    details: {
      overview:
        "A full-featured e-commerce admin dashboard for managing inventory, orders, users and analytics. Provides insights and control over online store operations. Admins can manage products, track orders, view sales analytics, and handle user accounts. The dashboard includes charts and reports for sales performance and inventory levels. Responsive design ensures usability across devices. Authentication and role-based access control secures sensitive data and actions.",
      features: [
        "Product Management",
        "Order Tracking",
        "Role-Based Access",
        "Sales Analytics",
        "User Management",
        "Responsive Design",
        "RESTful APIs",
        "Cloud Deployment",
      ],
      tech: ["React", "Tailwind", "Next.js", "PostgreSQL", "Inngest", "Prisma", "Clerk", "Neon", "Cloudinary"],
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

                <motion.div className="flex gap-6 mt-2 opacity-0 group-hover:opacity-100 transition duration-500">
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
