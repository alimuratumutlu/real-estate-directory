import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

import "./Navbar.css";

const Header = () => {
  return (
    <nav className="navbarCustom navbar navbar-custom navbar-expand-lg navbar-dark shadow fixed-top mb-5 bg-light">
      <div className="container">
        <a className="navbarBrandCustom navbar-brand" href="/">
          <FaOpencart size={28} /> airbaba
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/#">
              Features
            </a>
            <a className="nav-link" href="/">
              Pricing
            </a>
          </div>
          <div style={{ width: "60%" }}>
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="What are you looking for..."
                aria-label="What are you looking for..."
                aria-describedby="button-addon2"
                style={{
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  borderTopWidth: 2,
                  borderBottomWidth: 2,
                  borderColor: "#ff5a5f",
                }}
              />
              <button
                className="btn btn-primary"
                style={{
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  fontWeight: 600,
                  borderTopWidth: 2,
                  borderBottomWidth: 2,
                  borderLeftWidth: 2,
                  borderColor: "#ff5a5f",
                  backgroundColor: "#ff5a5f",
                }}
                type="button"
                id="button-addon2"
              >
                <BiSearchAlt size={24} /> Search
              </button>
            </div>
          </div>
        </div>
        <span className="btnLightBlue btn btn-light">
          <BiSearchAlt size={24} className="mobileOnly me-2" />
          <FiShoppingCart size={24} className="iconCustom me-2" />
          <FaRegUserCircle size={24} className="iconCustom" />
        </span>
      </div>
    </nav>
  );
};

export default Header;
