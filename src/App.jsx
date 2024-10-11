import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
