import styles from "./plan_pageView.module.css";
import React from "react";
import { useLocation } from "react-router-dom";

const Plan_pageView = () => {
  function formattingDate(curDate) {
    const currentDate = new Date();
    const planDate = new Date(curDate);
    const timeDifference = planDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const startDate = new Date(state[0].date);
  const endDate = new Date(state[0].end_date);
  const startDateString = startDate.toISOString().split("T")[0];
  const endDateString = endDate.toISOString().split("T")[0];

  return (
    <div>
      <div className={styles.header}>
        <img className={styles.img} src={state[0].img} />
        <h1 className={styles["header-city"]}>{state[0].city}, 대한민국,</h1>
        <br></br>
        <h1 className={styles["header-dday"]}>
          D-{formattingDate(state[0].date)}
        </h1>
        <div className={styles["header-date"]}>
          {startDateString}~{endDateString}
        </div>
      </div>
      <div className={styles.box}>
        <div>{state[1][0].companion_user}</div>
      </div>
    </div>
  );
};

export default Plan_pageView;
