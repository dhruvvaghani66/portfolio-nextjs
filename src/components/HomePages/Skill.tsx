// "use client";
// import { animate, motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import { cn } from "@/lib/utils";
// import { GoCopilot } from "react-icons/go";

// export function Skill() {
//   return (
//     <div>
//       <CardSkeletonContainer>
//         <Skeleton />
//       </CardSkeletonContainer>
//       {/* <CardTitle>Damn good card</CardTitle>
//       <CardDescription>
//         A card that showcases a set of tools that you use to create your
//         product.
//       </CardDescription> */}
//     </div>
//   );
// }

// const Skeleton = () => {
//   const scale = [1, 1.1, 1];
//   const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
//   const sequence = [
//     [
//       ".circle-1",
//       {
//         scale,
//         transform,
//       },
//       { duration: 0.8 },
//     ],
//     [
//       ".circle-2",
//       {
//         scale,
//         transform,
//       },
//       { duration: 0.8 },
//     ],
//     [
//       ".circle-3",
//       {
//         scale,
//         transform,
//       },
//       { duration: 0.8 },
//     ],
//     [
//       ".circle-4",
//       {
//         scale,
//         transform,
//       },
//       { duration: 0.8 },
//     ],
//     [
//       ".circle-5",
//       {
//         scale,
//         transform,
//       },
//       { duration: 0.8 },
//     ],
//   ];

//   useEffect(() => {
//     animate(sequence, {
//       // @ts-ignore
//       repeat: Infinity,
//       repeatDelay: 1,
//     });
//   }, []);

//   return (
//     <div className="relative flex items-center justify-center h-full p-8 overflow-hidden">
//       <div className="flex flex-row items-center justify-center flex-shrink-0 gap-2">
//         <Container className="w-8 h-8 circle-1">
//           <ClaudeLogo className="w-4 h-4 " />
//         </Container>
//         <Container className="w-12 h-12 circle-2">
//           <GoCopilot className="w-6 h-6 dark:text-white" />
//         </Container>
//         <Container className="circle-3">
//           <OpenAILogo className="w-8 h-8 dark:text-white" />
//         </Container>
//         <Container className="w-12 h-12 circle-4">
//           <MetaIconOutline className="w-6 h-6 " />
//         </Container>
//         <Container className="w-8 h-8 circle-5">
//           <GeminiLogo className="w-4 h-4 " />
//         </Container>
//       </div>

//       <div className="absolute z-40 w-[1px] h-40 m-auto top-18 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
//         <div className="absolute w-10 h-32 -translate-y-1/2 top-1/2 -left-10">
//           <Sparkles />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Sparkles = () => {
//   const randomMove = () => Math.random() * 2 - 1;
//   const randomOpacity = () => Math.random();
//   const random = () => Math.random();
//   return (
//     <div className="absolute inset-0 text-white">
//       {[...Array(12)].map((_, i) => (
//         <motion.span
//           key={`star-${i}`}
//           animate={{
//             top: `calc(${random() * 100}% + ${randomMove()}px)`,
//             left: `calc(${random() * 100}% + ${randomMove()}px)`,
//             opacity: randomOpacity(),
//             scale: [1, 1.2, 0],
//           }}
//           transition={{
//             duration: random() * 2 + 4,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             position: "absolute",
//             top: `${random() * 100}%`,
//             left: `${random() * 100}%`,
//             width: `2px`,
//             height: `2px`,
//             borderRadius: "50%",
//             zIndex: 1,
//           }}
//           className="inline-block bg-white dark:bg-white"
//         ></motion.span>
//       ))}
//     </div>
//   );
// };

// export const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] darkbg-[rgba(40,40,40,0.70)] bg-gray100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const CardTitle = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <h3
//       className={cn(
//         "text-lg font-semibold text-gray-800 dark:text-white py-2",
//         className
//       )}
//     >
//       {children}
//     </h3>
//   );
// };

