import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introroot from './components/intro/Introroot';
import Mainpageroot from './components/main_page/Mainpageroot';
import Post_pageroot from './components/post_page/Post_pageroot';
import Save_pageroot from './components/save_page/Save_pageroot';
import Plan_pageroot from './components/plan_page/Plan_pageroot';
import Profile_pageroot from './components/profile_page/Profile_pageroot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Introroot />} />
        <Route path='/Mainpage' element={<Mainpageroot />} />
        <Route path='/Post' element={<Post_pageroot />} />
        <Route path='/Save' element={<Save_pageroot />} />
        <Route path='/Plan' element={<Plan_pageroot />} />
        <Route path='/Profile' element={<Profile_pageroot />} />
      </Routes>
    </Router>
  );
}

export default App;
