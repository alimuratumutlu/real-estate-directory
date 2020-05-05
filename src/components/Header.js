import React from "react";
import { IoMdCart } from "react-icons/io";

import { FaMapMarkedAlt } from "react-icons/fa";

import { IconButton } from "gestalt";
import "gestalt/dist/gestalt.css";

export default function Header(props) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
      <div className="container">
        <a className="navbar-brand" href="#">
          Villa Cart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <input
              className="form-control input-long"
              type="text"
              placeholder="You may search a Villa name, or use buttons to filter and to see on the map"
              size="100"
            />
          </ul>
          <span className="d-inline">
            <IconButton
              accessibilityLabel="see more"
              accessibilityHaspopup
              accessibilityExpanded={isOpen}
              icon="filter"
              onClick={() => setOpen(!isOpen)}
            />
          </span>
          <span className="d-inline">
            <IconButton
              accessibilityLabel="see more"
              accessibilityHaspopup
              accessibilityExpanded={isOpen}
              icon="location"
              onClick={() => setOpen(!isOpen)}
              className="d-inline"
            />
          </span>
          <span className="d-inline">
            <IconButton
              accessibilityLabel="see more"
              accessibilityHaspopup
              accessibilityExpanded={isOpen}
              icon="shopping-bag"
              onClick={() => setOpen(!isOpen)}
              className="d-inline"
            />
          </span>
        </div>
      </div>
    </nav>
  );
}
