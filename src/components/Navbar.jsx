import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CodiPrax.png";
import { motion } from "framer-motion";

const Navbar = ({ isLoggedIn,setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const clickHandler = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-2 left-0 w-full z-50">
      <motion.div
        className="sticky max-w-7xl mx-auto px-4 py-1 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 backdrop-blur-xl bg-white/10 px-2 py-1.5 rounded-full"
        >
          <img
            src={Logo}
            alt="CodiPrax Logo"
            className="w-10 h-10 border-3 border-b-emerald-400 border-t-emerald-400  rounded-full shadow"
          />
          <span className="text-2xl text-emerald-400 font-extrabold">CodiPrax</span>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden text-emerald-400 md:flex items-center gap-6 backdrop-blur-xl bg-white/10 px-3 py-2 rounded-full">
          <Link
            to="/#home"
            className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
          >
            About
          </Link>
          <Link
            to="/#projects"
            className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP AUTH */}
        <div className="hidden text-emerald-400 md:flex gap-3 backdrop-blur-xl bg-white/10 px-3 py-2 rounded-full">
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
              >
                Sign Up
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link
                to="/services"
                className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
              >
                Services
              </Link>
              <Link
                to="/"
                className="border-2 border-b-black border-t-black px-3 py-1 rounded-full hover:bg-white/10"
                onClick={()=>{
                  setIsLoggedIn(false)
                }}
              >
                Logout
              </Link>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl backdrop-blur-xl bg-white/10 px-4 py-2 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </motion.div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className={`absolute z-50 w-full md:hidden text-white bg-linear-to-br from-[#0c2f2c] via-[#061a1d] to-black border-b shadow-2xl px-4 py-4 space-y-6
          transition-transform duration-300 ease-out
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          <nav className="flex flex-col gap-3">
            <Link
              to="/#home"
              onClick={clickHandler}
              className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={clickHandler}
              className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
            >
              About
            </Link>

            <Link
              to="/#projects"
              onClick={clickHandler}
              className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
            >
              Projects
            </Link>
            <Link
              to="/#contact"
              onClick={clickHandler}
              className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
            >
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-3 pt-3">
            {!isLoggedIn && (
              <>
                <Link
                  to="/login"
                  onClick={clickHandler}
                  className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={clickHandler}
                  className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
            {isLoggedIn && (
              <>
                <Link
                  to="/#services"
                  onClick={clickHandler}
                  className="border-2 border-b-emerald-400 border-t-emerald-400 px-3 py-2 rounded-lg"
                >
                  Services
                </Link>
                <Link
                  to="/"
                  onClick={()=>{
                  setIsLoggedIn(false)
                  setMenuOpen(false);
                }}
                  className="border-2 border-b-emerald-400 border-t-emerald-400  px-3 py-2 rounded-lg"
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
