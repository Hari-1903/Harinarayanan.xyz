import './App.css';
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import LandingPage from './pages/landing';
import Home from './pages/home';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Certification from './pages/certification';

function App() {
  const location= useLocation();
  
  return (
    <AnimatePresence mode="wait">
    <Routes key={location.pathname} location={location}>
      <Route index element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/certifications' element={<Certification/>}/>
    </Routes>
    </AnimatePresence>
  );
}

export default App;
