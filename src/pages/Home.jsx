import React from 'react';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Hero from './Hero'
import Educations from './Educations';
import Projects from './Projects';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Contact></Contact>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Educations></Educations>
            <Projects></Projects>
        </div>

    );
};

export default Home;