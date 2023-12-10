import styles from "./travel.module.css";
import { MdArrowForwardIos } from "react-icons/md";

function travel({ plans }) {
  function formattingDate(curDate) {
    const currentDate = new Date();
    const planDate = new Date(curDate);
    const timeDifference = planDate.getTime() - currentDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }
  function formatDate(date) {
    return new Date(date).toLocaleDateString('ko-KR'); // 원하는 언어 및 지역 설정
  }

  return (
    <div className={styles.div_position}>
      <div>
        <div className={styles.travel_font}>다가올 여행</div>
        {plans.map((plan) => {
          const coming_trip = formattingDate(plan.date);

          if (coming_trip >= 0) {
            return (
              <div key={plan.planner_index} className={styles.go_plan}>
                <div className={styles.box}>
                  <div><img className={styles.img} src={plan.img} /></div>
                  <div>
                    <div className={styles.location}>{plan.city}</div>
                    <div className={styles.date_font}>{formatDate(plan.date)} ~ {formatDate(plan.end_date)}</div>
                  </div>
                </div>
                <div className={styles.emt_position}>
                  <MdArrowForwardIos />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div>
        <div className={styles.travel_font}>지나간 여행</div>
        {plans.map((plan) => {
          const passing_trip = formattingDate(plan.date);

          if (passing_trip < 0) {
            return (
              <div key={plan.planner_index} className={styles.go_plan}>
                <div className={styles.box}>
                  <div><img className={styles.img} src={plan.img} /></div>
                  <div>
                    <div className={styles.location}>{plan.city}</div>
                    <div className={styles.date_font}>{formatDate(plan.date)} ~ {formatDate(plan.end_date)}</div>
                  </div>
                </div>
                <div className={styles.emt_position}><MdArrowForwardIos /></div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default travel;
