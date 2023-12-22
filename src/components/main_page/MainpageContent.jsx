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
import Arrow_icon from "./image/arrow_icon.svg?component";

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
      <div className={styles.text2}>
        더보기
        <div className={styles.Arrow_icon}>
          <Arrow_icon width="10" height="10" />
        </div>
      </div>

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
      <div className={styles.recomend_best10_img}>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://i.namu.wiki/i/vzQIsovYmymvt84FWS9hhAS3Qva_O31fczg3ErMrSQrSgnJ9h3oQDf3kVo5M6aD1Q05-etvQRlqc3dnurUczXw.webp"></img>
          <div className={styles.recomend_best10_img_num}>1</div>
          <div className={styles.recomend_best10_img_text}>서울</div>
        </div>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://daejeontour.co.kr/upload/cts/20230407143748845.jpg"></img>
          <div className={styles.recomend_best10_img_num}>2</div>
          <div className={styles.recomend_best10_img_text}>대전</div>
        </div>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://visitdaegu.or.kr/theme/dgfca/img/nimg01.jpg"></img>
          <div className={styles.recomend_best10_img_num}>3</div>
          <div className={styles.recomend_best10_img_text}>대구</div>
        </div>
      </div>
      <div className={styles.recomend_best10_img2}>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/1k75/image/tVbqR2D3N0nmS2iw98IErMPkOYw.jpeg"></img>
          <div className={styles.recomend_best10_img_num}>4</div>
          <div className={styles.recomend_best10_img_text}>부산</div>
        </div>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://a.cdn-hotels.com/gdcs/production10/d897/6d22ee20-0f8c-45c7-8c65-9ae0043263d7.jpg?impolicy=fcrop&w=800&h=533&q=medium"></img>
          <div className={styles.recomend_best10_img_num}>5</div>
          <div className={styles.recomend_best10_img_text}>울산</div>
        </div>
        <div className={styles.recomend_best10_img_container}>
          <img src="https://www.ikbc.co.kr/data/kbc/image/2022/09/30/kbc202209300103.png"></img>
          <div className={styles.recomend_best10_img_num}>6</div>
          <div className={styles.recomend_best10_img_text}>광주</div>
        </div>
      </div>
    </div>
  );
}

export default MainpageContent;
