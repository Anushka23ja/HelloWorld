// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThingsToRead from './ThingsToRead';
import AccessibilityInfo from './AccessibilityInfo';
import Navbar from './Navbar';
import Favorites from './Justme';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-read" element={<ThingsToRead />} />
          <Route path="/accessibility-info" element={<AccessibilityInfo />} />
          <Route path="/justme" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
