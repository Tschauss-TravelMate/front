//import styles from "./Mainpageroot.module.css"
import { useState, useEffect } from "react";
import MainpageContent from "./MainpageContent";
import styles from "./MainpageContent.module.css";
import axios from "axios";
import { Back } from "../const/url";

const Mainpageroot = () => {
  const [Home, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get(`${Back}/api/Home_get`)
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
        <MainpageContent plans={Home} />
      </div>
    </div>
  );
};

export default Mainpageroot;
