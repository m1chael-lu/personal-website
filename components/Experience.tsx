import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../components/Card";
import projects from "../public/projects.json"
import { Project } from "../public/types";

interface Props {
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
}

declare global {
  interface Window {
    scrollTimeout: any;
  }
}

const Experience = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: 0.2,
        },
      }).then(() => {
        animation.start({
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

  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = cardsContainerRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;

      e.preventDefault();

      if (div) {
        div.scrollLeft += e.deltaY;
      }
    };

    div?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      div?.removeEventListener("wheel", handleWheel);
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
            ref={cardsContainerRef}
            id="cardsContainer"
            className={`flex flex-row overflow-x-scroll space-x-4 mx-auto p-6 flex-shrink-0`}
          >
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 mx-auto">
                <Card project={project} setProject={props.setProject}/>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
