import styles from "./Bottomnav.module.css"
import { MdPeopleOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";
import Mainicon from "./image/Mainicon.svg?component";

function Bottomnav() {
  return (
    <nav className={styles.nav}>
      <div>
        <div><MdPeopleOutline className={styles.emt_post} /></div>
        <div className={styles.emt_font}></div>
      </div>
      <div>
        <div><MdBookmarkBorder className={styles.emt_save} /></div> 
        <div className={styles.emt_font}>저장</div>
      </div>
      <div>
          <div><Mainicon className={styles.emt_home} /></div>
          <div className={styles.plan_font}>홈</div>
      </div>
      <div>
        <div><MdCalendarToday className={styles.emt_plan} /></div>
        <div className={styles.plan_font}>일정</div>
      </div>
      <div>
        <div><MdOutlinePermIdentity className={styles.emt_profile} /></div>
        <div className={styles.emt_font}>프로필</div>
      </div>
    </nav>
  );
}

export default Bottomnav;
