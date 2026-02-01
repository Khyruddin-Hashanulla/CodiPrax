import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion";

const Templet = ({ Title, Heading, Description, FormType, setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black px-4">
      {/* Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full max-w-md backdrop-blur-xl bg-white/5 rounded-2xl shadow-xl p-6 sm:p-8"
      >
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-200">{Title}</h1>
          <h2 className="text-sm font-medium text-emerald-600 mt-1">
            {Heading}
          </h2>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 text-center mb-6">{Description}</p>

        {/* Form */}
        <div>
          {FormType === "login" ? (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Templet;
