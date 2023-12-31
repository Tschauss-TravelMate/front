import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introroot from "./components/intro/Introroot";
import Bottomnav from "./components/bottomnav/Bottomnav";
import Mainpageroot from "./components/main_page/Mainpageroot";
import Post_pageroot from "./components/post_page/Post_pageroot";
import Save_pageroot from "./components/save_page/Save_pageroot";
import Plan_pageroot from "./components/plan_page/Plan_pageroot";
import Profile_pageroot from "./components/profile_page/Profile_pageroot";
import Plan_pageCreate from "./components/plan_page/plan_pageCreate/Plan_pageCreate";
import Plan_pageView from "./components/plan_page/plan_pageView/plan_pageView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introroot />} />
        <Route path="/mainpage" element={<Mainpageroot />} />
        <Route path="/post" element={<Post_pageroot />} />
        <Route path="/save" element={<Save_pageroot />} />
        <Route path="/plan" element={<Plan_pageroot />} />
        <Route path="/planview/:planner_index" Component={Plan_pageView} />
        <Route path="/plan/create" element={<Plan_pageCreate />} />
        <Route path="/profile" element={<Profile_pageroot />} />
      </Routes>
      <Bottomnav />
    </Router>
  );
}

export default App;
