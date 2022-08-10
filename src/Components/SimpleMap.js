import React from "react";
import GoogleMapReact from "google-map-react";
import { useState, useContext } from "react";
import "./Hero5.css";
import { ThemeContext } from "../context/themeContext";
import AppColor from "../AppColor";
import { ReviewContext } from "../context/reviewContext";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const { arr, setArr } = useContext(ReviewContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr([...arr, { name: name, city: city, desc: desc }]);
    setName("");
    setCity("");
    setDesc("");
  };
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");

  const { theme } = useContext(ThemeContext);
  const val = AppColor[0][theme];
  const defaultProps = {
    center: {
      lat: 23.25927502187051,
      lng: 77.47834304153764,
    },

    zoom: 11,
  };

  return (
    <div
      className="hero-5"
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
          Location <br />
          <span> Feedback</span>{" "}
        </h1>
      </p>
      <div className="map-container">
        <div id="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={23.25927502187051}
              lng={77.47834304153764}
              text="Work Space"
            />
          </GoogleMapReact>
        </div>
        <form onSubmit={handleSubmit} action="">
          <h1 id="form-head">Feedback Form</h1>
          <div className="form-container">
            <div className="input-fields">
              <label htmlFor="name">Name</label>
              <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-fields">
              <label htmlFor="city">City</label>
              <input type="city" onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="input-fields">
              <label htmlFor="Desc">Description</label>
              <textarea
                name="desc"
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="input-field">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
