import React, { Component } from "react";

import Header from "./Header";
import ScrollUpButton from "react-scroll-up-button";
import "./App.css";
import LinkList from "./linkList";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      site: false
    }


  }


  render() {
    return (
      <div>
        <Header />
        <LinkList />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
