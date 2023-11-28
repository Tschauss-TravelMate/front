import styles from "./Plan_pageContent.module.css";
import PropTypes from "prop-types";

const Plan_pageContent = ({ plans }) => {
  function formattingDate(curDate) {
    const currentDate = new Date();
    const planDate = new Date(curDate);
    const timeDifference = planDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  return (
    <div>
      {plans?.map((plan) => (
        <div key={plan.planner_index}>
          <div className={styles.box}>
            <img className={styles.img} src={plan.img} />
            <div className={styles.location}>{plan.city}</div>
            <div className={styles["location-name"]}>#{plan.title}</div>
            <div className={styles.day}>{formattingDate(plan.date)}일후</div>
            <div className={styles.budget}>
              <div className={styles["budget-text"]}>{plan.cost}₩</div>
            </div>
            <button className={styles.button}>
              <div className={styles["button-text"]}>수정하기</div>
            </button>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

//plans에 대한 PropTypes을 추가
//이는 plans가 배열이어야 하며, 각각의 요소는 특정한 형식을 갖추어야 함을 정의
Plan_pageContent.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      planner_index: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired, // You may need to adjust the type based on your actual data
      cost: PropTypes.number.isRequired,
    })
  ),
};

export default Plan_pageContent;
