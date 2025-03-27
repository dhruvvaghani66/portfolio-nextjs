// "use client";

// import Marquee from "react-fast-marquee";
// import { motion } from "framer-motion";
// import { AiFillStar } from "react-icons/ai";

// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       name: "Alex Johnson",
//       role: "Web Developer",
//       avatar: "https://i.pravatar.cc/100?img=15",
//       feedback:
//         "An absolute pleasure to collaborate with! The designs and UI/UX choi a    ces were outstanding. Highly recommended for any digital project!",
//       rating: 5,
//     },
//     {
//       name: "Jessica Brown",
//       role: "Graphic Designer",
//       avatar: "https://i.pravatar.cc/100?img=18",
//       feedback:
//         "A true professional in web development. The responsiveness and creativity in design were beyond expectations!",
//       rating: 5,
//     },
//     {
//       name: "Michael Smith",
//       role: "Entrepreneur",
//       avatar: "https://i.pravatar.cc/100?img=20",
//       feedback:
//         "Delivered a high-quality, visually appealing portfolio. The animations and smooth UI make everything look premium!",
//       rating: 5,
//     },
//     {
//       name: "Sophia Wilson",
//       role: "UI/UX Designer",
//       avatar: "https://i.pravatar.cc/100?img=21",
//       feedback:
//         "Exceptional work on the portfolio! The seamless animations and dark theme aesthetics really elevate the experience.",
//       rating: 5,
//     },
//     {
//       name: "David Clark",
//       role: "Software Engineer",
//       avatar: "https://i.pravatar.cc/100?img=22",
//       feedback:
//         "Clean, modern, and highly responsive design. Truly a game-changer for anyone seeking a standout web presence!",
//       rating: 5,
//     },
//   ];

//   return (
//     <section className="py-24 my-16 text-white bg-black">
//       <div className="max-w-6xl px-6 mx-auto sm:px-8 lg:px-12">
//         <div className="text-center">
//           <h2 className="mb-4 text-4xl font-bold text-white">Client Testimonials</h2>
//           <p className="mb-8 text-lg text-gray-400">
//             Hear what my clients have to say about my work and expertise.
//           </p>
//         </div>

//         {/* Marquee Effect for Auto-Scrolling */}
//         <Marquee gradient={false} speed={50} pauseOnHover={true}>
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               className="p-8 mx-4 w-[350px] bg-gray-900 border border-gray-700 shadow-lg rounded-3xl hover:shadow-xl hover:border-gray-500"
//             >
//               <div className="flex items-center gap-5 mb-6">
//                 <img
//                   className="object-cover w-16 h-16 border-4 border-gray-600 rounded-full"
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                 />
//                 <div>
//                   <h5 className="text-lg font-semibold text-white">
//                     {testimonial.name}
//                   </h5>
//                   <span className="text-sm text-gray-400">{testimonial.role}</span>
//                 </div>
//               </div>
//               <p className="mb-5 leading-relaxed text-gray-300">
//                 {testimonial.feedback}
//               </p>
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <AiFillStar
//                     key={i}
//                     className={`w-6 h-6 ${
//                       i < testimonial.rating ? "text-yellow-400" : "text-gray-500"
//                     }`}
//                   />
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
"use client";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { StarIcon } from "lucide-react"; // ✅ Modern, minimal star icon

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Mehta",
      role: "Senior Software Engineer",
      avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F2%2F2.jpg&w=96&q=75",
      feedback:
        "An exceptional MERN stack developer! Delivered a robust, scalable application with seamless integration of frontend and backend. The API design was flawless and optimized for performance!",
      rating: 5,
    },
    {
      name: "Jessica Brown",
      role: "Project Manager",
      avatar: "https://i.pravatar.cc/100?img=20",

      feedback:
        "A highly skilled full-stack developer! Efficiently handled complex backend logic while ensuring a smooth, responsive frontend. The project was delivered on time with outstanding quality!",
      rating: 5,
    },
    {
      name: "Amit Sharma",
      role: "Tech Entrepreneur",
      avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F2%2F3.jpg&w=96&q=75",

      feedback:
        "Built a top-notch MERN stack platform for my startup. The database design, authentication, and API development were handled with precision. A true professional in web development!",
      rating: 5,
    },
    {
      name: "Michael Wilson",
      role: "Software Architect",
      avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F3.jpg&w=128&q=75",
      feedback:
        "A problem solver with deep knowledge of React, Node.js, and MongoDB! Optimized the backend for high performance and ensured a secure authentication system. Highly recommended!",
      rating: 5,
    },
    {
      name: "Vikram Iyer",
      role: "Lead Developer",
      avatar: "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Favatars%2F1%2F1.jpg&w=128&q=75",
      feedback:
        "A brilliant MERN stack developer who understands both frontend and backend deeply. The project structure, performance optimizations, and clean code made a huge difference!",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-8 text-white">
      {/* Subtle glow effect in the background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-gray-900/10 to-transparent opacity-20" />

      <div className="relative z-10 px-4 mx-auto max-w6xl sm:px-8 lg:px-12">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-center text-white lg:text-5xl bg-clip-text bg-gradient-to-r from-primary to-primary/70">
            What Clients Say
          </h2>
          <p className="mb-12 text-lg text-gray-400">
            Hear what my clients have to say about their experience working with
            me.
          </p>
        </div>

        {/* Marquee for Smooth Scrolling */}
        <Marquee
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={50}
          speed={40}
          pauseOnHover={true}
          className="py-4 overflow-hidden"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.95 }}
              whileHover={{
                scale: 0.96,
                transition: { duration: 0.15 },
                boxShadow: "0 0 25px rgba(139, 92, 246, 0.15)",
              }}
              className="p-6 mx-4 w-[340px] bg-[#0a0a0a] border border-gray-700 shadow-md rounded-xl backdrop-blur-sm transition-all duration-200 group hover:bg-[#0c0c0c]"
            >
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <div className="absolute inset-0 transition-opacity duration-200 rounded-full bg-gradient-to-r from-gray-500 to-gray-700 blur-sm opacity-60 group-hover:opacity-80" />
                  <img
                    className="relative z-10 object-cover w-20 h-20 border-2 rounded-full border-gray-500/40"
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                  />
                </motion.div>
                <div>
                  <h5 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-gray-200">
                    {testimonial.name}
                  </h5>
                  <span className="text-sm text-gray-500 transition-colors duration-200 group-hover:text-gray-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
              <p className="mb-5 italic leading-relaxed text-gray-400 transition-colors duration-200 group-hover:text-gray-300">
                "{testimonial.feedback}"
              </p>

              {/* Star Rating Section */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 5,
                      transition: { duration: 0.15 },
                    }}
                  >
                    <StarIcon
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-[#feb22e]"
                          : "text-gray-700"
                      } group-hover:${
                        i < testimonial.rating
                          ? "text-yellow-300 fill-yellow-300"
                          : "text-gray-600"
                      } transition-all duration-200`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TestimonialsSection;
