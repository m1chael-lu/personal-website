import React from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { scroller } from 'react-scroll';


interface Project {
  id: number;
  name: string;
  description: string;
  skills: string[];
  github: string;
}

interface Props {
  project: Project;
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>;
}

const Card = ({ project, setProject }: Props) => {
  const handleClick = () => {
    setProject(project);
  }

  return (
    <div
      key={project.id}
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-card-color opacity-80 flex-shrink-0 select-none h-80 transition-transform transform-gpu hover:scale-105 hover:shadow-2xl mr-4"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-between h-full px-6 py-4">
        <div>
          <div className="font-bold text-xl mb-2">{project.name}</div>
          <p className="text-gray-700 text-base">{project.description}</p>
        </div>
        <div>
          <p className="text-gray-700 text-base font-bold pt-2">
            <a href={project.github} className="hover:text-cool-blue-color transition-colors">
              View Source Code
            </a>
          </p>
          <div className="pt-4">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-cool-blue-color inline-block rounded-full px-3 py-1 text-sm font-semibold text-main-color mr-2 mb-2 hover:bg-main-color hover:text-cool-blue-color transition-colors"
              >
                {skill}
              </span>
              ))}
          </div>
          <div className="flex items-center justify-center">
            <IoIosArrowDown className="text-xl opacity-25 hover:opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;