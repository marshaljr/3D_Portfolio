import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/Developer";
import CanvasLoader from "../components/CanvasLoader";

const Experience = () => {
  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-neutral-300">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
          <div className="work-canvas border-neutral-800">
            <Canvas>
              <ambientLight intensity={5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight intensity={1} position={[10, 10, 10]} />
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                makeDefault
                autoRotate
                autoRotateSpeed={2.4}
              />
              <OrbitControls />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position={[0, -3, 0]} scale={3} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content border-neutral-800">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, icon, pos, duration, title, animation }) => (
                  <div
                    key={id}
                    className="work-content_container group hover:bg-neutral-900">
                    <div className="flex flex-col h-full justify-start items-center py-2 ">
                      <div className="work-content_logo ">
                        <img
                          src={icon}
                          alt={`${name} logo`}
                          className="h-full w-full"
                        />
                      </div>
                      <div className="work-content_bar bg-neutral-800" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white">{name}</p>
                      <p className="text-sm mb-5">
                        {pos}--{duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
