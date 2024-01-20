import React from "react";
import classes from "./TabCard.module.css";

const TabCard = ({
  img,
  title,
  subtitle,
  date,
  para,
  salary,
  jobtype,
  location,
}) => {
  return (
    <div className={`${classes.mainContainer}`}>
      <div className={`row`}>
        <div className={`col p-0 ${classes.tabCardIcon}`}>
          <img src={img} className={classes.tabCardImg} />
        </div>
        <div className={`col mt-2 mx-3 text-start`}>
          <div className={`row`}>
            <h4 className="p-0">{title}</h4>
          </div>
          <div className={`row ${classes.tabCardSubTitle}`}>{subtitle}</div>
        </div>
        <div className={`col-4 text-end ${classes.tabCardArrowCol}`}>
          <span class={`material-symbols-outlined ${classes.tabCardArrow}`}>
            arrow_right_alt
          </span>
        </div>
        <div className={`col-sm-4 text-end ${classes.tabCardDate}`}>{date}</div>
      </div>
      <div className={`row`}>
        <p className={`${classes.tabCardPara}`}>{para}</p>
      </div>
      <hr />
      <div className={`row mt-4`}>
        <div className={`col ${classes.tabCardBottomCol}`}>
          <span class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}>
            location_on
          </span>
          {location}
          <span className={classes.tabCardDot}>•</span>
          <span class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}>
            monetization_on
          </span>
          {salary}
          <span className={classes.tabCardDot}>•</span>
          {jobtype}
        </div>
        <div className={classes.tabCardBottomColMob}>
          <div className="row">
            <div className={`col ${classes.tabCardSmallIconColMob}`}>
              <span
                class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}
              >
                location_on
              </span>
            </div>
            <div className={`col`}>{location}</div>
          </div>{" "}
          <div className="row">
            <div className={`col ${classes.tabCardSmallIconColMob}`}>
              <span
                class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}
              >
                monetization_on
              </span>
            </div>
            <div className={`col`}>{salary}</div>
          </div>{" "}
          <div className="row">
            <div className={`col ${classes.tabCardSmallIconColMob}`}>
              <span
                class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}
              >
                work_history
              </span>
            </div>
            <div className={`col`}>{jobtype}</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default TabCard;
