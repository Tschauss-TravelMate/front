import styles from "./Plan_pageCreate.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";

const Plan_pageCreate = () => {
  const location = useLocation();
  const cities = location.state;

  // cities 배열과 동일한 길이의 선택 상태 배열을 생성하고 모두 false로 초기화합니다.
  const [selectedCities, setSelectedCities] = useState(new Array(cities.length).fill(false));

  const choiceButtonClick = (index) => {
    // 선택된 도시의 상태만 변경합니다.
    const updatedSelectedCities = [...selectedCities];
    updatedSelectedCities[index] = !updatedSelectedCities[index];
    setSelectedCities(updatedSelectedCities);
  };

  console.log('Received cities prop:', location);
  console.log('city', cities);
  console.log("selectedCities", selectedCities);

  return (
    <div>
      <Header />
      {cities.map((city, index) => (
        <div
          key={city.city_num}
          className={`${styles["button_position"]}`}
        >
          <div className={styles.box}>
            <div className={styles["image-container"]}>
              <div className={styles["rounded-image"]}>
                <img src={city.city_img} alt={city.city} />
              </div>
            </div>
            <div className={styles["box-title"]}>
              {city.city}
              <div className={styles["box-text"]}>{city.city_info} </div>
            </div>
          </div>
          <button
            onClick={() => choiceButtonClick(index)}
            className={`${selectedCities[index] ? styles.cancel_Button : styles.choice_button}`}
          >
            {selectedCities[index] ? "취소" : "선택"}
          </button>
        </div>
      ))}
      {selectedCities.some((selected) => selected) && (
        <div className={styles["complete-button-location"]}>
          <button className={styles["complete-button"]}>선택 완료</button>
        </div>
        )}
    </div>
  );
};

export default Plan_pageCreate;
