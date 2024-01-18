import React from "react";
import NavigationBar from "../components/NavigationBar";
import classes from "./Homepage.module.css";
import heroImg from "../images/img1.png";
import PrimaryButton from "../components/PrimaryButton";
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import portfolio3 from "../images/portfolio3.png";
import portfolio4 from "../images/portfolio4.png";
import portfolio5 from "../images/portfolio5.png";
import img2 from "../images/img2.png";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";

const Homepage = () => {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main>
        <section id="hero" className={classes.heroSection}>
          <div className={`container ${classes.heroContainer}`}>
            <div className="row">
              <div className="col-6">
                <div className="row">
                  <div className="col ">
                    <div className={`col d-flex ${classes.badgeOuter}`}>
                      <div className={classes.innerBadge}>NEW</div>
                      <div className={`col d-flex ${classes.badgeContent}`}>
                        <p className={`m-0 ${classes.badgeText}`}>
                          WE ARE HIRING
                        </p>
                        <span
                          class={`material-symbols-outlined ${classes.badgeArrow}`}
                        >
                          arrow_right_alt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h1 className={classes.heroHeading}>
                    The best place to find your dream job
                  </h1>
                </div>
                <div className="row">
                  <p className={classes.heroPara}>
                    Find Job you love and research the fast-growing companies,
                    and hire experienced workers.
                  </p>
                </div>
                <div className={`row ${classes.searchRow}`}>
                  <div className={`col ${classes.inputDiv}`}>
                    <div className="col">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            class={`input-group-text bg-transparent border-0 material-symbols-outlined  ${classes.searchIcon}`}
                          >
                            search
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Job Title"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div class={` ${classes.vline}`}></div>
                    <div className="col">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            class={`input-group-text bg-transparent border-0 material-symbols-outlined  ${classes.searchIcon}`}
                          >
                            location_on
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="All Locations"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                    <div className={`col ${classes.btnContainer}`}>
                      <PrimaryButton buttonText={"Search"} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <p className="text-start">
                      <div className={classes.checkRow}>
                        <span
                          class={`material-symbols-outlined  ${classes.checkIcon}`}
                        >
                          check_circle
                        </span>
                        7 Days free trial
                      </div>
                    </p>
                  </div>
                  <div className="col-lg-3 ">
                    <p>
                      <div className={`text-start ${classes.checkRow}`}>
                        <span
                          class={`material-symbols-outlined  ${classes.checkIcon}`}
                        >
                          check_circle
                        </span>
                        Easy to set up
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className={`col-lg-6 col-md-4 ${classes.heroImgContainer}`}>
                <img src={heroImg} alt="heroImg" className={classes.heroImg} />
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className={classes.portfolioSection}>
          <div className={`container ${classes.portfolioContainer}`}>
            <div className="row">
              <p className={classes.portfolioPara}>
                Trusted by 150+ world's best companies
              </p>
            </div>
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <img src={portfolio1} />
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <img src={portfolio2} />
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <img src={portfolio3} />
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <img src={portfolio4} />
              </div>
              <div class="col-lg-2 col-md-4 col-sm-12">
                <img src={portfolio5} />
              </div>
              <div class="col-lg-1 "></div>
            </div>
          </div>
        </section>
        <section id="features">
          <div className={`container ${classes.featureContainer}`}>
            <div className="row ">
              <div className="col ">
                <div className={classes.featureBadge}>WHY HIRAGE</div>
                <h1 className={classes.featureHeading}>New way to get a Job</h1>
                <p className={classes.featurePara}>
                  Once you gain access to the Hirace platform you start out by
                  adding your first team roles.
                </p>
              </div>
            </div>
            <div className={`row ${classes.featureCardRow}`}>
              <div className={`col-lg-4 ${classes.featureCard}`}>
                <div className={`row text-start`}>
                  <img
                    src={icon1}
                    alt="icon1"
                    className={classes.featureIcon}
                  />
                  <h4 className={classes.cardTitle}>Manage candidtes easily</h4>
                  <p className={classes.cardPara}>
                    Our easy-to-use software lets you evaluate candidates and
                    move them faster.
                  </p>
                  <p className={classes.cardButton}>
                    <div className={classes.cardButtonContent}>
                      Learn More{" "}
                      <span
                        class={`material-symbols-outlined ${classes.cardButtonArrow}`}
                      >
                        arrow_right_alt
                      </span>
                    </div>
                  </p>
                </div>
              </div>
              <div className={`col-lg-4 ${classes.featureCard}`}>
                <div className={`row text-start`}>
                  <img
                    src={icon2}
                    alt="icon2"
                    className={classes.featureIcon}
                  />
                  <h4 className={classes.cardTitle}>Manage candidtes easily</h4>
                  <p className={classes.cardPara}>
                    Our easy-to-use software lets you evaluate candidates and
                    move them faster.
                  </p>
                  <p className={classes.cardButton}>
                    <div className={classes.cardButtonContent}>
                      Learn More{" "}
                      <span
                        class={`material-symbols-outlined ${classes.cardButtonArrow}`}
                      >
                        arrow_right_alt
                      </span>
                    </div>
                  </p>
                </div>
              </div>
              <div className={`col-lg-4 ${classes.featureCard}`}>
                <div className={`row text-start`}>
                  <img
                    alt="icon3"
                    src={icon3}
                    className={classes.featureIcon}
                  />
                  <h4 className={classes.cardTitle}>Manage candidtes easily</h4>
                  <p className={classes.cardPara}>
                    Our easy-to-use software lets you evaluate candidates and
                    move them faster.
                  </p>
                  <p className={classes.cardButton}>
                    <div className={classes.cardButtonContent}>
                      Learn More{" "}
                      <span
                        class={`material-symbols-outlined ${classes.cardButtonArrow}`}
                      >
                        arrow_right_alt
                      </span>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-works">
          <div className={`container ${classes.howWorksContainer}`}>
            <div className="row ">
              <div className="col">
                <div className={classes.featureBadge}>HOW IT WORKS</div>
                <h1 className={classes.featureHeading}>
                  Getting started is easy
                </h1>
                <p className={classes.featurePara}>
                  Create a profile and we'll match you with the best your dream
                  companies and jobs in the world.
                </p>
              </div>
            </div>
            <div className={`row ${classes.personalDataCardContaienr}`}>
              <div className={`col-sm-12 col-md-12 col-lg-6 `}>
                <img src={img2} alt="img2" className={classes.img2} />
              </div>
              <div
                className={`col-sm-12 col-md-12 col-lg-6 ${classes.personalDataRightCol}`}
              >
                <div className={`row text-start`}>
                  <h2 className={classes.personalDataNumber}>02</h2>
                  <h1 className={classes.personalDataHeading}>
                    Fill your Personal Data
                  </h1>
                  <p className={classes.personalDataPara}>
                    Finish your register and and complete your personal data and
                    prepare your resume.
                  </p>
                  <hr className={classes.hLine} />

                  <div className={`row p-0 ${classes.personalDataIconRow}`}>
                    <div className={`col-lg-1 text-start`}>
                      {" "}
                      <span
                        class={`material-symbols-outlined  ${classes.checkIcon}`}
                      >
                        check_circle
                      </span>
                    </div>
                    <div
                      className={`col-lg-11 p-0 ${classes.perosnalDataIconParaContent}`}
                    >
                      <span className="text-dark">
                        <strong>One workflow.</strong>
                      </span>{" "}
                      Easily collaborate with teams to find & hire the right
                      candidate.
                    </div>
                  </div>
                  <div className={`row p-0 ${classes.personalDataIconRow}`}>
                    <div className={`col-lg-1 text-start`}>
                      {" "}
                      <span
                        class={`material-symbols-outlined  ${classes.checkIcon}`}
                      >
                        check_circle
                      </span>
                    </div>
                    <div
                      className={`col-lg-11 p-0 ${classes.perosnalDataIconParaContent}`}
                    >
                      <span className="text-dark">
                        <strong>Easier Applying.</strong>
                      </span>{" "}
                      Create aaccount that will engage your profile.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Homepage;
