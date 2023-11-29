import styles from "./Plan_pageCreate.module.css";
// import PropTypes from "prop-types";

const Plan_pageCreate = ({ cities }) => {
  return (
    <div>
      {cities?.map((city) => (
        <div key={city.city_num}>
          <div className={styles.box}>
            <div>{city.city}</div>
            <img className={styles.img} src={city.city_img} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plan_pageCreate;
