import React from "react";
import "./index.css";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