// export const CardDescription = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const CardSkeletonContainer = ({
//   className,
//   children,
//   showGradient = true,
// }: {
//   className?: string;
//   children: React.ReactNode;
//   showGradient?: boolean;
// }) => {
//   return (
//     <div
//       className={cn(
//         "h-[15rem] md:h-[19rem]  rounded-xl z-40",
//         className,
//         showGradient &&
//           "bg-neutral-700 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(45%_48%_at_50%_50%,white_0%,transparent_100%)]"
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// const Container = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
//     shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
//     `,
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const ClaudeLogo = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       shapeRendering="geometricPrecision"
//       textRendering="geometricPrecision"
//       imageRendering="optimizeQuality"
//       fillRule="evenodd"
//       clipRule="evenodd"
//       viewBox="0 0 512 512"
//       className={className}
//     >
//       <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
//       <path
//         fill="#1F1F1E"
//         fillRule="nonzero"
//         d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
//       />
//     </svg>
//   );
// };

// export const OpenAILogo = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       className={className}
//       width="28"
//       viewBox="0 0 28 28"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"
//         fill="currentColor"
//       ></path>
//     </svg>
//   );
// };
// export const GeminiLogo = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 16 16"
//       className={className}
//     >
//       <path
//         d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
//         fill="url(#prefix__paint0_radial_980_20147)"
//       />
//       <defs>
//         <radialGradient
//           id="prefix__paint0_radial_980_20147"
//           cx="0"
//           cy="0"
//           r="1"
//           gradientUnits="userSpaceOnUse"
//           gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
//         >
//           <stop offset=".067" stop-color="#9168C0" />
//           <stop offset=".343" stop-color="#5684D1" />
//           <stop offset=".672" stop-color="#1BA1E3" />
//         </radialGradient>
//       </defs>
//     </svg>
//   );
// };

// export const MetaIconOutline = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       id="Layer_1"
//       data-name="Layer 1"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 287.56 191"
//       className={className}
//     >
//       <defs>
//         <linearGradient
//           id="linear-gradient"
//           x1="62.34"
//           y1="101.45"
//           x2="260.34"
//           y2="91.45"
//           gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" stop-color="#0064e1" />
//           <stop offset="0.4" stop-color="#0064e1" />
//           <stop offset="0.83" stop-color="#0073ee" />
//           <stop offset="1" stop-color="#0082fb" />
//         </linearGradient>
//         <linearGradient
//           id="linear-gradient-2"
//           x1="41.42"
//           y1="53"
//           x2="41.42"
//           y2="126"
//           gradientTransform="matrix(1, 0, 0, -1, 0, 192)"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop offset="0" stop-color="#0082fb" />
//           <stop offset="1" stop-color="#0064e0" />
//         </linearGradient>
//       </defs>
//       <path
//         fill="#0081fb"
//         d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z"
//       />
//       <path
//         fill="url(#linear-gradient)"
//         d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z"
//       />
//       <path
//         fill="url(#linear-gradient-2)"
//         d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z"
//       />
//     </svg>
//   );
// };

"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

