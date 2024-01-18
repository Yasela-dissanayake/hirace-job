import React from "react";
import brand from "../images/logo.png";
import classes from "./NavigationBar.module.css";
import PrimaryButton from "./PrimaryButton";

const NavigationBar = () => {
  return (
    <div className={classes.mainNavContainer}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={brand} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={classes.navListContainer}>
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className={`nav-item ${classes.navList}`}>
                  <a
                    className={`nav-link ${classes.navItem}`}
                    aria-current="page"
                    href="#"
                  >
                    Job Vacancy
                  </a>
                </li>
                <li className={`nav-item ${classes.navList}`}>
                  <a className={`nav-link ${classes.navItem}`} href="#">
                    Features
                  </a>
                </li>
                <li className={`nav-item ${classes.navList}`}>
                  <a className={`nav-link ${classes.navItem}`} href="#">
                    Pricing
                  </a>
                </li>
                <li className={`nav-item ${classes.navList}`}>
                  <a className={`nav-link ${classes.navItem}`} href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <PrimaryButton buttonText="Sign Up" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
