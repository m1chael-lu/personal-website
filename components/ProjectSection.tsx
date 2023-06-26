import React, { useEffect, useRef } from 'react';
import { Project } from '../public/types';
import { useInView } from "react-intersection-observer";
import expandedProjects from "../public/expanded-projects.json"
import SkillsContainer from './Skill/SkillsContainer';
import { Cursor, useTypewriter } from "react-simple-typewriter"

interface Props {
  project?: Project,
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>
}

const ProjectSection = (props: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (!inView) {
      props.setProject(undefined);
    }
  }, [inView])

  let currProjectID = -1;
  if (props.project) {
    currProjectID = props.project.id;
  }

  const expandedProject = expandedProjects.find((project) => project.id === currProjectID);
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  // w-[866px] h-[525px]

  return (
    (props.project && expandedProject) ?
      <section id="project-section" ref={ref}>
        <div className="bg-main-color h-24">
        </div>
        <div
          className="text-center bg-cool-blue-color text-main-color flex flex-col text-4xl p-4 pt-4"
          style={{ }}
        >
          <div className="mt-4 font-bold">
            {props.project.name}
          </div>
          <div className="bg-main-color w-56 h-2 mx-auto rounded-md mb-4 mt-4"></div>
          {/* The start of the project details */}
          <div className="flex flex-col lg:flex-row justify-between h-full">
            {/* image */}
            <div>
              <div className="font-bold text-2xl mt-5">
                {'Preview'}
              </div>
              <div>
                {expandedProject && expandedProject.image &&
                  <div
                    className={`flex-item bg-center bg-no-repeat bg-cover rounded-2xl aspect-video lg:min-w-[px] lg:max-w-[866px] lg:min-h-[382px] lg:max-h-[525px] align-middle mt-4 shadow hover:scale-105 transition-all transform ease-out duration-200 lg:ml-8 lg:mr-0 ml-3 mr-3`}
                    style={{
                      backgroundImage: `url(${expandedProject.image})`,
                    }}>
                  </div>

                }
              </div>
            </div>
            <div className="flex flex-col">
              {/* Description */}
              <div className="lg:ml-12">
                <div className="text-2xl mt-5 font-bold"> {'Description'} </div>
                <div className="w-fit h-[382px] bg-main-color rounded-2xl mt-4 lg:ml-0 lg:mr-6 ml-3 mr-3 overflow-auto">
                  <div className="text-lg text-gray-700 m-3 p-4 font-mono text-left overflow-hidden">
                    {expandedProject.description}
                  </div>
                </div>

              </div>
              {/* Skills + Links */}
              <div className="mt-5">
                <div className="p-0 items-center text-sm">
                  {expandedProject && (<SkillsContainer skillList={expandedProject.skills} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> : <></>
  )
}

export default ProjectSection