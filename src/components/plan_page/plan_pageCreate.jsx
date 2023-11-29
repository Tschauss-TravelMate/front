import styles from "./Plan_pageCreate.module.css";
import { useState } from "react";
// import PropTypes from "prop-types";

const Plan_pageCreate = ({ cities }) => {
  return (
    <div>
      {cities?.map((city) => (
        <div key={city.city_num} className={styles.box}>
          <div>
            <img className={styles["box-img"]} src={city.city_img} />
            <div className={styles["box-title"]}>{city.city}</div>
            <div className={styles["box-text"]}>{city.city_info}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plan_pageCreate;
