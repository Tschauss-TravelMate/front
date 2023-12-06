// import styles from "Plan_pageView.module.css";
import React from "react";

const Plan_pageView = ({ plan }) => {
  return (
    <div>
      <h1>{plan.title}</h1>
      <p>도시: {plan.city}</p>
      <p>날짜: {formattingDate(plan.date)}</p>
      <p>예산: {plan.cost}₩</p>
      {/* 필요에 따라 더 많은 세부 정보 추가 */}
    </div>
  );
};

export default Plan_pageView;
