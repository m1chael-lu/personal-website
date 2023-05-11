import React from "react";
import { Link } from "react-scroll";
import SkillsContainer from "./Skill/SkillsContainer";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="text-center mx-auto bg-cool-blue-color">
      <h1 className="text-5xl font-bold p-4 text-main-color pt-10">About Me</h1>
      <div
        className="bg-main-color w-24 h-2 mx-auto
          rounded-md mb-4"
      ></div>
      {/* <p className="text-main-color text-lg">
        Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology!
  </p>*/}

      <div id="home-section" className="bg-cool-blue-color flex flex-col md:flex-row justify-center items-start text-center p-1 mr-1">
        {" "}
        <div className="text-center pt-0 pb-2 text-main-color mr-3 md:text-left md:w-2/5 " id="AboutInfo">
          <h1 className="text-4xl text-main-color font-bold pr-0 pl-0 pt-2 pb-2 text-center mb-2">
            Get to know me!
          </h1>
          <div className="bg-main-color w-24 h-2 mx-auto rounded-md mb-10"></div>
          <p className="text-xl pb-2 mb-8">
            My name is Michael, and I&apos;m a student at <b>The University of Pennsylvania </b> 
            pursuing a dual degree in Computer Science and Finance as part of the Management 
            and Technology Program at Penn. 
          </p>
          <p className="text-xl mb-8">
            I have a passion for leveraging software and ML tools to tackle
            technical problems in Health and Finance 
            I have a range of experiences working in <b>full-stack development </b>
            and <b> data science </b>, and I have an openness for learning and developing
            my skills further.  
          </p>
          <p className="text-xl mb-8">
            Originally from Mississippi, I love the occasional game
            of disc golf, learning fingerstyle guitar, and speed chess!
          </p>
          <Link
            className="cursor-pointer"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="bg-white text-cool-blue-color rounded-sm pl-9 pr-9 pt-3 pb-3 text-xl font-bold mb-8 md:mb-16">
              Reach Out!
            </button>
          </Link>
        </div>
        <div className="p-0 pl-12 items-center md:w-1/2">
          <SkillsContainer name="Languages" skillList={["Javascript", "Python", "Java", 'C++', 'SQL', 'Swift', 'Ocaml']} />
          <SkillsContainer name="Technologies" skillList={["React", "Node.js", "React Native", 'Typescript', 'Pytorch', "Tensorflow", 'Docker', 'MongoDB', 'Jenkins']} />
        </div>
      </div>
    </div>
  );
};

export default About;
