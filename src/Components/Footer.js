import "./Footer.css";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import AppColor from "../AppColor";
import whatsapp from "../photos/whatsapp.png";
import insta from "../photos/insta.png";
import fb from "../photos/fb.png";
import github from "../photos/github.png";
const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  return (
    <div
      className="footer"
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
          Contact <br />
          <span>Me</span>{" "}
        </h1>
      </p>
      <div className="footer-container">
        <div className="contact">
          <h1>
            Name : <span> Devanshu Tamrakar </span>
          </h1>
          <h1>
            Email : <span> officialdevanshu331@gmail.com </span>
          </h1>
          <h1>
            Mobile : <span> 91+ 9407222203 </span>
          </h1>
          <h1>
            Address : <span> 55-A Vrindhawan Nagar Bhopal 462041 </span>
          </h1>
        </div>
        <div className="social-media">
          <h1>
            Follow <span>me on</span>
          </h1>
          <div className="icons">
            <a href="">
              <img src={whatsapp} alt="" />
            </a>
            <a
              href="https://www.instagram.com/devanshutamrakar331/"
              target="_blank"
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="https://www.facebook.com/devanshu.tamrakar.7"
              target="_blank"
            >
              <img src={fb} alt="" />
            </a>
            <a href="https://github.com/devanshutamrakar331/">
              <img src={github} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="section"> Made by Devanshu with &#10084;</div>
    </div>
  );
};

export default Footer;
