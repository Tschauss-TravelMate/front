//import styles from "./Plan_pageroot.module.css"
import Bottomnav from "../Bottomnav/Bottomnav";
import { useState, useEffect } from "react";
import Plan_pageContent from "./Plan_pageContent";
import styles from "./Plan_pageroot.module.css";
import axios from "axios";
import { Back } from "../const/url";

const Plan_pageroot = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get(`${Back}/api/get`)
      .then((response) => {
        setPlans(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <Plan_pageContent plans={plans} />
      </div>
      <Bottomnav />
    </div>
  );
};

export default Plan_pageroot;
