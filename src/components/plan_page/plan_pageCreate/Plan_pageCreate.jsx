import styles from "./Plan_pageCreate.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Calendar from "./Calendar";

const Plan_pageCreate = () => {
  const location = useLocation();
  const cities = location.state;

  const [selectedCities, setSelectedCities] = useState(new Array(cities.length).fill(false)); //cities와 동일한 길이 배열 생성, false로 초기화

  const choiceButtonClick = (index) => {
    // 선택된 도시의 상태만 변경합니다.
    const updatedCities = [...selectedCities]; //selectedCities 배열 복사본 생성
    updatedCities[index] = !updatedCities[index]; //index값 반대로 변경 false는 true true는 false로
    setSelectedCities(updatedCities);
  };

  console.log('Received cities prop:', location);
  console.log('city', cities);
  console.log("selectedCities", selectedCities);

  return (
    <div>
      <Header />
      <Calendar />
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
