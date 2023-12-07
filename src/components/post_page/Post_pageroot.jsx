import { useState, useEffect } from "react";
import { Back } from "../const/url";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./Post_pageroot.module.css"; 
import Post_pageContent from "./Post_pageContent";
import Header from "./header/Header";
import Plus from "./image/plus.svg?component";

const Post_pageroot = () => { 
  const [posts, setPosts] = useState([]);

  useEffect(() => { // html을 렌더링하기 전에 실행되는 함수
    axios
      .get(`${Back}/api/Post_get`) // axios를 통해 백엔드 서버에 요청
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

return (
  <div>
    <Header />
    
    <NavLink to={'/post/create'} state={posts}>
      <button className={styles.create_button}>
        <div className={styles.button_location}>
          <div className={styles.plus_location}>
            <Plus /> 
          </div>
          <div></div>
          <div>
            <div className={styles.create_font1}>게시글 쓰기.</div>
            <div className={styles.create_font2}>여행 경험을 공유해 보세요.</div>
          </div>
        </div>
      </button>
    </NavLink>
    <div className={styles.container}>
      <Post_pageContent posts={posts} />  
    </div>
  </div>
  );
};

export default Post_pageroot;