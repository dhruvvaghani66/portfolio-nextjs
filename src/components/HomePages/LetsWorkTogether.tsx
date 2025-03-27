"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { TextHoverEffect } from "../ui/text-hover-effect";
import ContactForm from "./ContactForm";

export default function LetsWorkTogether() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Check for system preference and update on change
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(darkModeQuery.matches);
    document.documentElement.classList.toggle("dark", darkModeQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
      document.documentElement.classList.toggle("dark", e.matches);
    };

    darkModeQuery.addEventListener("change", handleChange);
    return () => darkModeQuery.removeEventListener("change", handleChange);
  }, []);

  // Toggle dark mode manually
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className={cn(
        "w-full py-16 md:py-24 lgpy-24 overflow-hidden relative",
        isDarkMode ? "dark bg-zinc950 text-white" : "bgzinc-50 text-zinc-950"
      )}
    >
      {/* Background elements with animation */}
      <div className="absolute overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 2, delay: 0.2 }}
          className="absolute w-1/2 rounded-full -left-1/4 top-1/4 h-1/2 bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 0.6, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute w-1/2 rounded-full -right-1/4 bottom-1/4 h-1/2 bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
        />
      </div>

      {/* Animated particles */}
      <div className="absolute overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              isDarkMode ? "bg-white/20" : "bg-black/10"
            }`}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0.2 + Math.random() * 0.5,
            }}
            animate={{
              y: [null, Math.random() * 100 + "%"],
              opacity: [null, 0.1 + Math.random() * 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-1">
          {/* GET IN TOUCH label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-primary px-4 py-2 rounded-full border borderprimary/20 bgprimary/5">
              GET IN TOUCH
            </span>
          </motion.div>

          {/* LET'S WORK - massive text */}
          <div className="w-full overflow-hidden">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: y1 }}
              className={cn(
                "text-[3.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-tight leading-[0.8] text-center w-full mt-6 bg-gradient-to-r from-white to-[#666666] bg-clip-text text-transparent"
              )}
            >
              LET&apos;S WORK
            </motion.h2>
          </div>

          {/* TOGETHER - massive text with ONLY border */}
          <div className="flex items-center justify-center w-full overflow-hidden leading-none ">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ y: y2 }}
              className="relative flex flex-col items-center w-full lg:mt-6"
            >
              {/* Ensure the text is fully centered and removes top-bottom spacing */}
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={
                  isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                }
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ y: y1 }}
                className={cn(
                  "text-[3.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-tight leading-[0.8] text-center w-full mt-2 bg-gradient-to-r from-white to-[#666666] bg-clip-text text-transparent"
                )}
              >
                TOGETHER
              </motion.h2>
              {/* <h2
                className={cn(
                  "text-[14vw] md:text-[6.5rem] lg:text-[9rem] xl:text-[10rem] 2xl:text-[12rem] font-bold tracking-tight",
                  "text-transparent leading-none", // Remove line height spacing
                  isDarkMode ? "stroke-white" : "stroke-black"
                )}
                style={{
                  WebkitTextStroke: isDarkMode ? "0.8px white" : "0.8px black",
                  margin: 0, // Remove margins
                  padding: 0, // Remove paddings
                }}
              >
                TOGETHER
              </h2> */}

              {/* Border line below text */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "absolute left-0 right-0 h-[0.3vw] bottom-[-5px]", // Adjust bottom to move it closer
                  "bg-gradient-to-r",
                  isDarkMode
                    ? "from-transparent via-primary/70 to-transparent"
                    : "from-transparent via-primary/80 to-transparent"
                )}
              />
            </motion.div>
          </div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col gap-4 mt-8 sm:flex-row"
          >
            <Button
              size="lg"
              className="relative px-5 mt-6 overflow-hidden text-black transition-all duration-300 ease-out bg-white border border-black rounded-full hover:border-white py-7 group hover:bg-transparent hover:text-white"
            >
              <span className="relative z-10 flex items-center gap-3 text-xl textblack px2 py-7">
                Book free call
                <ArrowRight className="w-12 h-12 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </motion.div> */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
