import { useState, useEffect } from "react";
import Plan_pageContent from "./Plan_pageContent";
import Plan_pageCreate from "./plan_pageCreate/Plan_pageCreate";
import styles from "./Plan_pageroot.module.css";
import Header from "./header/Header";
import axios from "axios";
import { Back } from "../const/url";
import Plus from "./image/plus.svg?component";

const Plan_pageroot = () => {
  const [plans, setPlans] = useState([]);
  const [cities, setCities] = useState([]);
  const [showCreatePage, setShowCreatePage] = useState(false);

  useEffect(() => {
    axios
      .get(`${Back}/api/Planner_get`)
      .then((response) => {
        setPlans(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${Back}/api/City_get`)
      .then((response) => {
        setCities(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCreateButtonClick = () => {
    setShowCreatePage(true);
  };

  return (
    <div>
      <Header />
      {showCreatePage ? (
        <Plan_pageCreate cities={cities} />
      ) : (
        <button onClick={handleCreateButtonClick} className={styles.create_button}>
          <div className={styles.button_location}>
            <div className={styles.plus_location}>
              <Plus />
            </div>
            <div></div>
            <div>
              <div className={styles.create_font1}>여행 일정 만들기.</div>
              <div className={styles.create_font2}>새로운 여행을 만들어보세요.</div>
            </div>  
          </div>
        </button>
      )}
      <div className={styles.container}>
        <Plan_pageContent plans={plans} />  
      </div>
    </div>
  );
};

export default Plan_pageroot;
