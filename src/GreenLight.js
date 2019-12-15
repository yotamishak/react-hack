import React, { Component } from "react";
import Image from "react-bootstrap/Image";


class GreenLight extends Component {

  render() {
    return (
      <Image width="30px" className="statusPic" src={
        `${process.env.PUBLIC_URL}/green_light.png`
      }
      />)
  }
}

export default GreenLight;
