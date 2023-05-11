import React from "react";

interface Project {
  id: number;
  name: string;
  description: string;
  skills: string[];
  github: string;
}

interface Props {
  project: Project;
}

const Card = ({ project }: Props) => {
  return (
    <div
      key={project.id}
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-card-color opacity-80 flex-shrink-0"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
        <p className="text-gray-700 text-base font-bold pt-2">
          <a href={project.github} className="">
            View Source Code
          </a>
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        {project.skills.map((skill) => (
          <span
            key={Math.random()}
            className=" bg-cool-blue-color inline-block rounded-full px-3 py-1 text-sm font-semibold text-main-color mr-2 mb-2 "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;