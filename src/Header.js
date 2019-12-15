import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";


import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display">Link Health Monitor</h1>
          <p className="lead">
            Use this Web App to check the health status of all of your links!
<br /><br /><strong>
              Powered by Hackathon Team 7</strong>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
