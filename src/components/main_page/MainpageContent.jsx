import styles from "./MainpageContent.module.css";
import PropTypes from "prop-types";
import Calendar_icon from "./image/calendar_icon.svg?component";
import Menu_icon from "./image/menu_icon.svg?component";
import Search_icon from "./image/search_icon.svg?component";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoBedSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa6";
import { FaRegCalendarPlus } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function MainpageContent() {
  return (
    <div className={styles.box}>
      <div className={styles.profile_container}>
        <div className={styles.profile}></div>
        <div className={styles.profile_name}>이준희</div>
        <div className={styles.calendar_icon}>
          <Calendar_icon width="18" height="20" />
        </div>
        <div className={styles.menu_icon}>
          <Menu_icon width="18" height="20" />
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.search_container}>
          <div className={styles.search_icon}>
            <Search_icon width="18" height="20" />
          </div>
          <div className={styles.search_default}>어디로 떠나시나요?</div>
        </div>
        <div className={styles.air_plane_icon}>
          <PiAirplaneTiltFill size="30" />
          <br></br>
          항공권
        </div>
        <div className={styles.bed_icon}>
          <IoBedSharp size="30" />
          <br></br>
          숙소
        </div>
        <div className={styles.flag_icon}>
          <FaFlag size="30" />
          <br></br>
          투어·티켓
        </div>
        <div className={styles.calendar2_icon}>
          <FaRegCalendarPlus size="30" />
          <br></br>
          일정 만들기
        </div>
      </div>
      <div className={styles.recomend}>
        <div className={styles.recomend_text}>
          여름인기 여행지<br></br>제주도 한번에 보기
        </div>
        <div className={styles.recomend_text2}>제주도 명소 총정리</div>
        <div className={styles.recomend_readMore}>
          <div className={styles.readMore_text}>자세히 보기</div>
          <div className={styles.readMore_icon}>
            <IoIosArrowForward size="10" />
          </div>
        </div>
        <img src="https://img.hankyung.com/photo/202310/ZN.34141478.1.jpg"></img>
      </div>
      <div className={styles.text1}>준비중인 여행자들의 플래너</div>
      <div className={styles.text2}>더보기</div>
      <div className={styles.planner_img}>
        <div className={styles.planner_img_container}>
          <img src="https://www.visitbusan.net/uploadImgs/files/cntnts/20200102184135058_wufrotr"></img>
          <div className={styles.planner_img_container_text}>
            2023년 12월 출발
          </div>
        </div>
        <div className={styles.planner_img_container}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg/500px-%EA%B4%91%ED%99%94%EB%AC%B8_Gwanghwamun_%E5%85%89%E5%8C%96%E9%96%80_-_panoramio.jpg"></img>
          <div className={styles.planner_img_container_text}>
            2024년 1월 출발
          </div>
        </div>
        <div className={styles.planner_img_container}>
          <img src="https://i.ytimg.com/vi/4jZLUo82yaY/maxresdefault.jpg"></img>
          <div className={styles.planner_img_container_text}>
            2024년 8월 출발
          </div>
        </div>
      </div>
      <div className={styles.text3}>
        인기 급상승 <br></br>국내여행지 Best10
      </div>
    </div>
  );
}

export default MainpageContent;
