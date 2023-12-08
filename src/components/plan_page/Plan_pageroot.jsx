import { useState, useEffect } from "react";
import { Back } from "../const/url";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./Plan_pageroot.module.css";
import Plan_pageContent from "./Plan_pageContent";
import Header from "./header/Header";
import Plus from "./image/plus.svg?component";

const Plan_pageroot = () => {
  const [plans, setPlans] = useState([]);
  const [cities, setCities] = useState([]);
  const [companion, setCompanion] = useState([]);
  const [user, setUser] = useState([]);

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

    axios
      .get(`${Back}/api/Companion_get`)
      .then((response) => {
        setCompanion(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`${Back}/api/User_get`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <NavLink to={"/plan/create"} state={cities}>
        <button className={styles.create_button}>
          <div className={styles.button_location}>
            <div className={styles.plus_location}>
              <Plus />
            </div>
            <div></div>
            <div>
              <div className={styles.create_font1}>여행 일정 만들기.</div>
              <div className={styles.create_font2}>
                새로운 여행을 만들어보세요.
              </div>
            </div>
          </div>
        </button>
      </NavLink>
      <div className={styles.container}>
        <Plan_pageContent plans={plans} companion={companion} user={user} />
      </div>
    </div>
  );
};

export default Plan_pageroot;
