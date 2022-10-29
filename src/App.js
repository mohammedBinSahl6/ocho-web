
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from './components/Footer';
Aos.init()
function App() {
  return (
  <>
  <Navbar />
  <HomePage />
  <Footer />
  
  </>
  )
}

export default App;
