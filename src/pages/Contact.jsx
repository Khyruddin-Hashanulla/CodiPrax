import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const submitHandler = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/business.khyruddin@gmail.com",
        {
          method: "POST",
          body: formData,
        },
      );

      if (res.ok) {
        toast.success("Message sent successfully 🚀");
        form.reset(); // ✅ clear form
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Network error ❌");
    }
  };
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#061a1d] text-white overflow-hidden py-8 px-4 sm:px-6 lg:px-8"
    >
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_60%)]" />

      <div className="max-w-6xl mx-auto w-full flex-1 space-y-20">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-emerald-400 font-extrabold text-4xl md:text-6xl mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let’s work together
          </h2>
          <p className="text-white/70 leading-relaxed">
            Whether you’re looking to build a product, improve an existing
            system, or just want to connect — I’m always open to meaningful
            conversations and collaboration opportunities.
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* LEFT — INFO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* WHAT I DO */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What I can help with
              </h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>— Frontend & full-stack web applications</li>
                <li>— SaaS dashboards & admin panels</li>
                <li>— UI/UX with modern animations</li>
                <li>— Performance & code optimization</li>
              </ul>
            </div>

            {/* AVAILABILITY */}
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Availability & response
              </h3>
              <div className="space-y-3 text-white/70 text-sm">
                <div className="flex items-center gap-3">
                  <FaClock className="text-emerald-400" />
                  <span>Usually responds within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-emerald-400" />
                  <span>Open to remote opportunities</span>
                </div>
              </div>
            </div>

            {/* DIRECT CONTACT */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Direct contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:your-email@gmail.com"
                  className="flex items-center gap-4 text-white/70 hover:text-emerald-400 transition-colors"
                >
                  <FaEnvelope />
                  business.khyruddin@gmail.com
                </a>

                <div className="flex gap-6">
                  <a
                    href="https://github.com/Khyruddin-Hashanulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-emerald-400 transition"
                  >
                    <FaGithub size={22} />
                  </a>

                  <a
                    href="https://linkedin.com/in/khyruddin-hashanulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-emerald-400 transition"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            onSubmit={submitHandler}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        rounded-3xl
        p-8
        space-y-6
      "
          >
            <h3 className="text-2xl font-semibold">Send a message</h3>
            <p className="text-white/60 text-sm">
              Tell me about your idea or project. I’ll reply soon.
            </p>

            {/* Required hidden inputs */}
            <input type="hidden" name="_subject" value="New Contact Message" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400"
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message"
              className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400 resize-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="
          w-full rounded-xl
          bg-emerald-400
          text-black
          font-semibold
          py-3
          hover:bg-emerald-300
          transition
        "
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* FOOTER NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            mt-auto
            pt-12
            text-center
            text-white/40
            text-sm
          "
        >
          I’m currently open to freelance work, collaborations, and full-time
          opportunities.
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
