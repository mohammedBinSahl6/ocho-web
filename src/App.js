
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
import { Route,  Routes } from 'react-router-dom';
import GraphicForm from './components/GraphicForm';
import About from './components/About';
import VDesign from './components/services component/VDesign';
import Dashboard from './components/dashboard/Dashboard';
Aos.init()
function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/fill-form' element={<GraphicForm />} />
      <Route path='/about' element={<About />} />
      <Route path='/VDesign' element={<VDesign />} />
      <Route path='/dash' element={<Dashboard />} />
    </Routes>
  <Footer />
  
  
  </>
  )
}

export default App;
