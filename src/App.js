
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import GraphicForm from './components/GraphicForm';
Aos.init()
function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/fill-form' element={<GraphicForm />} /> 
    </Routes>
  <Footer />
  
  </>
  )
}

export default App;
