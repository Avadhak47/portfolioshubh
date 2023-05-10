import './App.css';
import './components/Pages/Navbar/Navbar.css';
import './components/Pages/Home/Home.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Pages/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Pages/Skill_Service/Services';
import Education from './components/Education';
import Skill from './components/Pages/Skill_Service/Skill';
import ProjectDetail from './components/ProjectDetail';

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
        <Route exact path='/projectdetails' element={<ProjectDetail/>}> </Route>
        <Route exact path='/educationqualifications' element={<Education />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
