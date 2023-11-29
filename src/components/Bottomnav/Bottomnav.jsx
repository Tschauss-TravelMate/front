import styles from "./Bottomnav.module.css";
import { MdPeopleOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";
import Mainicon from "./image/U.svg?component";
import { NavLink } from "react-router-dom";

function Bottomnav() {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink to="/Post" style={{ textDecoration: "none" }}>
          <div>
            <MdPeopleOutline className={styles.emt1} />
          </div>
          <div className={styles.emt_font}>게시글</div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/Save" style={{ textDecoration: "none" }}>
          <div>
            <MdBookmarkBorder className={styles.emt2} />
          </div>
          <div className={styles.emt_font}>저장</div>
        </NavLink>
      </div>
      <div>
        <div className={styles.out_circle}>
          <NavLink to="/Mainpage" style={{ textDecoration: "none" }}>
            <div className={styles.main_button}>
              <Mainicon />
            </div>
            <div className={styles.in_circle}></div>
          </NavLink>
        </div>
      </div>
      <div>
        <NavLink to="/Plan" style={{ textDecoration: "none" }}>
          <div>
            <MdCalendarToday className={styles.emt3} />
          </div>
          <div className={styles.plan_font}>일정</div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/Profile" style={{ textDecoration: "none" }}>
          <div>
            <MdOutlinePermIdentity className={styles.emt4} />
          </div>
          <div className={styles.emt_font}>프로필</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Bottomnav;
