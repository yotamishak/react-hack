import React, { Component } from "react";
import Image from "react-bootstrap/Image";


class RedLight extends Component {

  render() {
    return (
      <Image width="15px" className="statusPic" src={
        `${process.env.PUBLIC_URL}/red_light.png`
      }
      />)
  }
}

export default RedLight;