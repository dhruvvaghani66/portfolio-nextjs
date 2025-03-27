"use client";
import { useState, useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconSettings,
  IconCode,
  IconBriefcase,
  IconMessageCircle,
  IconMail,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

export function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        !(event.target as HTMLElement).closest(".menu-container")
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isExpanded]);

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#home",
    },
    {
      title: "Features",
      icon: (
        <IconSettings className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#features",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#projects",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#experience",
    },
    {
      title: "Testimonial",
      icon: (
        <IconMessageCircle className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#testimonial",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="w-6 h-6 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/#contact",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center pb-6 md:pb-[50px] z-[101] px-4 sm:px-0">
      {/* {isMobile ? ( */}
      <div className="relative flex justify-end hidden w-full px-6 menu-container">
        {/* Hamburger Icon */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative z-20 flex items-center justify-center rounded-full shadow-lg w-14 h-14 bg-primary hover:bg-primary/90"
        >
          {isExpanded ? (
            <IconX className="text-white w-7 h-7" />
          ) : (
            <IconMenu2 className="text-white w-7 h-7" />
          )}
        </button>

        {/* Icons in Column (No Background) */}
        {isExpanded && (
          <div className="absolute flex flex-col items-center gap-3 py-2 bottom-full right-3">
            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex flex-col items-center justify-center text-neutral-700 dark:text-neutral-200"
              >
                <div className="w-6 h-6">{item.icon}</div>
                <span className="text-xs font-medium">{item.title}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        <FloatingDock items={links} className="max-w-[550px] shadow-lg " />
      </div>
    </div>
  );
}
