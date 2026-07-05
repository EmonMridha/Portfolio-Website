import React from 'react';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Hero from './Hero'


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Contact></Contact>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
       
    );
};

export default Home;