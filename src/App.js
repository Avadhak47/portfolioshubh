import './App.css';
import './style/Navbar.css';
import './style/Home.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/contactme' element={<Contact />} />
      </Routes>
      
    </Router>
  );
}

export default App;
