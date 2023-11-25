import styles from "./Mainbanner.module.css";
import Mainpageroot from "../main_page/Mainpageroot";
import { Routes, Route, NavLink } from "react-router-dom";

function Mainbanner() {
  return (
    <>
      <div className={styles.main_image}></div>
      <div className={styles.sentence}>여행의 즐거움</div>
      <div>
        <NavLink to='/Mainpage'>
          <button className={styles.start_button}>츄스 선택하기</button>
        </NavLink>
        <Routes>
          <Route path='/Mainpage' element={<Mainpageroot />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Mainbanner;
