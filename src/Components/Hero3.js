import "./Hero3.css";
import { useContext } from "react";
import "./Hero2.css";
import react from "../photos/react.png";
import { ThemeContext } from "../context/themeContext";
import AppColor from "../AppColor";
const Hero3 = () => {
  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  return (
    <div
      className="hero-3"
      style={{
        backgroundColor: `${val.backgroundColor}`,
        color: `${val.color}`,
      }}
    >
      <p>
        <h1>
          <div
            id="line"
            style={{
              backgroundColor: `${val.color}`,
            }}
          ></div>{" "}
          Working <br />
          <span>Skills</span>{" "}
        </h1>
      </p>
      <div className="hero-3-logos">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
          alt=""
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
          alt=""
        />
        <img
          src="https://ihatetomatoes.net/wp-content/uploads/2016/09/img_greensock.png"
          alt=""
        />

        <img src={react} alt="" />
        <img
          src="https://camo.githubusercontent.com/730645ff32f6efe57c3049411016e52dc798503a7de8a7831fb1a3432043a75e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6261746e30353030302f696d6167652f75706c6f61642f76313539363633323535342f395f68617a66696b2e706e67"
          alt=""
        />
        <img
          style={{ width: "8vw" }}
          src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero3;
