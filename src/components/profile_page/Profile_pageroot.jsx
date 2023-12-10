import styles from "./Profile_pageroot.module.css"
import { MdClear } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import Sin from "./image/sin.svg?component";
import Travel from "./travel/travel";
import My_post from "./my_post/My_post";
import { useState, useEffect } from "react";
import axios from "axios";
import { Back } from "../const/url";

function Profile_pageroot() {
  const [tab, settab] = useState("travel");
  const [plans, setPlans] = useState([]);
  const [posts, setPosts] = useState([]);

  const tabchange = (tab) => {
    settab(tab)
  };

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
      .get(`${Back}/api/Post_get`) // axios를 통해 백엔드 서버에 요청
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <div className={styles.emt_position}>
          <div className={styles.emt}><MdClear /></div>
          <div className={styles.emt}><MdSettings /></div>
        </div>
        <div className={styles.profile_img}><Sin /></div>
        <div className={styles.nickname}>singhun99</div>

        <div className={styles.border}>
          <div className={styles.profile_header}>
            <div onClick={() => tabchange("travel")}>
              여행
              <div className={tab === "travel" ? styles.slectline : ""}></div>
            </div>
            <div onClick={() => tabchange("my_post")}>
              커뮤니티
              <div className={tab === "my_post" ? styles.slectline : ""}></div>
            </div>
          </div>
        </div>
        {tab === "travel" ? <Travel plans={plans} /> : "" }
        {tab === "my_post" ? <My_post  posts={posts}/> : "" }
      </div>
    </div>
  );
}

export default Profile_pageroot;
