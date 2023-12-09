import styles from "./Post_pageContent.module.css";
import PropTypes from "prop-types";

const Post_pageContent = ({ posts }) => {

  function formattingDate(curDate) {
    const currentDate = new Date().getTime();
    const postDate = new Date(curDate).getTime();
    const timeDifference = currentDate - postDate; // �и���

    console.log('currentDate', currentDate);
    console.log('postDate', postDate);

    const hoursDifference = Math.ceil(timeDifference / (1000 * 60 * 60));
    console.log('hoursDifference', hoursDifference);

    return hoursDifference;
  }

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.post_id}>
          <div className={styles.box}>
            <img className={styles.img} src={post.img} />
            <div className={styles.title}><b>{post.title}</b></div>
            <div className={styles.content}>{post.content}</div>
            <div className={styles.hour}> {formattingDate(post.updated_at)} hours ago </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

//post ���� PropTypes�� �߰�
//�̴� post�� �迭�̾�� �ϸ�, ������ ��Ҵ� Ư���� ������ ���߾�� ���� ����
Post_pageContent.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      post_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      good: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired, // You may need to adjust the type based on your actual data
    //   create_at: PropTypes.date.isRequired,
    //   update_at: PropTypes.date.isRequired,
    })
  ),
};

export default Post_pageContent;