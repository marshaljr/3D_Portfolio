import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import { workExperiences } from "../constants/index";
import Developer from "../components/Developer.jsx";
import CanvasLoader from "../components/CanvasLoader";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const [autoRotate, setAutoRotate] = useState(true);

  const controlsRef = useRef();

  return (
    <section className="c-space my-20 py-15" id="experience">
      <div className="w-full text-neutral-300">
        <h3 className="grid-headtext">My Skills</h3>
        <div className="work-container items-center justify-center">
          <div className="work-canvas border-neutral-800 h-100 sm:h-96 md:h-[40rem] ">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                autoRotate={autoRotate}
                autoRotateSpeed={5}
              />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                  // onPointerOver={() => setAutoRotate(false)}
                  // onPointerOut={() => setAutoRotate(true)}
                  // onClick={()=>setAutoRotate(false)}
                  onClick={() => {
                    setAutoRotate(false);
                    if (controlsRef.current) {
                      controlsRef.current.reset();
                    }
                  }}
                  onPointerOver={() => {
                    setAutoRotate(false);
                    if (controlsRef.current) {
                      controlsRef.current.reset();
                    }
                  }}
                  onPointerOut={() => {
                    setAutoRotate(true);
                  }}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content border-neutral-800 mx-4 my-10">
            <div className="sm:py-6 py-2 sm:px-5 px-2.5 grid grid-cols-1 sm:grid-cols-2 ">
              {workExperiences.map(
                ({ id, name, icon, animation, level, pos, badge }) => (
                  <div
                    key={id}
                    onClick={() => {
                      setAnimationName(animation);
                      setAutoRotate(false);
                      if (controlsRef.current) {
                        controlsRef.current.reset();
                      }
                    }}
                    onPointerOver={() => {
                      setAnimationName(animation);
                      setAutoRotate(false);
                      if (controlsRef.current) {
                        controlsRef.current.reset();
                      }
                    }}
                    onPointerOut={() => {
                      setAnimationName("idle");
                      setAutoRotate(true);
                    }}
                    className="work-content_container py-4 group hover:bg-neutral-900 flex items-start sm:items-center rounded-lg transition cursor-pointer relative">
                    <div className="flex flex-col h-full justify-start items-center">
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
                      <p className="text-sm text-gray-300">{pos}</p>
                    </div>
                    <div
                      className={`absolute top-1 right-2 text-sm sm:text-base transition-all duration-300 ease-in-out
${
  animationName === animation
    ? "opacity-100 translate-x-0"
    : "opacity-0 -translate-x-4"
} ${
                        level === "Intermediate"
                          ? "bg-yellow-900/40 text-yellow-300"
                          : level === "Advanced"
                          ? "bg-blue-900/40 text-blue-400"
                          : "bg-gray-700/30 text-gray-300"
                      } rounded-lg px-1 py-1 w-max`}>
                      <div className="flex items-center gap-1 whitespace-nowrap">
                        {badge.endsWith(".json") ? (
                          <>
                            <lord-icon
                              src={badge}
                              trigger="loop"
                              state={
                                level === "Intermediate"
                                  ? "loop-book"
                                  : level === "Advanced"
                                  ? "hover-heartbeat-alt"
                                  : "loop"
                              }
                              colors={`primary:${
                                level === "Intermediate"
                                  ? "#eeca66"
                                  : level === "Advanced"
                                  ? "#60a5fa"
                                  : "#d1d5db"
                              }`}
                              style={{
                                width: "20px",
                                height: "20px",
                              }}></lord-icon>
                          </>
                        ) : (
                          <img
                            src={badge}
                            alt="badge"
                            className="w-5 h-5 object-contain"
                          />
                        )}
                        <span>{level}</span>
                      </div>
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
