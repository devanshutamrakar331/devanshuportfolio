import React, { useContext } from "react";
import { useState } from "react";
import gsap from "gsap";
import AppColor from "../AppColor.js";
import { useRef } from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { ThemeContext } from "../context/themeContext";
import resume from "./resumedevanshu.pdf";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const val = AppColor[0][theme];
  const menuRef = useRef();
  const open = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  useEffect(() => {
    gsap.to(".menu", {
      left: "0%",
    });
  });

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: `${val.backgroundColor}`,
        color: `${val.color}`,
      }}
    >
      <div className="nav-left">
        <span id="name">
          <b>Devanshu</b> Tamrakar
        </span>
        <span id="portfolio">portfolio</span>
        <button
          style={{
            backgroundColor: `${val.color}`,
            color: `${val.backgroundColor}`,
          }}
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </div>

      <div className="nav-toggle" onClick={(e) => open()}>
        {toggle === true ? (
          <div
            className="menu"
            ref={menuRef}
            style={{
              backgroundColor: `${val.backgroundColor}`,
              color: `${val.color}`,
            }}
          >
            <i
              class="fa-solid fa-xmark"
              id="cancel"
              style={{
                backgroundColor: `${val.backgroundColor}`,
                color: `${val.color}`,
              }}
            ></i>
            <a
              href="#"
              style={{
                backgroundColor: `${val.backgroundColor}`,
                color: `${val.color}`,
              }}
            >
              Home
            </a>
            <a
              href="https://www.instagram.com/wdcreations_devanshu/"
              target="_blank"
              style={{
                backgroundColor: `${val.backgroundColor}`,
                color: `${val.color}`,
              }}
            >
              Work Sample
            </a>
            <a
              href={resume}
              download
              style={{
                backgroundColor: `${val.backgroundColor}`,
                color: `${val.color}`,
              }}
            >
              Download Resume
            </a>
            <a
              target="_blank"
              href="https://github.com/devanshutamrakar331/"
              style={{
                display: "flex ",
                alignItems: "center",
                width: "120px",
                justifyContent: "space-around",
                fontWeight: "500",

                backgroundColor: `${val.backgroundColor}`,
                color: `${val.color}`,
              }}
            >
              See Github
            </a>
          </div>
        ) : (
          ""
        )}
        <i class="fa-solid fa-bars" style={{ marginRight: "1vw" }}></i> Menu
      </div>
      <div className="nav-right">
        <a
          href="#"
          style={
            {
              // color: `${val.color}`,
            }
          }
        >
          Home
        </a>
        <a
          href="https://www.instagram.com/wdcreations_devanshu/"
          target="_blank"
          style={
            {
              // color: `${val.color}`,
            }
          }
        >
          Work Samples
        </a>
        <a
          style={
            {
              // color: `${val.color}`,
            }
          }
          href={resume}
          download
        >
          Download Resume
        </a>
        <a
          href="https://github.com/devanshutamrakar331/"
          target="_blank"
          style={{
            display: "flex ",
            alignItems: "center",
            width: "125px",
            justifyContent: "space-around",
            fontWeight: "500",
          }}
        >
          <img src="https://img.icons8.com/ios-glyphs/40/000000/github.png" />
          See Github
        </a>
      </div>
    </div>
  );
};

export default Navbar;
