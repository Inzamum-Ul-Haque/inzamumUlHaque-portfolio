import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <Projects />
      <Skills />
      <Education />
      <ContactMe />
    </div>
  );
};

export default Home;
