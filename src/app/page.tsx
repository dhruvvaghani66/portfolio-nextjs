// import ExperienceSection from "@/components/HomePages/Experience";
// import { BentoDemo } from "@/components/HomePages/Features";
// import Hero from "@/components/HomePages/Hero";
// import LetsWorkTogether from "@/components/HomePages/LetsWorkTogether";
// import Projects from "@/components/HomePages/Projects";
// import Testimonial from "@/components/HomePages/Testimonial";
// import { Navbar } from "@/components/common/Navbar";

// // import { MarqueeDemo } from "@/components/HomePages/Testimonial";
// // import { BentoGridSecondDemo } from "@/components/HomePages/gridfeatures";

// // import Gridfeatures from "../components/HomePages/gridfeatures";
// // import { Skill } from "@/components/HomePages/Skill";

// export default function Home() {
//   return (
//     <div className="container px-6 mx-auto md:px-10 lg:px-12 xl:px-32 ">
//       <Navbar />
//       <Hero />

//       <div className="text-white mb-14 lg:mb-20 bgwhite">
//         <BentoDemo />
//       </div>
//       <Projects />
//       <ExperienceSection />
//       <Testimonial />
//       <LetsWorkTogether />

//     </div>
//   );
// }

"use client";
// import ExperienceSection from "@/components/HomePages/Experience";
import { BentoDemo } from "@/components/HomePages/Features";
import Hero from "@/components/HomePages/Hero";
import LetsWorkTogether from "@/components/HomePages/LetsWorkTogether";
// import Projects from "@/components/HomePages/Projects";
// import Testimonial from "@/components/HomePages/Testimonial";
import Footer from "@/components/common/Footer";
import { Navbar } from "@/components/common/Navbar";
import dynamic from "next/dynamic"; // ✅ Import dynamic for lazy loading

// ✅ Lazy load non-critical components
const LazyExperienceSection = dynamic(
  () => import("@/components/HomePages/Experience"),
  {
    loading: () => <p>Loading Experience...</p>,
  }
);

const LazyProjects = dynamic(() => import("@/components/HomePages/Projects"), {
  loading: () => <p>Loading Projects...</p>,
});

const LazyTestimonial = dynamic(
  () => import("@/components/HomePages/Testimonial"),
  {
    loading: () => <p>Loading Testimonials...</p>,
  }
);

export default function Home() {
  return (
    <div className="container px-6 mx-auto md:px-10 lg:px-12 xl:px-32">
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Features Section */}
      <div className="text-white mb-14 lg:mb-20 bgwhite" id="features">
        <BentoDemo />
      </div>

      {/* Lazy-loaded Projects Section */}
      <div id="projects">
        <LazyProjects />
      </div>

      {/* Lazy-loaded Experience Section */}
      <div id="experience">
        <LazyExperienceSection />
      </div>

      {/* Lazy-loaded Testimonial Section */}
      <div id="testimonial">
        <LazyTestimonial />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <LetsWorkTogether />
      </div>

      <Footer />
    </div>
  );
}

// "use client";
// import { useState, useEffect } from "react";
// import { FloatingDock } from "@/components/ui/floating-dock";
// import {
//   IconHome,
//   IconSettings,
//   IconCode,
//   IconBriefcase,
//   IconMessageCircle,
//   IconMail,
//   IconMenu2,
//   IconX,
// } from "@tabler/icons-react";

// export function Navbar() {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTabletOrAbove, setIsTabletOrAbove] = useState(false);

//   useEffect(() => {
//     const checkViewport = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       setIsTabletOrAbove(width >= 768);
//     };

//     checkViewport();
//     window.addEventListener("resize", checkViewport);
//     return () => window.removeEventListener("resize", checkViewport);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (isExpanded && !(event.target as HTMLElement).closest(".menu-container")) {
//         setIsExpanded(false);
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, [isExpanded]);

//   const links = [
//     { title: "Home", icon: <IconHome className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#home" },
//     { title: "Features", icon: <IconSettings className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#features" },
//     { title: "Projects", icon: <IconCode className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#projects" },
//     { title: "Experience", icon: <IconBriefcase className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#experience" },
//     { title: "Testimonial", icon: <IconMessageCircle className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#testimonial" },
//     { title: "Contact", icon: <IconMail className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />, href: "/#contact" },
//   ];

//   return (
//     <div
//       className={`fixed bottom-6 flex justify-center items-end z-[101] px-4 sm:px-0 ${
//         isMobile ? "right-6" : "left-1/2 -translate-x-1/2"
//       }`}
//     >
//       {isMobile ? (
//         <div className="relative flex flex-col items-center menu-container">
//           {/* Hamburger & Close Icon (Fixed at Bottom Right in Mobile) */}
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-primary hover:bg-primary/90"
//           >
//             {isExpanded ? (
//               <IconX className="text-white w-7 h-7" />
//             ) : (
//               <IconMenu2 className="text-white w-7 h-7" />
//             )}
//           </button>

//           {/* Icons and Text (All in One Vertical Line, No Background) */}
//           {isExpanded && (
//             <div className="flex flex-col items-center gap-1 py-2">
//               {links.map((item) => (
//                 <a
//                   key={item.title}
//                   href={item.href}
//                   className="flex flex-col items-center text-neutral-700 dark:text-neutral-200"
//                 >
//                   <div className="w-6 h-6">{item.icon}</div>
//                   <span className="text-xs font-medium">{item.title}</span>
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         // Tablet, Laptop, and Desktop View (Centered Bottom Navigation)
//         <FloatingDock items={links} className="max-w-[550px] shadow-lg" />
//       )}
//     </div>
//   );
// }
