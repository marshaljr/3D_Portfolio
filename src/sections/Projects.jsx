import React, { Suspense, useState } from "react";
import { myProjects } from "../constants";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import DemoComputer from "../components/DemoComputer";

const projectCount = myProjects.length;
const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  // Keyboard navigation for project carousel
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      handleNavigation("previous");
    } else if (
      e.key === "ArrowRight" ||
      e.key === "ArrowDown" ||
      e.key === " "
    ) {
      handleNavigation("next");
      e.preventDefault();
    }
  };

  return (
    <section
      className="c-space my-20 py-10"
      id="work"
      role="region"
      aria-label="Projects section">
      <p className="grid-headtext" role="heading" aria-level={2}>
        My Work
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div
          className="flex flex-col gap-5 relative sm:p-10 py-5 shadow-2xl shadow-black-200"
          role="group"
          aria-label={`Project ${selectedProjectIndex + 1} of ${projectCount}: ${currentProject.title}`}>
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt={`Screenshot of ${currentProject.title} project`}
              className="w-full h-96 object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}>
            <img
              src={currentProject.logo}
              alt={`${currentProject.title} logo`}
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="grid-subtext animatedText">{currentProject.desc}</p>
            <p className="grid-subtext animatedText">
              {currentProject.subdesc}
            </p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div
              className="flex items-center gap-3"
              role="list"
              aria-label="Technologies used">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo" role="listitem">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer grid-subtext"
              href={currentProject.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${currentProject.title}`}>
              <span>Check Live Site</span>
              <img
                src="/assets/arrow-up.png"
                alt="opens in new tab"
                className="h-3 w-3"
              />
            </a>
          </div>
          <div
            className="flex justify-between items-center mt-7"
            role="group"
            aria-label="Project navigation">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
              onKeyDown={(e) => handleKeyDown(e, "previous")}
              aria-label="Previous project">
              <img
                src="/assets/left-arrow.png"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </button>
            <span className="text-sm text-neutral-400" aria-live="polite">
              {selectedProjectIndex + 1} / {projectCount}
            </span>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
              onKeyDown={(e) => handleKeyDown(e, "next")}
              aria-label="Next project">
              <img
                src="/assets/right-arrow.png"
                alt=""
                className="w-4 h-4"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <div
          className="border border-neutral-800 bg-neutral-1000 rounded-lg h-96 md:h-full opacity-80"
          role="img"
          aria-label={`3D demo of ${currentProject.title}`}>
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
