"use strict";
import React from "react";
import ReactDOM from "react-dom";
import logo from "./images/logo.jpeg";
import "./search.less";
import { a } from "./tree-shaking";

if (false) {
  a();
}
class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }
  render() {
    const { Text } = this.state;
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        Search
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
