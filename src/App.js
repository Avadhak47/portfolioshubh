import './App.css';
import './style/Navbar.css';
import './style/Home.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import Education from './components/Education';
import Skill from './components/Skill';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/skills' element={<Skill />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path='/contactme' element={<Contact />} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/educationqualifications' element={<Education />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
