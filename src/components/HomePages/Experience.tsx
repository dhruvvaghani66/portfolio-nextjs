// "use client";
// import { motion } from "framer-motion";
// import { FaBriefcase } from "react-icons/fa";
// import { HiLocationMarker } from "react-icons/hi";
// import { MdOutlineStar } from "react-icons/md";

// const ExperienceTimeline = () => {
//   const experiences = [
//     {
//       title: "Senior Software Engineer",
//       company: "Tech Innovations Inc.",
//       location: "San Francisco, CA",
//       duration: "2021 - Present",
//       description: "Led cloud-native app development, improving performance by 40%.",
//       skills: ["React", "Node.js", "AWS", "Docker"],
//       achievements: "Reduced deployment time by 60%",
//     },
//     {
//       title: "Software Engineer",
//       company: "Digital Solutions Corp",
//       location: "New York, NY",
//       duration: "2019 - 2021",
//       description: "Developed scalable microservices and real-time processing solutions.",
//       skills: ["Python", "Kubernetes", "MongoDB", "Redis"],
//       achievements: "Handled 1M+ daily active users",
//     },
//   ];

//   return (
//     <div className="min-hscreen bg-[#0a0a0a] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-16 text-4xl font-bold tracking-wide text-white"
//         >
//           Work Experience
//         </motion.h2>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative max-w-6xl mx-auto">
//         {/* Vertical Line */}
//         <div className="absolute w-0 h-full transform rounded-full md:w-1 bg-gradient-to-b from-blue-500 to-purple-500 left-4 md:left-1/2 md:-translate-x-1/2"></div>

//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             className={`relative flex flex-col md:flex-row items-center w-full mb-1 ${
//               index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//             }`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.3 }}
//           >
//             {/* Circle Indicator */}
//             <div className="absolute w-4 h-4 border-4 border-gray-900 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 left-3 md:w-6 md:h-6 md:left-1/2 md:-translate-x-1/2"></div>

//             {/* Experience Card */}
//             <motion.div
//               whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 132, 255, 0.3)" }}
//               className="w-full md:w-[45%] p-6 bg-white/10 border border-white/10 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out"
//             >
//               {/* Header */}
//               <div className="flex items-center gap-3 mb-4">
//                 <FaBriefcase className="text-xl text-blue-400" />
//                 <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
//               </div>

//               {/* Company & Location */}
//               <div className="flex items-center gap-3 mb-3 text-gray-300">
//                 <span className="font-medium">{exp.company}</span>
//                 <span className="text-gray-500">•</span>
//                 <div className="flex items-center gap-2">
//                   <HiLocationMarker className="text-red-400" />
//                   <span>{exp.location}</span>
//                 </div>
//               </div>

//               {/* Duration */}
//               <p className="mb-3 text-sm text-gray-400">{exp.duration}</p>

//               {/* Description */}
//               <p className="mb-4 text-base leading-relaxed text-gray-300">{exp.description}</p>

//               {/* Skills */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {exp.skills.map((skill, skillIndex) => (
//                   <motion.span
//                     key={skillIndex}
//                     className="px-3 py-1 text-sm font-medium text-gray-200 border rounded-full bg-white/10 border-white/20"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>

//               {/* Achievements */}
//               <div className="flex items-center gap-2 text-lg font-medium text-green-400">
//                 <MdOutlineStar className="text-2xl" />
//                 {exp.achievements}
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExperienceTimeline;











import React from "react";
const experiences = [
  {
    year: "2024 - Present",
    position: "Full Stack Developer",
    company: "Wiznext Software Solutions",
    description:
      "Developing and maintaining scalable web applications using the MERN stack. Building dynamic and SEO-friendly web applications with Next.js, optimizing UI with Tailwind CSS, and handling backend APIs for seamless data flow.",
    skills: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
  },
  {
    year: "2023 - 2024",
    position: "Web Developer Intern",
    company: "Durvasa Infotech",
    description:
      "Collaborated with senior developers to design and implement interactive web interfaces. Optimized website performance, integrated REST APIs, worked on responsive design, and ensured cross-browser compatibility for a seamless user experience.",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "API Integration"],
  },
];


const ExperienceTimeline = () => {
  return (
    <div className="mb-12 text-white pt-14 lg:pt-24 lg:mb-24">
      {/* Title */}
      <h2 className="mb-8 text-4xl font-bold text-center text-white lg:mb-12 lg:text-5xl bg-clip-text bg-gradient-to-r from-primary to-primary/70">
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-wrap items-start mb-12 lg:justify-center">
          {/* Date Section */}
          <div className="w-full lg:w-1/4">
            <p className="mb-2 text-lg font-semibold tracking-wide text-stone-300">
              {exp.year}
            </p>
          </div>

          {/* Experience Details */}
          <div className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 text-2xl font-bold">
              <span className="text-white">{exp.position}</span> -{" "}
              <span className="text-lg text-stone-400">{exp.company}</span>
            </h3>

            {/* Description */}
            <p className="mb-4 text-stone-300 text-[15px] leading-relaxed">
              {exp.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm font-medium tracking-wider uppercase transition-transform transform rounded-lg shadow-md bg-stone-900 hover:scale-105 hover:bg-stone-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
