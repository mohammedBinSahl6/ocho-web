
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
import {  Route,  Routes } from 'react-router-dom';
import About from './components/About';
import VDesign from './components/services component/VDesign';
import Dashboard from './components/dashboard/Dashboard';
import GraphicFormAr from './components/GraphicFormAr';
import GForms from './components/GForms';
import GraphicFormEn from './components/GraphicFormEn';
Aos.init()
function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/about' element={<About />} />
      <Route path='/VDesign' element={<VDesign />} />
      <Route path='/dash' element={<Dashboard />} />
     
      <Route path='/D-forms' element={<GForms />} >
        <Route path='ar' element={<GraphicFormAr/>} />
        <Route path='en' element={<GraphicFormEn/>} />
      </Route>
      
    </Routes>
  <Footer />
  
  
  </>
  )
}

export default App;
