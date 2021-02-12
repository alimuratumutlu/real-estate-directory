import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { DiJsBadge } from "react-icons/di";
import { FaRegUserCircle } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav
      className={`${styles.navbarCustom} navbar navbar-custom navbar-expand-lg navbar-dark shadow fixed-top mb-5 bg-light`}
    >
      <div className="container">
        <a className={`${styles.navbarBrandCustom} navbar-brand`} href="#">
          <FaOpencart size={28} /> airbaba
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
        <button
          type="button"
          className={`${styles.btnLightBlue} btn btn-light`}
        >
          <FiShoppingCart size={24} className={styles.iconCustom} /> <FaRegUserCircle size={24} className={styles.iconCustom} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
