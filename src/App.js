import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main className="text-black-400 bg-white-900 body-font">      
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>    
  );
}