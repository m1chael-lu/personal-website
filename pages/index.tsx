import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import ProjectSection from "../components/ProjectSection";
import { useState, useEffect } from "react";
import { Project } from "../public/types";
import { scroller } from "react-scroll";

const Home: NextPage = () => {
  const [currProject, setCurrProject] = useState<Project | undefined>(undefined);

  useEffect(() => {
    scroller.scrollTo('project-section', {
      duration: 1500,
      delay: 0,
      smooth: true,
    });
  }, [currProject])

  return (
    <div>
      <Head>
        <title>Michael&apos;s Portfolio</title>
        {/*  Header */}
      </Head>

      <Header />

      {/*  Hero */}
      <section className="bg-main-color" id="home-section">
        <Hero />
      </section>
      {/*  About */}
      <section className="" id="about-section">
        <About />
      </section>
      {/*  Experience / Projects */}
      <section className="" id="experience-section">
        <Experience setProject={setCurrProject}/>
      </section>
      {/* Project Section */}
      <ProjectSection project={currProject} setProject={setCurrProject}/>

      {/*  Contact me */}
      <section className="" id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
