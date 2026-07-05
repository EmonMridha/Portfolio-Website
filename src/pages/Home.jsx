
import AboutMe from "./AboutMe";
import Educations from "./Educations";
import Projects from "./Projects";
import Skills from "./Skills";
import Hero from "./Hero";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Educations />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;