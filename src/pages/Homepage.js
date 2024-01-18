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
        <section id="features">why hirace</section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Homepage;
