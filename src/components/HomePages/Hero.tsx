"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  const titles = ["Software Engineer.", "Full Stack Developer."];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isDeleting) {
      if (displayedText.length > 0) {
        setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (displayedText.length < currentTitle.length) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + currentTitle[displayedText.length]);
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [displayedText, isDeleting, currentTitleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger effect for smooth loading
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section className="container flex items-center justify-start min-h-[90vh] py-40 md:py-64 mx-auto text-white">
      <motion.div
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-2xl"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="relative flex items-center gap-3 px-3 py-2 mb-6 border border-gray-500 rounded-full w-max"
        >
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-gray-200">
            Available for projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl"
        >
          Hi, I’m <span className="text-green-400">Dhruv</span>. <br />A{" "}
          <span className="text-blue-400">{displayedText}</span>
          <span className="text-blue-400">{cursorVisible ? "|" : " "}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-10 text-lg leading-relaxed text-gray-300"
        >
          Mainly working in the JavaScript ecosystem, I’m a dedicated
          problem-solver who thrives on learning and building.
        </motion.p>

        {/* Social Icons */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-8">
          {[
            { icon: <FaGithub size={26} />, link: "#" },
            {
              icon: <FaLinkedinIn size={26} />,
              link: "https://www.linkedin.com/in/dhruv-vaghani-745222219/",
            },
            { icon: <FaXTwitter size={26} />, link: "#" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={socialIconVariants}
              whileHover="hover"
              className="flex items-center justify-center text-white transition-all duration-300 ease-in-out border rounded-full w-14 h-14 border-white/30 hover:border-white hover:bg-white hover:text-black"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
