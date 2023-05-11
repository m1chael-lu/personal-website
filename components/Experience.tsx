declare global {
  interface Window {
    scrollTimeout: any;
  }
}

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../components/Card";

type Project = {
  id: number;
  name: string;
  description: string;
  skills: string[];
  github: string;
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const [showScrollbar, setShowScrollbar] = useState(false);

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        // maxWidth: "100vw", // start with a larger width
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.2,
        },
      }).then(() => {
        animation.start({
          // maxWidth: "75vw", // transition to smaller width
          transition: {
            type: "spring",
            duration: 1
          },
        });
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  const projects: Project[] = [
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    {
      id: 1,
      name: "philly-insights",
      description:
        "Application that allows users to analyze crime and property trends in Philadelphia. Built with signup/login, data visualization, and analysis features.",
      skills: ["React", "MongoDB", "Oracle"],
      github: "https://github.com/m1chael-lu/philly-insights",
    },
    
  ];

  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer?.addEventListener("scroll", handleScroll);

    return () => {
      cardsContainer?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    
    <div ref={ref} className="bg-main-color">
      <h1 className="text-5xl font-bold p-4 text-center mx-auto text-cool-blue-color pt-10">Projects</h1>
      <div
        className="bg-cool-blue-color w-24 h-2 mx-auto
          rounded-md mb-4"
      ></div>
      <div className="p-6 mx-auto">
        <motion.div animate={animation}>
          <div
            id="cardsContainer"
            className={`flex flex-row overflow-x-scroll space-x-4 mx-auto p-6 flex-shrink-0`}
          >
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 mx-auto"> {/* Add mx-auto here */}
                <Card project={project} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;