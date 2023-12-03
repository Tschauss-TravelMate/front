import styles from "./Header.module.css"
import Bracket from "../image/bracket.svg?component";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
    return (
        <div>
            <div className={styles.header_location}>
                <div className={styles.plan_font}>
                    <div>
                        <Bracket />{'   '}
                        <input type="text" placeholder="여행, 어디로 떠나시나요?" className={styles.city_input} />
                    </div>
                </div>
                <div><MdOutlineSearch className={styles.search} /></div>
            </div>
            <div className={styles.font_position}>
                <div className={styles.header_font}>
                    국내도시
                    <div className={styles.select_box}></div>
                </div>
                <div className={styles.header_font}>해외도시</div>
            </div>
        </div>
    );
  }
  
  export default Header;
  