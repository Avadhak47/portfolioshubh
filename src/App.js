import './App.css';
import './style.css/Navbar.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={""} />
      </Routes>
      <h1>Shubham Tanwar</h1>
    </Router>
  );
}

export default App;
