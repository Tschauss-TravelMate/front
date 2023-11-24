import styles from "./Mainbanner.module.css";

function Mainbanner() {
  return (
    <>
      <div className={styles.main_image}></div>
      <div className={styles.sentence}>여행의 즐거움</div>
      <div>
        <button className={styles.start_button}>츄스 시작하기</button>
      </div>
    </>
  );
}

export default Mainbanner;
