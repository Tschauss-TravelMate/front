import styles from "./MainpageContent.module.css";
import PropTypes from "prop-types";

function MainpageContent() {
  return (
    <div className={styles.box}>
      <div className={styles.profile_container}>
        <div className={styles.profile}></div>
        <div className={styles["profile-name"]}>이준희</div>
      </div>
      <div className={styles.info}>
        <div className={styles.search_container}>
          <div className={styles.search_default}>어디로 떠나시나요?</div>
        </div>
      </div>
      <div className={styles.recomend}>
        <div className={styles.recomend_img}></div>
      </div>
      <div className={styles.text1}>준비중인 여행자들의 플래너</div>
      <div className={styles.text2}>더보기</div>
      <div className={styles.planner_img}>
        <div className={styles.planner_img_container1}></div>
        <div className={styles.planner_img_container2}></div>
      </div>  
      <div className={styles.text3}>인기 급상승 국내여행지 Best10</div>

    </div>

    
  );
}

export default MainpageContent;
