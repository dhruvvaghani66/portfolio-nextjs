// "use client"
// import React from "react";
// import { motion } from "framer-motion";
// import { FaExternalLinkAlt } from "react-icons/fa";

// const projects = [
//   {
//     title: "Slice of Spice",
//     description: "A seamless online food ordering experience with responsive design.",
//     image: "slice-of-spice.jpg",
//     technologies: ["React", "CSS", "Framer Motion"],
//     link: "#",
//   },
//   {
//     title: "Weather Coach",
//     description: "Live weather updates with animations and a sleek UI.",
//     image: "weather-coach.jpg",
//     technologies: ["React", "Framer Motion", "API Integration"],
//     link: "#",
//   },
//   {
//     title: "Hexashop",
//     description: "A modern shopping experience with add-to-cart and wishlist features.",
//     image: "hexashop.jpg",
//     technologies: ["React", "Bootstrap", "Redux"],
//     link: "#",
//   },
//   {
//     title: "Admin Dashboard",
//     description: "A feature-rich dashboard with API data visualization.",
//     image: "admin-dashboard.jpg",
//     technologies: ["React", "Charts.js", "REST API"],
//     link: "#",
//   },
// ];

// const ProjectCard = ({ title, description, image, technologies, link }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative p-4 overflow-hidden transition-all duration-500 transform shadow-xl rounded-2xl hover:shadow-2xl"
//     >
//       <img
//         src={image}
//         alt={title}
//         className="object-cover w-full h-40 transition rounded-xl hover:opacity-80"
//       />
//       <div className="p-4">
//         <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
//         <p className="mb-4 text-sm text-gray-400">{description}</p>
//         <div className="flex flex-wrap gap-2 mb-4">
//           {technologies.map((tech, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 text-xs text-white bg-gray-700 rounded-full"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <a
//           href={link}
//           className="flex items-center gap-2 text-sm font-medium transition text-cyan-400 hover:text-cyan-300"
//         >
//           View Project <FaExternalLinkAlt />
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   return (
//     <section className="px-6 py-12 text-white bgblack">
//       <h2 className="mb-10 text-4xl font-bold text-center text-cyan-400">My Projects</h2>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  type Variants,
  AnimatePresence,
} from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github?: string;
  category: string;
};

const projects: Project[] = [
  {
    title: "Slice of Spice",
    description:
      "A seamless online food ordering experience with responsive design and intuitive user interface.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["React", "CSS", "Framer Motion"],
    link: "#",
    github: "#",
    category: "Web App",
  },
  {
    title: "Weather Coach",
    description:
      "Live weather updates with animations and a sleek UI that adapts to current weather conditions.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["React", "Framer Motion", "API Integration"],
    link: "#",
    github: "#",
    category: "Web App",
  },
  {
    title: "Hexashop",
    description:
      "A modern shopping experience with add-to-cart and wishlist features for a seamless checkout process.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["React", "Bootstrap", "Redux"],
    link: "#",
    github: "#",
    category: "E-commerce",
  },
  {
    title: "Admin Dashboard",
    description:
      "A feature-rich dashboard with API data visualization and comprehensive analytics tools.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["React", "Charts.js", "REST API"],
    link: "#",
    github: "#",
    category: "Dashboard",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills with a modern design.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["Next.js", "Tailwind CSS", "Three.js"],
    link: "#",
    github: "#",
    category: "Portfolio",
  },
  {
    title: "Task Manager",
    description:
      "A productivity app for managing tasks with drag-and-drop functionality and progress tracking.",
    image:
      "https://imgs.search.brave.com/E2ynvzwcFMmsYoWkLwXE2y6E11K_ten2AtigVf9hEDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzQ5NzM2/MTkvc2NyZWVuc2hv/dHMvMTY5MDQ1ODcv/bWVkaWEvZGI1NTBh/ZmJlYjFiNmM3NjM4/ODlmMGRhNDgzYzE5/M2QucG5nP3Jlc2l6/ZT00MDB4MA",
    technologies: ["React", "Redux", "Firebase"],
    link: "#",
    github: "#",
    category: "Productivity",
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { title, description, image, technologies, link, github, category } =
    project;
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div

      ref={ref}
      custom={index}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-full overflow-hidden border shadow-xl h[30rem] group rounded-xl bg-black/30 backdrop-blursm border-white/10"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      // id="projects"
    >
      {/* 3D tilt effect container */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          rotateX: isHovered ? -5 : 0,
          rotateY: isHovered ? 5 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      />

      {/* Category badge */}
      <motion.div className="absolute z-30 top-4 left-4">
        <span className="px-3 py-1 text-xs font-medium text-white rounded-full shadow-lg bg-black/80 backdrop-blur-md">
          {category}
        </span>
      </motion.div>

      {/* Image with overlay */}
      <motion.div className="relative w-full oveflow-hidden h-60">
        <motion.img
          src={image}
          alt={title}
          className="object-cover w-full h-full opacity-95 "
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        {/* <div className="absolute inset0 opacity-10 bg-gradient-to-t from-black/80 via-black/40 to-black/10" /> */}

        {/* Animated overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between p-6 hauto">
        <div>
          {/* Title with animated underline */}
          <motion.div className="mb-2 overflow-hidden">
            <motion.h3
              className="text-xl font-bold text-white"
              // animate={{
              //   y: isHovered ? 0 : 5,
              //   opacity: isHovered ? 1 : 0.9,
              // }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="h-0.5 bg-primary mt-1"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "40%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Description */}
          <p className="mb-4 text-sm text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium text-white/90 bg-white/10 backdrop-blur-xs rounded-full border border-white/5"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <motion.a
            href={link}
            className="relative flex items-center text-white/70 gap-1.5 text-sm font-medium transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative inline-block  text-[rgb(52_211_153_/var(--tw-text-opacity,1))]">
              View Project
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                animate={
                  isHovered
                    ? {
                        width: "100%",
                        backgroundImage:
                          "repeating-linear-gradient(to right, white, white 1px, transparent 3px, transparent 4px)",
                      }
                    : { width: 0 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </span>
            <motion.div
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ArrowRight className="h-3.5 w-3.5 text-[rgb(52_211_153_/var(--tw-text-opacity,1))]" />
            </motion.div>
          </motion.a>

          {github && (
            <motion.a
              href={github}
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Source</span>
              <Github className="h-3.5 w-3.5" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated borders */}
      <motion.div
        className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.div
        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r fromtransparent via-primary/50 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4, delay: 0.3 }}
      />
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filteredProjects = filter
    ? projects.filter((p) => p.category === filter)
    : projects;

  return (
    <section id="projects" className="relative py-0 px4 overflow-hidde">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 h-80 w-80 bg-primary/5 blur-3xl" />
        <div className="absolute rounded-full top-1/2 -left-20 h-60 w-60 bg-primary/10 blur-3xl" />
        <div className="absolute w-40 h-40 rounded-full bottom-20 right-20 bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            
          >
            <h2 className="text-5xl font-bold mb4 textwhite">
              <span className="text-white bg-clip-text bg-gradient-to-r from-primary to-primary/70">
                Projects
              </span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 mx-auto mb-6 bg-primary"
            />
            <p className="max-w-2xl mx-auto mb-6 text-gray-400">
              A showcase of my recent work, featuring modern web applications.
            </p>
          </motion.div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(null)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                filter === null
                  ? "bg-primary text-white shadow-lg shadowprimary/20"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              )}
            >
              All Projects
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  filter === category
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter || "all"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 md:gap-3 lg:gap-3 xl:gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-lg text-white/70">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
