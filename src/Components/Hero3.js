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
          style={{ marginTop: "2vw" }}
          src="https://pixabay.com/get/g32ad3ef3122639b26416f443c0a5775052864bb237003911c6ced1ba0e6a925aa39298b043ae0e8ba1ff8bd63faf09b1.png"
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
