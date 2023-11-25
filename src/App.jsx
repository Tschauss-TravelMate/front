import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introroot from './components/intro/Introroot';
import Mainpageroot from './components/main_page/Mainpageroot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Introroot />} />
        <Route path='/Mainpage' element={<Mainpageroot />} />
      </Routes>
    </Router>
  );
}

export default App;
