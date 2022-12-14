import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Blog from "../Blog/Blog";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavigationBar from "../NavigationBar/NavigationBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Blog />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
