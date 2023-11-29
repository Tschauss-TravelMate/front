import styles from "./Bottomnav.module.css";
import { MdPeopleOutline } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdOutlinePermIdentity } from "react-icons/md";
import Mainicon from "./image/U.svg?component";
import WhiteMainicon from "./image/white.svg?component";
import { NavLink, useLocation } from "react-router-dom";

function Bottomnav() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const navItems = [
    {
      path: "/post",
      icon: (
        <div
          className={`${
            location.pathname === "/post" ? styles.out_circle : ""
          }`}
        >
          <MdPeopleOutline
            className={`${
              location.pathname === "/post" ? styles.click_emt : styles.emt1
            }`}
          />
          {location.pathname === "/post" && (
            <div className={styles.in_circle}></div>
          )}
        </div>
      ),
      label: location.pathname === "/post" ? "" : "게시글",
      style: location.pathname === "/post" ? "" : styles.emt_font,
    },
    {
      path: "/save",
      icon: (
        <div
          className={`${
            location.pathname === "/save" ? styles.out_circle : ""
          }`}
        >
          <MdBookmarkBorder
            className={`${
              location.pathname === "/save" ? styles.click_emt : styles.emt2
            }`}
          />
          {location.pathname === "/save" && (
            <div className={styles.in_circle}></div>
          )}
        </div>
      ),
      label: location.pathname === "/save" ? "" : "저장",
      style: location.pathname === "/save" ? "" : styles.emt_font,
    },
    {
      path: "/mainpage",
      icon: (
        <div
          className={`${
            location.pathname === "/mainpage" ? styles.out_circle : ""
          }`}
        >
          {location.pathname === "/mainpage" ? (
            <>
              <WhiteMainicon className={`${styles.main_button}`} />
              <div className={styles.in_circle}></div>
            </>
          ) : (
            <Mainicon className={`${styles.main_emt}`} />
          )}
        </div>
      ),
      label: location.pathname === "/mainpage" ? "" : "홈",
      style: location.pathname === "/mainpage" ? "" : styles.emt_font,
    },
    {
      path: "/plan",
      icon: (
        <div
          className={`${
            location.pathname === "/plan" ? styles.out_circle : ""
          }`}
        >
          <MdCalendarToday
            className={`${
              location.pathname === "/plan" ? styles.click_emt : styles.emt3
            }`}
          />
          {location.pathname === "/plan" && (
            <div className={styles.in_circle}></div>
          )}
        </div>
      ),
      label: location.pathname === "/plan" ? "" : "일정",
      style: location.pathname === "/plan" ? "" : styles.emt_font,
    },
    {
      path: "/profile",
      icon: (
        <div
          className={`${
            location.pathname === "/profile" ? styles.out_circle : ""
          }`}
        >
          <MdOutlinePermIdentity
            className={`${
              location.pathname === "/profile" ? styles.click_emt : styles.emt3
            }`}
          />
          {location.pathname === "/profile" && (
            <div className={styles.in_circle}></div>
          )}
        </div>
      ),
      label: location.pathname === "/profile" ? "" : "프로필",
      style: location.pathname === "/profile" ? "" : styles.emt_font,
    },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, index) => (
        <div key={index}>
          <NavLink to={item.path} className={styles.nav_link}>
            <div>{item.icon}</div>
            <div className={`${item.style} ${styles.additionalStyle}`}>
              {item.label}
            </div>
          </NavLink>
        </div>
      ))}
    </nav>
  );
}

export default Bottomnav;
