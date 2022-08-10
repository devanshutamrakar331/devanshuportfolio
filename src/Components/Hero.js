import "./Hero.css";
import resume from "./resumedevanshu.pdf";
import AppColor from "../AppColor";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Hero = () => {
  const h1 = useRef(null);
  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  useEffect(() => {
    gsap.from(".hero-text h1 span", {
      opacity: 0,
      ease: "easeInOut",
      stagger: 0.1,
      // duration: 2,
    });
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundColor: `${val.backgroundColor}`,
        color: `${val.color}`,
      }}
    >
      <h1 id="dot"></h1>
      <h1 id="dot2"></h1>
      <div className="hero-text">
        <p>
          <h1>
            <span>H</span>
            <span>e</span>
            <span className="gap">y</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
            <span className="gap">,</span>
            <span></span>
            <span className="gap">I</span>
            <span> </span>
            <span>W</span>
            <span>r</span>
            <span>i</span>
            <span>t</span>
            <span className="gap">e</span>
            <span> </span>
            <span style={{ color: "orangered" }}>C</span>
            <span style={{ color: "orangered" }}>o</span>
            <span style={{ color: "orangered" }}>d</span>
            <span style={{ color: "orangered" }}>e</span>
          </h1>
        </p>
        <p>
          <h4
            style={{
              backgroundColor: `${val.backgroundColor}`,
              color: `${val.color}`,
            }}
          >
            I am a Full Stack Web Developer India. I passionate to code and
            build a full stack web application with great user experiences &
            website designs for brands
          </h4>
        </p>
        <div className="hero-text-btn">
          <a
            href="
        https://www.instagram.com/wdcreations_devanshu/
        
        "
          >
            <button id="say-btn">Say Hey </button>
          </a>

          <a href={resume} download>
            <button id="down-resume">Download Resume</button>
          </a>
        </div>
      </div>
      <img
        src="https://ouch-cdn2.icons8.com/-vVVU0ytD19Goilrknwy2AvD8Hdl5hOd0QA_Dfj18ds/rs:fit:256:162/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzE3/LzQ4NmM0ZmJmLTQ0/MWItNDlkOS05NzE1/LTJmYjgxNzQ5Zjg4/OS5wbmc.png"
        alt=""
      />
    </div>
  );
};

export default Hero;
