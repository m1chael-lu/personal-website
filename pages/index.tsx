import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";

const Home: NextPage = () => {
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
        <Experience />
      </section>
      {/*  Contact me */}
      <section className="" id="contact-section">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
