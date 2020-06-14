// import external modules
import React, { Component, Fragment } from "react";
import GoogleMapReact from "google-map-react";

import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";

const K_WIDTH = 80;
const K_HEIGHT = 80;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "5px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 16,
  fontWeight: "bold",
  padding: "15px 8px"
};
const AnyReactComponent = ({ text }) => <div style={greatPlaceStyle}>{text}</div>;

class GoogleMap extends Component {
  state = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <Fragment>
        <ContentHeader>Google Map React</ContentHeader>
        <ContentSubHeader className="mb-2">
          <p>
            <a href="https://github.com/google-map-react/google-map-react" target="_blank" rel="noopener noreferrer">
              Google Map React
            </a> is google map library for react that allows rendering components as markers.
          </p>
          <a href="https://github.com/google-map-react/google-map-react" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/github/stars/google-map-react/google-map-react.svg?style=social" alt="Stars" />
            <img src="https://img.shields.io/npm/dm/google-map-react.svg" alt="Downloads" />
          </a>
        </ContentSubHeader>
        <div style={{ height: "calc(100vh - 250px)", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBDkKetQwosod2SZ7ZGCpxuJdxY3kxo5Po"
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent lat={59.955413} lng={30.337844} text={"Kreyser Avrora"} />
          </GoogleMapReact>
        </div>
      </Fragment>
    );
  }
}

export default GoogleMap;
