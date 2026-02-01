import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Server,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  const navigate = useNavigate();

  function contactHandler() {
    navigate("/#contact");
  }
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black text-white">

      {/* HERO */}
      <section className="min-h-120 py-18 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Building <span className="text-emerald-500">Modern Web</span><br />
            Experiences That Scale
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            At CodiPrax, we craft high-performance, visually refined, and
            scalable web applications using modern technologies and clean
            engineering principles.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              MERN Stack
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              UI / UX Engineering
            </span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">
              Scalable Architecture
            </span>
          </div>
        </motion.div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-24 px-6 border-t border-white/10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto space-y-16"
        >
          {/* Service 1 */}
          <motion.div variants={item} className="grid md:grid-cols-2 gap-10">
            <div>
              <Code className="text-emerald-500 mb-4" size={32} />
              <h2 className="text-3xl font-bold mb-4">
                Frontend Engineering
              </h2>
              <p className="text-slate-300 leading-relaxed">
                We design and develop pixel-perfect, responsive interfaces
                using React, Tailwind CSS, and modern UI patterns.
                Performance, accessibility, and usability are baked in from
                day one.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• Responsive layouts for all devices</li>
                <li>• Component-driven architecture</li>
                <li>• Smooth animations & transitions</li>
                <li>• Accessibility-first approach</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div variants={item} className="grid md:grid-cols-2 gap-10 md:flex-row-reverse">
            <div>
              <Server className="text-emerald-500 mb-4" size={32} />
              <h2 className="text-3xl font-bold mb-4">
                Backend & APIs
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Robust backend systems built with Node.js, Express, and MongoDB.
                Secure authentication, clean APIs, and scalable architecture
                that grows with your product.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• RESTful API design</li>
                <li>• JWT authentication & security</li>
                <li>• Database modeling & optimization</li>
                <li>• Error handling & validation</li>
              </ul>
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div variants={item} className="grid md:grid-cols-2 gap-10">
            <div>
              <Layers className="text-emerald-500 mb-4" size={32} />
              <h2 className="text-3xl font-bold mb-4">
                Full-Stack MERN Solutions
              </h2>
              <p className="text-slate-300 leading-relaxed">
                From idea to deployment, we deliver complete MERN applications
                with clean codebases, optimized performance, and production-ready
                setups.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>• End-to-end architecture</li>
                <li>• State management & routing</li>
                <li>• Deployment on Vercel / Cloud</li>
                <li>• Maintainable & scalable code</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-10">
            Our Development Process
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-slate-300">
            <div>
              <Zap className="mx-auto mb-3 text-emerald-500" />
              <p>Planning & Strategy</p>
            </div>
            <div>
              <Shield className="mx-auto mb-3 text-emerald-500" />
              <p>Secure Architecture</p>
            </div>
            <div>
              <Globe className="mx-auto mb-3 text-emerald-500" />
              <p>Development & Testing</p>
            </div>
            <div>
              <Layers className="mx-auto mb-3 text-emerald-500" />
              <p>Launch & Scale</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">
            Let’s Build Something Meaningful
          </h2>
          <p className="text-slate-300 mt-4 max-w-xl mx-auto">
            Whether it’s a product, portfolio, or startup idea — we’re ready
            to engineer it with precision and care.
          </p>

          <button onClick={contactHandler} className="mt-8 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 transition-colors font-semibold">
            Contact Us
          </button>
        </motion.div>
      </section>

      <footer className="pb-8 text-center text-sm text-white/40">
        © {new Date().getFullYear()} CodiPrax — Crafting the Web with Purpose
      </footer>
    </div>
  );
};

export default Services;