import React, { Component } from "react";
import Image from "react-bootstrap/Image";


class YellowLight extends Component {

  render() {
    return (
      <Image width="15px" className="statusPic" src={
        `${process.env.PUBLIC_URL}/yellow_light.jpeg`
      }
      />)
  }
}

export default YellowLight;
