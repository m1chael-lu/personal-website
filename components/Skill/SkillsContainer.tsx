import React from "react";
import SkillCard from "./SkillCard";

type Props = {
    name?: string;
    skillList: string[];
}

const SkillsContainer = (props: Props) => {
    return (
      <div className="text-center pt-0 pb-2 mx-auto md:w-4/5 text-black" id="SkillSection">
        <>
          {props.name && 
            <div>
              <h1 className="text-4xl font-bold text-main-color text-center p-4">{props.name}</h1>
              <div className="bg-main-color w-24 h-2 mx-auto rounded-md"></div>
            </div>
          }
        </>
  
        <div className="p-12 xl:p-6 md:p-6 space-x-0.5 xl:space-x-2 md:space-x-2" id="skills">
          <div className="flex flex-wrap">
            {props.skillList.map((skill) => (
              <div className="m-1" key={skill}>
                <SkillCard name={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export default SkillsContainer