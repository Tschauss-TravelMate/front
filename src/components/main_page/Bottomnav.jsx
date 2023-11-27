import styles from "./Bottomnav.module.css";
import { MdPeopleOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";
import Mainicon from "./image/U.svg?component";

function Bottomnav() {
  return (
    <nav className={styles.nav}>
      <div>
        <div>
          <MdPeopleOutline className={styles.emt1} />
        </div>
        <div>게시글</div>
      </div>
      <div>
        <div>
          <MdBookmarkBorder className={styles.emt2} />
        </div>
        <div>저장</div>
      </div>
      <div>
        <div>
          <Mainicon />
        </div>
      </div>
      <div>
        <div>
          <MdCalendarToday className={styles.emt3} />
        </div>
        <div>일정</div>
      </div>
      <div>
        <div>
          <MdOutlinePermIdentity className={styles.emt4} />
        </div>
        <div>프로필</div>
      </div>
    </nav>
  );
}

export default Bottomnav;
