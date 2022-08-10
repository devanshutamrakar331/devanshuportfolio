import { ThemeContext } from "../context/themeContext";
import AppColor from "../AppColor";
import { useContext } from "react";

import "./Hero4.css";
import { ReviewContext } from "../context/reviewContext";

const Hero4 = () => {
  const { arr } = useContext(ReviewContext);
  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  console.log(arr);
  return (
    <div
      className="hero-4"
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
          Client <br />
          <span>Testimonials</span>{" "}
        </h1>
      </p>
      <div className="cards-container">
        <div className="card">
          <div className="card-head">
            <h1>Neha Adlak</h1>
            <h3>Indore,M.P</h3>
          </div>
          <h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              animi repellendus assumenda aspernatur voluptates magnam?
            </p>
          </h5>
        </div>{" "}
        <div className="card">
          <div className="card-head">
            <h1>Ashish Kumar</h1>
            <h3>Muzzafpur, Bihar</h3>
          </div>
          <h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              eveniet ea architecto vitae quidem obcaecati.
            </p>
          </h5>
        </div>{" "}
        <div className="card">
          <div className="card-head">
            <h1>Rajan Kumar</h1>
            <h3>Bhopal , M.P</h3>
          </div>
          <h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              nulla ipsum et ipsa consequuntur eveniet?
            </p>
          </h5>
        </div>
        {arr.map((todo, index) => (
          <div className="card" key={index}>
            <div className="card-head">
              <h1>{todo.name}</h1>
              <h3>{todo.city}</h3>
            </div>
            <h5>
              <p>{todo.desc}</p>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Hero4;
