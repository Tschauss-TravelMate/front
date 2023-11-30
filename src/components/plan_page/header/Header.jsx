﻿import styles from "./Header.module.css"
import Bracket from "./image/bracket.svg?component";

function Header() {
    return (
        <div>
            <div className={styles.header_location}>
                <div className={styles.plan_font}>
                    <div>
                        <Bracket />{' '}
                        일정
                    </div>
                </div>
                <div>OOO님</div>
            </div>
            <div className={styles.aa}>
                <div className={styles.bb}>내 여행</div>
                <div className={styles.bb}>지난 여행</div>
            </div>
        </div>
    );
  }
  
  export default Header;
  