import React, { Component } from "react";
import { FiGithub } from "react-icons/fi";

import "./Footer.css";

export default class index extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Developed by muumdev</span>
          <a
            alt="github repo"
            className="text-muted text-right"
            href="https://github.com/muum/reactjs-real-estate-directory"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </footer>
    );
  }
}
