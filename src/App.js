import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Purchase from './components/Purchase.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/purchase' element={<Purchase />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
