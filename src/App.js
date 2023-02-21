import './App.css';
import './style/Navbar.css';
import './style/Home.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
