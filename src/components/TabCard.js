import React from "react";
import classes from "./TabCard.module.css";

const TabCard = ({ img }) => {
  return (
    <div className={`${classes.mainContainer}`}>
      <div className={`row`}>
        <div className={`col p-0 ${classes.tabCardIcon}`}>
          <img src={img} className={classes.tabCardImg} />
        </div>
        <div className={`col  mt-2 text-start`}>
          <div className={`row `}>
            <h4 className="p-0">Web Developer</h4>
          </div>
          <div className={`row ${classes.tabCardSubTitle}`}>Loom</div>
        </div>
        <div className={`col text-end ${classes.tabCardArrowCol}`}>
          <span class={`material-symbols-outlined ${classes.tabCardArrow}`}>
            arrow_right_alt
          </span>
        </div>
        <div className={`col text-end ${classes.tabCardDate}`}>5 Jan 2022</div>
      </div>
      <div className={`row`}>
        <p className={`${classes.tabCardPara}`}>
          We are on a mission to empower everyone at work to communicate more
          effectively.
        </p>
      </div>
      <hr />
      <div className={`row mt-4`}>
        <div className={`col ${classes.tabCardBottomCol}`}>
          <span class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}>
            location_on
          </span>
          New York
          <span className={classes.tabCardDot}>•</span>
          <span class={`material-symbols-outlined ${classes.tabCardSmallIcon}`}>
            monetization_on
          </span>
          75K - 90K / Year
          <span className={classes.tabCardDot}>•</span>
          Fulll-Time
        </div>
      </div>
    </div>
  );
};

export default TabCard;
