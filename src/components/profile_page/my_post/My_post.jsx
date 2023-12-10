import styles from "./My_post.module.css";
import Minisin from "../image/minisin.svg?component";

function My_post({ posts }) {

  function formattingDate(curDate) {
    const currentDate = new Date().getTime();
    const postDate = new Date(curDate).getTime();
    const timeDifference = currentDate - postDate; // 밀리초

    console.log('currentDate', currentDate);
    console.log('postDate', postDate);

    const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));
    console.log('hoursDifference', hoursDifference);

    return hoursDifference;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.post_id} className={styles.line} >
          <div className={styles.box}>
            <div className={styles.profile}>
              <div><Minisin/></div>
              <div className={styles.nick_position}>
                <div className={styles.nickname}>singhun99</div>
                <div className={styles.my_actions}>세계여행 중{' '}</div>
              </div>     
            </div>
            <img className={styles.img} src={post.img} />
            <div className={styles.content}><b>{post.content}</b></div>

            <div className={styles.title_position}>
              <div className={styles.title}>{post.title},</div>
              <div className={styles.hour}> {formattingDate(post.updated_at)} 시간 전 </div>
            </div>
            <div className={styles.good}>
              좋아요 {post.good}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default My_post;