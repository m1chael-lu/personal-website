import React, { useEffect } from 'react';
import { Project } from '../public/types';
import { useInView } from "react-intersection-observer";
import expandedProjects from "../public/expanded-projects.json"

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
                    className="text-center bg-cool-blue-color text-main-color text-4xl font-bold p-4 pt-4"
                    style={{ height: "75vh" }}
                >
                    <div className="mt-4">
                        {props.project.name}
                    </div>
                    <div className="bg-main-color w-24 h-2 mx-auto rounded-md mb-4 mt-4"></div>
                    {/* The start of the project details */}
                    <div className="flex flex-row justify-between h-full">
                        {/* image */}
                        <div>
                            {expandedProject && expandedProject.image && 
                                <div 
                                  className={`bg-center bg-no-repeat bg-cover rounded-2xl w-[650px] h-[365px] align-middle mt-20 border-8 border-gray-200 shadow hover:scale-105 transition-all transform ease-out duration-200 ml-8`} 
                                  style={{
                                    backgroundImage: `url(${expandedProject.image})`,
                                  }}>
                                </div>
                                
                            }
                        </div>
                        {/* Description */}
                        <div> {'Description'} </div>
                        {/* Skills + Links */}
                        <div> {'Skills + Links'} </div>

                    </div>
                </div>
            </section> : <></>
    )
}

export default ProjectSection