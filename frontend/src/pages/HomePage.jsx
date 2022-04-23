import { Hidden } from "@mui/material";
import React, { useState } from "react";
import SimpleMap from "../components/SimpleMap";
import TopBar from "../components/TopBar/TopBar";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <img
      src="/location.png"
      style={{
        height: "40px",
      }}
    />
    <div
      style={{
        color: "white",
        paddingTop: "5px",
        fontSize: "10px",
        fontWeight: "bold",
        width: "200px",
      }}
    >
      {text}
    </div>
  </div>
);
const HomePage = () => {
  const [position, setPosition] = useState({});

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    setPosition({
      // lat: position.coords.latitude - 7.639,
      // lng: position.coords.longitude + 1.61,
      lng: 86.14663,
      lat: 22.775997,
    });
  }

  getLocation();

  return (
    <>
      <TopBar />
      <div style={{ height: "90vh", overflow: "hidden" }}>
        <SimpleMap center={position}>
          <AnyReactComponent
            lat={22.775997}
            lng={86.14663}
            text="My Marker 1"
          />
          <AnyReactComponent
            lat={22.975997}
            lng={86.14663}
            text="My Marker 2"
          />
          <AnyReactComponent
            lat={22.775997}
            lng={86.54663}
            text="My Marker 1"
          />
          <AnyReactComponent
            lat={22.175997}
            lng={86.94663}
            text="My Marker 2"
          />
        </SimpleMap>
      </div>
    </>
  );
};

export default HomePage;
