import React from "react";
import classes from "./MainFooter.module.css";
import logo from "../images/logo.png";

const MainFooter = () => {
  return (
    <section className={`${classes.footerSection}`}>
      <div className={`container-fluid ${classes.footerContainer}`}>
        <div className={`row `}>
          <div className={`col-md-6 {classes.footerLeftCol}`}>
            <div className={`row `}>
              <img className={`p-0 ${classes.logo}`} src={logo} />
              <div className="row">
                <p className={`${classes.footerPara}`}>
                  Find job you love and research the fastest-growing companies
                </p>
              </div>
            </div>{" "}
          </div>
          <div className={`col-lg-6 ${classes.footerRightCol}`}>
            <div className={`row`}>
              <div className={`col-md-4`}>
                <p className={classes.footerCatHeading}>Product</p>
                <p className={classes.footerCatPara}>Remote Job</p>
                <p className={classes.footerCatPara}>Startup</p>
                <p className={classes.footerCatPara}>Investor & Board</p>
                <p className={classes.footerCatPara}>Company</p>
              </div>
              <div className={`col-md-4`}>
                <p className={classes.footerCatHeading}>Features</p>
                <p className={classes.footerCatPara}>For Candidate</p>
                <p className={classes.footerCatPara}>For Company</p>
                <p className={classes.footerCatPara}>Society</p>
              </div>{" "}
              <div className={`col-md-4`}>
                <p className={classes.footerCatHeading}>About Us</p>
                <p className={classes.footerCatPara}>Documentation</p>
                <p className={classes.footerCatPara}>Contact Us</p>
                <p className={classes.footerCatPara}>Career</p>
              </div>
            </div>
          </div>
          <hr className={classes.hrFooter} />
          <div className="row m-0 p-0 align-items-center">
            <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-5 p-0 text-center text-md-start">
              <p className={`${classes.copyrightPara} m-0`}>
                ©2023 Hirace Technologies. Inc.
              </p>{" "}
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-7 order-first order-md-last">
              <div className="row align-items-center mt-2 mt-sm-0">
                <div className="col-sm-3 col-4 p-0 text-end text-sm-start text-md-center text-lg-start">
                  <a href="#" className={classes.link}>
                    Terms
                  </a>
                </div>
                <div className="col-sm-3 col-4 p-0 text-center text-sm-start text-md-center text-lg-start">
                  <a href="#" className={classes.link}>
                    Privacy
                  </a>
                </div>
                <div className="col-sm-3 col-4 p-0 text-start text-md-center text-lg-start">
                  <a href="#" className={classes.link}>
                    Legal
                  </a>
                </div>
                <div className="col-sm-3 col-12 text-sm-end text-center mt-2 mt-sm-0">
                  <div className="row">
                    <div className={`col-4 ${classes.socialIconCol}`}>
                      <a href="#">
                        <i class="fa-brands fa-square-facebook"></i>
                      </a>
                    </div>
                    <div className={`col-4 ${classes.socialIconCol}`}>
                      <a href="#">
                        <i class="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                    <div className={`col-4 ${classes.socialIconCol}`}>
                      <a href="#">
                        <i class="fa-brands fa-square-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFooter;
