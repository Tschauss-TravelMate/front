import styles from "./Plan_pageCreate.module.css";
import { useState } from "react";
// import PropTypes from "prop-types";

const Plan_pageCreate = ({ cities }) => {
  return (
    <div>
      {cities?.map((city) => (
        <div key={city.city_num}>
          <div className={styles.box}>
            <div className={styles["image-container"]}>
              <div className={styles["rounded-image"]}>
                <img src={city.city_img} />
              </div>
            </div>
            <div className={styles["box-title"]}>
              {city.city}
              <div className={styles["box-text"]}>{city.city_info}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plan_pageCreate;
