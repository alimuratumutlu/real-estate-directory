import React, { Component } from "react";

import "./Footer.css";

export default class index extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">
            Developed by{" "}
            <a alt="developer" href="https://muum.dev">
              muumdev
            </a>
          </span>
          <span alt="github repo" className="text-muted text-right">
            airbnb + alibaba
          </span>
        </div>
      </footer>
    );
  }
}
