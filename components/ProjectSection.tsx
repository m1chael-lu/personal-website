import React, { useEffect } from 'react';
import { Project } from '../public/types';
import { useInView } from "react-intersection-observer";
import expandedProjects from "../public/expanded-projects.json"
import SkillsContainer from './Skill/SkillsContainer';

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
    console.log(expandedProject)


    return (
        props.project ?
            <section id="project-section" ref={ref}>
                <div className="bg-main-color h-24">
                </div>
                <div
                    className="text-center bg-cool-blue-color text-main-color text-4xl p-4 pt-4"
                    style={{ height: "75vh" }}
                >
                    <div className="mt-4 font-bold">
                        {props.project.name}
                    </div>
                    <div className="bg-main-color w-24 h-2 mx-auto rounded-md mb-4 mt-4"></div>
                    {/* The start of the project details */}
                    <div className="flex flex-row justify-between h-full">
                        {/* image */}
                        <div>
                          <div className="font-bold text-2xl mt-5">
                            {'Preview'}
                          </div>
                          <div>
                            {expandedProject && expandedProject.image && 
                                <div 
                                  className={`bg-center bg-no-repeat bg-cover rounded-2xl w-[679px] h-[382px] align-middle mt-4 border-8 border-gray-200 shadow hover:scale-105 transition-all transform ease-out duration-200 ml-8`} 
                                  style={{
                                    backgroundImage: `url(${expandedProject.image})`,
                                  }}>
                                </div>
                                
                            }
                          </div>
                        </div>
                        {/* Description */}
                        <div className="text-2xl mt-5 font-bold "> {'Description'} </div>
                        {/* Skills + Links */}
                        <div className="mt-5"> 
                          <div className="text-2xl font-bold">
                            {'Tech Stack'}
                          </div>
                          <div className="p-0 pl-12 items-center text-sm">
                            {expandedProject && (<SkillsContainer skillList={expandedProject.skills}/>)}
                          </div>
                        </div>
                    </div>
                </div>
            </section> : <></>
    )
}

export default ProjectSection