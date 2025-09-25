import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("marshaljr615@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-25 py-10" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Marshal</p>
              <p className="grid-subtext">
                With 4 years of experience, I have honed my skills in frontend
                development, with a focus on JS/TS. At the time, expanding my
                skills in Full-Stack Dev.
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/lbcxnxti.json"
                    trigger="loop"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#f4dc9c,secondary:#b4b4b4"
                    style={{
                      width: "25px",
                      height: "25px",
                      paddingTop: "4px",
                      paddingLeft: "5px",
                    }}></lord-icon>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Javascript/Typescript with a focus on React.
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/jectmwqf.json"
                    trigger="loop"
                    colors="primary:#b4b4b4,secondary:#f4dc9c"
                    style={{
                      width: "28px",
                      height: "28px",
                      paddingTop: "7px",
                      paddingLeft: "5px",
                    }}></lord-icon>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28.3949,
                    lng: 84.124,
                    text: "I'm here!",
                    color: "white",
                    size: 80,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work as web developer at any location.
                <lord-icon
                  src="https://cdn.lordicon.com/rpviwvwn.json"
                  trigger="loop"
                  state="hover-rotate-up-to-down"
                  colors="primary:#eeca66,secondary:#08a88a"
                  style={{
                    width: "25px",
                    height: "25px",
                    paddingTop: "4px",
                    paddingLeft: "5px",
                  }}></lord-icon>
              </p>
              <p className="grid-subtext">
                I'm based in Nepal, with remote work available.
                <lord-icon
                  src="https://cdn.lordicon.com/onmwuuox.json"
                  trigger="loop"
                  state="hover-jump-roll"
                  colors="primary:#eeca66,secondary:#b4b4b4"
                  style={{
                    width: "25px",
                    height: "25px",
                    paddingTop: "6px",
                    paddingLeft: "4px",
                  }}></lord-icon>
              </p>
              <Button
                name="Contact me"
                isBeam
                containerClass="w-full mt-10 relative px-6 py-3 rounded-lg
    text-white font-medium
    bg-gray-800
    border border-gray-600
    overflow-hidden
    shadow-sm
    transition-all duration-300
    hover:bg-gray-700 hover:border-gray-400 hover:shadow-md
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-1
    relative z-10"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession - it is my passion.
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/ogjpwrxe.json"
                    trigger="loop"
                    delay="1500"
                    state="in-reveal"
                    colors="primary:#f4dc9c,secondary:#b4b4b4"
                    style={{
                      width: "25px",
                      height: "25px",
                      paddingTop: "6px",
                      paddingLeft: "4px",
                    }}></lord-icon>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-headtext">
                Get in Touch{" "}
                <span>
                  <lord-icon
                    src="https://cdn.lordicon.com/jdgfsfzr.json"
                    trigger="loop"
                    state="hover-conversation-alt"
                    colors="primary:#f4dc9c,secondary:#b4b4b4"
                    style={{
                      width: "32px",
                      height: "32px",
                      paddingTop: "3px",
                      paddingLeft: "4px",
                    }}></lord-icon>
                </span>
              </p>

              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  marshaljr615@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
