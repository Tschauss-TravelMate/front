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
  const plan = location.state;
  const startDate = new Date(plan.date);
  const endDate = new Date(plan.end_date);

  const startDateString = startDate.toISOString().split("T")[0];
  const endDateString = endDate.toISOString().split("T")[0];

  return (
    <div>
      <div className={styles.header}>
        <img className={styles.img} src={plan.img} />
        <h1 className={styles["header-city"]}>{plan.city}, 대한민국,</h1>
        <br></br>
        <h1 className={styles["header-dday"]}>D-{formattingDate(plan.date)}</h1>
        <div className={styles["header-date"]}>
          {startDateString}~{endDateString}
        </div>
      </div>
      <div className={styles.box}></div>
    </div>
  );
};

export default Plan_pageView;
