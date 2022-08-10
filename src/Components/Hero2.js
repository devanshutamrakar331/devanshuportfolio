import { useContext } from "react";
import "./Hero2.css";
import { ThemeContext } from "../context/themeContext";
import AppColor from "../AppColor";
import image1 from "..//photos/image1.png";
import image2 from "..//photos/image2.png";
import image3 from "..//photos/image3.png";
import image4 from "..//photos/image4.png";
import image5 from "..//photos/image5.png";
import image6 from "..//photos/image6.png";
const Hero2 = () => {
  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  return (
    <div
      className="hero-2"
      style={{
        backgroundColor: `${val.backgroundColor}`,
        color: `${val.color}`,
      }}
    >
      <h1>
        <div
          id="line"
          style={{
            backgroundColor: `${val.color}`,
          }}
        ></div>{" "}
        Designing<span>Work</span>
      </h1>
      <div className="hero-2-photos">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
    </div>
  );
};

export default Hero2;
