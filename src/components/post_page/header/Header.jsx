import styles from "./Header.module.css"
import { MdSend } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";

function Header() {
    return (
        <div>
            <div className={styles.header_location}>
                <div className={styles.post_font}>
                    <div>
                        커뮤니티
                    </div>
                </div>
                <div className={styles.emt_position}>
                    <div className={styles.emt}><MdSend /></div>
                    <div className={styles.emt}><MdNotificationsNone /></div>
                    <div className={styles.emt}><MdOutlineSearch /></div>
                </div>
            </div>
            <div className={styles.font_position}>
                <div className={styles.header_font}>전체</div>
                <div className={styles.header_font}>인기글</div>
                <div className={styles.header_font}>질문</div>
                <div className={styles.header_font}>맛집</div>
                <div className={styles.header_font}>동행찾기</div>
            </div>
        </div>
    );
  }
  
  export default Header;
  