import styles from "./plan_pageView.module.css";
import React from "react";
import { useLocation } from "react-router-dom";
import Invite from "../image/inviteplus.svg?component";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import Arrow_icon from "../image/arrow_icon.svg?component";

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
  // state [plans={plans} companion={companion} user={user}]
  console.log(state);

  const startDate = new Date(state[0].date);
  const endDate = new Date(state[0].end_date);
  const startDateString = startDate.toISOString().split("T")[0];
  const endDateString = endDate.toISOString().split("T")[0];

  // state[1]에서 companion_user 값이 일치하는 튜플 찾기
  const matchingCompanion = state[1].find(
    (companion) => companion.companion_name === state[0].title
  );

  let companionsList = ["동행자 정보 없음"]; // 기본값

  if (matchingCompanion) {
    // 동행자 정보가 있다면 콤마로 구분하여 문자열 생성
    companionsList = matchingCompanion.companion_user.split(",");
  }

  const matchingProfile = (who) => {
    const matchedUser = state[2].find((user) => user.user_id === who);
    return matchedUser ? matchedUser.user_profile : null;
  };

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
        {/* 동행자*/}
        <div className={styles.companion}>
          <h1>나와 함께하는 동행자들</h1>
          {companionsList.map((value, index) => (
            <div key={value}>
              <div className={styles["companion-item"]}>
                <div className={styles["image-container"]} key={index}>
                  {matchingProfile(value) && ( //동행자가 존재할 때만 이미지 렌더링
                    <div className={styles["rounded-image"]}>
                      <img
                        className={styles.img}
                        src={matchingProfile(value)}
                        alt="User Profile"
                      />
                    </div>
                  )}
                </div>
                <div className={styles["companion-text"]}>{value}</div>
                <div></div>
              </div>
            </div>
          ))}
          <button className={styles.button}>
            <div className={styles.plus_location}>
              <Invite />
            </div>
          </button>
        </div>
        {/*예약정보*/}
        <div className={styles.reservation}>
          <h1>예약 정보</h1>
          <div>
            <div className={styles.air_plane_icon}>
              <PiAirplaneTiltFill size="30" />
              <div className={styles["reservation-text"]}>12만원</div>
            </div>
            <div className={styles.bed_icon}>
              <IoBedSharp size="30" />
              <div className={styles["reservation-text"]}>12만원</div>
            </div>
            <div className={styles.flag_icon}>
              <FaFlag size="30" />
              <div className={styles["reservation-text"]}>12만원</div>
            </div>
          </div>
        </div>
        {/*해당 여행지 여행자들의 플래너*/}
        <div className={styles.planner}>
          <h1>여행자들의 플래너</h1>
          <div className={styles.moreview}>
            <p>더보기</p>
            <div className={styles["moreview-arrow"]}>
              <Arrow_icon width="10" height="10" />
            </div>
          </div>
          <div className={styles.planner_img}>
            <div className={styles.planner_img_container}>
              <img src="https://www.visitbusan.net/uploadImgs/files/cntnts/20200102184135058_wufrotr"></img>
              <div className={styles.planner_img_container_text}>
                2023년 12월 출발
              </div>
            </div>
            <div className={styles.planner_img_container}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/500px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg"></img>
              <div className={styles.planner_img_container_text}>
                2024년 1월 출발
              </div>
            </div>
            <div className={styles.planner_img_container}>
              <img src="https://i.ytimg.com/vi/4jZLUo82yaY/maxresdefault.jpg"></img>
              <div className={styles.planner_img_container_text}>
                2024년 8월 출발
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan_pageView;
