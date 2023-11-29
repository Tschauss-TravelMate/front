//import styles from "./Plan_pageroot.module.css"
import { useState, useEffect } from "react";
import Plan_pageContent from "./Plan_pageContent";
import Plan_pageCreate from "./plan_pageCreate/Plan_pageCreate";
import styles from "./Plan_pageroot.module.css";
import axios from "axios";
import { Back } from "../const/url";

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
      {showCreatePage ? (
        <Plan_pageCreate cities={cities} />
      ) : (
        <button onClick={handleCreateButtonClick}>여행 일정 만들기 </button>
      )}
      <div className={styles.container}>
        <Plan_pageContent plans={plans} />
      </div>
    </div>
  );
};

export default Plan_pageroot;