export function Skill() {
  return (
    <div>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      {/* <CardTitle>Damn good card</CardTitle>
      <CardDescription>
        A card that showcases a set of tools that you use to create your
        product.
      </CardDescription> */}
    </div>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // @ts-ignore
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);

  return (
    <div className="relative flex items-center justify-center h-full p-8 overflow-hidden">
      <div className="flex flex-row items-center justify-center flex-shrink-0 gap-2">
        <Container className="w-8 h-8 circle-1">
          <ClaudeLogo className="w-4 h-4 " />
        </Container>
        <Container className="w-12 h-12 circle-2">
          <GoCopilotIcon className="w-6 h-6 dark:textwhite" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="w-8 h-8 dark:text-white" />
        </Container>
        <Container className="w-12 h-12 circle-4">
          <MetaIconOutline className="w-6 h-6 " />
        </Container>
        <Container className="w-8 h-8 circle-5">
          <GeminiLogo className="w-4 h-4 " />
        </Container>
      </div>

      <div className="absolute z-40 w-[1px] h-40 m-auto top-18 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="absolute w-10 h-32 -translate-y-1/2 top-1/2 -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0 text-white">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] darkbg-[rgba(40,40,40,0.70)] bg-gray100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[19rem]  rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-700 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(45%_48%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};


// react js logo
export const ClaudeLogo = ({}: { className?: string }) => {
  return (
    <svg viewBox="0 0 50 50" className="size-6">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.5547 3.9844C33.775 3.95818 32.9589 4.09412 32.1406 4.3594C30.5041 4.88996 28.7892 5.92391 27.0293 7.35549C26.3396 7.91653 25.6436 8.55785 24.9453 9.2383C24.2624 8.57513 23.5807 7.95102 22.9062 7.40237C21.1478 5.97193 19.4375 4.93759 17.8047 4.40823C16.1719 3.87886 14.5472 3.86246 13.2129 4.63284C11.8786 5.40321 11.0806 6.81738 10.7227 8.49612C10.3647 10.1749 10.4041 12.174 10.7637 14.4121C10.8886 15.1895 11.0667 16.0051 11.2695 16.836C10.5071 17.067 9.76668 17.31 9.08008 17.5781C7.00798 18.3875 5.29345 19.3557 4.04492 20.5078C2.7964 21.66 1.99023 23.0583 1.99023 24.5938C1.99023 26.1292 2.7964 27.5256 4.04492 28.6778C5.29345 29.8299 7.00798 30.8001 9.08008 31.6094C9.81425 31.8961 10.6091 32.1543 11.4297 32.3985C11.1345 33.5013 10.8954 34.5715 10.7324 35.586C10.3726 37.8259 10.3346 39.8253 10.6934 41.5078C11.0521 43.1904 11.8505 44.6126 13.1914 45.3867C14.5323 46.1609 16.1643 46.1419 17.8008 45.6114C19.4373 45.0808 21.1502 44.0488 22.9102 42.6172C23.5935 42.0613 24.2848 41.4272 24.9766 40.7539C25.672 41.4313 26.366 42.0684 27.0527 42.627C28.8112 44.0574 30.5234 45.0898 32.1562 45.6192C33.7891 46.1485 35.4137 46.1649 36.748 45.3946C38.0824 44.6242 38.8784 43.21 39.2363 41.5313C39.5943 39.8525 39.5549 37.8553 39.1953 35.6172C39.0319 34.6 38.7926 33.5262 38.4961 32.4199C39.3438 32.1699 40.1637 31.9047 40.9199 31.6094C42.992 30.8001 44.7066 29.8299 45.9551 28.6778C47.2036 27.5256 48.0098 26.1292 48.0098 24.5938C48.0098 23.0583 47.2036 21.66 45.9551 20.5078C44.7066 19.3557 42.992 18.3875 40.9199 17.5781C40.2235 17.3061 39.4717 17.06 38.6973 16.8262C38.9018 15.9902 39.0833 15.1688 39.209 14.3867C39.5688 12.1468 39.6068 10.1455 39.248 8.46291C38.8893 6.78037 38.089 5.36015 36.748 4.58596C36.0776 4.19887 35.3344 4.01061 34.5547 3.9844ZM34.4629 6.01955C34.9522 6.03293 35.3695 6.14936 35.7266 6.35549C36.4406 6.76775 36.9684 7.57012 37.25 8.89065C37.5316 10.2112 37.5218 11.9954 37.1895 14.0645C37.0756 14.7729 36.9104 15.5237 36.7227 16.293C34.6772 15.8007 32.4357 15.4354 30.0469 15.2207C28.8476 13.5594 27.6154 12.0458 26.373 10.7031C27.0302 10.0617 27.6831 9.46175 28.3203 8.94338C29.946 7.62096 31.4851 6.72112 32.7695 6.30471C33.4117 6.09651 33.9736 6.00618 34.4629 6.01955ZM15.4863 6.02541C15.9784 6.01168 16.5415 6.10176 17.1855 6.31057C18.4737 6.72818 20.0155 7.62762 21.6426 8.95119C22.267 9.45916 22.9053 10.0477 23.5488 10.6739C22.2973 12.0275 21.0549 13.5542 19.8477 15.2305C17.4689 15.4491 15.2366 15.8164 13.2012 16.3106C13.0148 15.5456 12.8496 14.7986 12.7363 14.0938C12.4036 12.0229 12.3953 10.2384 12.6777 8.91409C12.9601 7.58974 13.4922 6.78133 14.2129 6.36526C14.5732 6.15722 14.9942 6.03915 15.4863 6.02541ZM24.9766 12.1426C25.7912 13.0291 26.606 13.9992 27.4141 15.043C26.62 15.0099 25.8163 14.9903 25 14.9903C24.1675 14.9903 23.3484 15.0105 22.5391 15.0449C23.3474 14.0003 24.1618 13.0298 24.9766 12.1426ZM25 17.0098C26.3599 17.0098 27.6853 17.0657 28.9746 17.1602C29.8617 18.4343 30.7286 19.7861 31.5547 21.2168C32.2805 22.474 32.9373 23.7292 33.5352 24.9688C32.931 26.2248 32.2632 27.497 31.5273 28.7715C30.8796 29.8934 30.2032 30.959 29.5156 31.9864C28.0593 32.1081 26.5503 32.1758 25 32.1758C23.4124 32.1758 21.8695 32.1041 20.3809 31.9766C19.7047 30.964 19.0397 29.9146 18.4023 28.8106C17.6682 27.539 17.0036 26.2691 16.4004 25.0156C17.0061 23.7551 17.6737 22.4782 18.4121 21.1992C19.2338 19.776 20.0982 18.4321 20.9805 17.1641C22.2836 17.0674 23.6245 17.0098 25 17.0098ZM31.5488 17.4102C33.1973 17.6159 34.7451 17.9014 36.1855 18.2442C35.7581 19.6453 35.2317 21.1088 34.5938 22.6192C34.1796 21.8207 33.7506 21.0196 33.2871 20.2168C32.7254 19.2439 32.1404 18.3164 31.5488 17.4102ZM18.3438 17.4258C17.7647 18.3151 17.1948 19.2246 16.6445 20.1778C16.1751 20.9908 15.7372 21.8028 15.3184 22.6114C14.686 21.1101 14.1627 19.6549 13.7383 18.2617C15.168 17.9184 16.7068 17.6338 18.3438 17.4258ZM38.1641 18.7754C38.8729 18.9899 39.5576 19.2137 40.1855 19.459C42.0957 20.2051 43.6067 21.0885 44.5859 21.9922C45.5652 22.8959 45.9902 23.7577 45.9902 24.5938C45.9902 25.4298 45.5652 26.2916 44.5859 27.1953C43.6067 28.099 42.0957 28.9825 40.1855 29.7285C39.4877 30.0011 38.721 30.2483 37.9238 30.4824C37.3552 28.7237 36.6294 26.8888 35.7656 25.0156C36.7588 22.8651 37.5611 20.7683 38.1641 18.7754ZM11.8027 18.7852C12.3988 20.7582 13.1908 22.8341 14.1699 24.9629C13.3005 26.847 12.5711 28.6923 12 30.461C11.231 30.2329 10.4902 29.9925 9.81445 29.7285C7.9043 28.9825 6.39335 28.099 5.41406 27.1953C4.43477 26.2916 4.00977 25.4298 4.00977 24.5938C4.00977 23.7577 4.43477 22.8959 5.41406 21.9922C6.39335 21.0885 7.9043 20.2051 9.81445 19.459C10.4328 19.2175 11.1059 18.9969 11.8027 18.7852ZM25 20C22.2504 20 20 22.2504 20 25C20 27.7496 22.2504 30 25 30C27.7496 30 30 27.7496 30 25C30 22.2504 27.7496 20 25 20ZM15.3418 27.3653C15.7625 28.1779 16.2 28.9933 16.6719 29.8106C17.041 30.45 17.4181 31.0724 17.8008 31.6836C16.4578 31.4974 15.1812 31.2616 13.9824 30.9824C14.3637 29.8148 14.8197 28.6028 15.3418 27.3653ZM34.6191 27.3653C35.1433 28.6057 35.5996 29.8197 35.9824 30.9903C34.7798 31.2691 33.4993 31.5041 32.1523 31.6895C32.5401 31.0708 32.923 30.4406 33.2969 29.793C33.7653 28.9817 34.2011 28.1719 34.6191 27.3653ZM13.4062 32.9239C15.2161 33.3526 17.1777 33.6819 19.2578 33.8965C20.6464 35.9049 22.093 37.7095 23.5488 39.2871C22.8978 39.9219 22.2526 40.5176 21.6211 41.0313C19.9954 42.3537 18.4543 43.2516 17.1699 43.668C15.8855 44.0844 14.9269 44.0295 14.2129 43.6172C13.4988 43.2049 12.973 42.4026 12.6914 41.0821C12.4098 39.7615 12.4176 37.9793 12.75 35.9102C12.9008 34.9715 13.1262 33.9664 13.4062 32.9239ZM36.5605 32.9317C36.843 33.9806 37.069 34.9894 37.2207 35.9336C37.5534 38.0045 37.5617 39.789 37.2793 41.1133C36.9969 42.4376 36.4687 43.248 35.748 43.6641C35.0274 44.0802 34.0596 44.1344 32.7715 43.7168C31.4834 43.2992 29.9416 42.3998 28.3145 41.0762C27.6784 40.5588 27.0287 39.9583 26.373 39.3184C27.8387 37.7346 29.2955 35.9208 30.6934 33.9004C32.7787 33.6873 34.7458 33.3599 36.5605 32.9317ZM21.8672 34.1016C22.894 34.1575 23.9342 34.1953 25 34.1953C26.0305 34.1953 27.0371 34.1598 28.0312 34.1074C27.015 35.4786 25.979 36.7252 24.9473 37.8477C23.9161 36.7228 22.8821 35.474 21.8672 34.1016Z"
      ></path>
    </svg>
  );
};

// tailwind css logo
export const GoCopilotIcon = ({}: { className?: string }) => {
  return (
    <svg viewBox="0 0 50 50" className="size-8">
      <g clip-path="url(#clip0_717_63)">
        <path
          fill="currentColor"
          d="M25 10.0042C18.3333 10.0042 14.1667 13.3364 12.5 20.001C15 16.6687 17.9167 15.4198 21.25 16.2521C23.1521 16.7271 24.5115 18.1073 26.0167 19.6344C28.4667 22.1208 31.3031 25 37.5 25C44.1667 25 48.3333 21.6677 50 15.0021C47.5 18.3344 44.5833 19.5844 41.25 18.7521C39.349 18.2771 37.9896 16.8969 36.4844 15.3698C34.0333 12.8823 31.1958 10.0042 25 10.0042ZM12.5 25C5.83333 25 1.66667 28.3323 0 34.9979C2.5 31.6656 5.41667 30.4156 8.75 31.2489C10.651 31.725 12.0104 33.1041 13.5156 34.6302C15.9667 37.1177 18.8042 39.9969 25 39.9969C31.6667 39.9969 35.8333 36.6646 37.5 29.9989C35 33.3312 32.0833 34.5812 28.75 33.7479C26.8479 33.2729 25.4885 31.8927 23.9833 30.3666C21.5333 27.8792 18.6969 25 12.5 25Z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_717_63">
          <rect width="50" height="50" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

// Next js logo
export const OpenAILogo = ({}: { className?: string }) => {
  return (
    <svg viewBox="0 0 50 50" className="size-12">
      <g clip-path="url(#clip0_748_15)">
        <path
          d="M23.3627 0.0134552C23.2551 0.0232289 22.913 0.057437 22.6051 0.0818713C15.5034 0.722051 8.85142 4.55336 4.63832 10.442C2.29228 13.7162 0.791789 17.4303 0.224829 21.3642C0.0244379 22.7374 0 23.143 0 25.0049C0 26.8668 0.0244379 27.2724 0.224829 28.6456C1.58358 38.0333 8.26491 45.9207 17.3265 48.843C18.9492 49.3659 20.6598 49.7227 22.6051 49.9377C23.3627 50.0208 26.6373 50.0208 27.3949 49.9377C30.7527 49.5663 33.5973 48.7355 36.4027 47.3037C36.8328 47.0838 36.9159 47.0251 36.8573 46.9763C36.8182 46.9469 34.9853 44.4888 32.7859 41.5176L28.7879 36.1176L23.7781 28.7043C21.0215 24.6286 18.7537 21.2958 18.7341 21.2958C18.7146 21.2909 18.695 24.5846 18.6852 28.6065C18.6706 35.6485 18.6657 35.9319 18.5777 36.0981C18.4506 36.3375 18.3529 36.4353 18.1476 36.5428C17.9912 36.621 17.8544 36.6356 17.1163 36.6356H16.2708L16.0459 36.4939C15.8993 36.4011 15.7918 36.2789 15.7185 36.1372L15.6158 35.9173L15.6256 26.1191L15.6403 16.316L15.7918 16.1255C15.87 16.0228 16.0362 15.8909 16.1535 15.8274C16.3539 15.7296 16.4321 15.7198 17.2776 15.7198C18.2747 15.7198 18.4409 15.7589 18.6999 16.0424C18.7732 16.1206 21.4858 20.206 24.7312 25.1271C27.9765 30.0481 32.4145 36.7676 34.5943 40.0662L38.5533 46.0624L38.7537 45.9305C40.5279 44.7772 42.4047 43.1352 43.8905 41.4248C47.0528 37.7938 49.0909 33.3663 49.7752 28.6456C49.9756 27.2724 50 26.8668 50 25.0049C50 23.143 49.9756 22.7374 49.7752 21.3642C48.4164 11.9765 41.7351 4.0891 32.6735 1.16676C31.0753 0.648748 29.3744 0.292007 27.4682 0.0769845C26.999 0.0281158 23.7683 -0.0256398 23.3627 0.0134552ZM33.5973 15.1334C33.8319 15.2507 34.0225 15.4755 34.0909 15.7101C34.13 15.8371 34.1398 18.5542 34.13 24.6775L34.1153 33.4641L32.566 31.089L31.0117 28.714V22.3269C31.0117 18.1975 31.0313 15.8762 31.0606 15.7638C31.1388 15.4902 31.3099 15.2751 31.5445 15.1481C31.7449 15.0455 31.8182 15.0357 32.5855 15.0357C33.3089 15.0357 33.436 15.0455 33.5973 15.1334Z"
          fill="currentColor"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_748_15">
          <rect width="50" height="50" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

// github logo
export const MetaIconOutline = ({}: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="2.3em"
      height="2.3em"
      // {...props}÷÷
    >
      <g fill="white">
        <path
          fillRule="evenodd"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
          clipRule="evenodd"
        ></path>
        <path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"></path>
      </g>
    </svg>
  );
};

// js logo
export const GeminiLogo = ({}: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 128 128"
    >
      <path
        fill="white"
        d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
      />
    </svg>
  );
};
