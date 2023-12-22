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

  // state[1]에서 companion_user 값이 일치하는 튜플 찾기
  const matchingCompanion = state[1].find(
    (companion) => companion.companion_name === state[0].title
  );

  let companionsList = "동행자 정보 없음"; // 기본값

  if (matchingCompanion) {
    // 동행자 정보가 있다면 콤마로 구분하여 문자열 생성
    companionsList = matchingCompanion.companion_user.split(",").join(" ");
  }
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
          <div className={styles["header-date-p"]}>
            {startDateString} ~ {endDateString}
          </div>
        </div>
        <div className={styles.grayline}></div>
      </div>
      <div className={styles.box}>
        {/* 일치하는 companion_user 값을 출력 */}
        <div className={styles.companion}>
          <h1>나와 함께하는 동행자들</h1>
          <div className={styles["companion-text"]}>
            {companionsList.map(value)}
            {companionsList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan_pageView;
