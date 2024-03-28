import './App.css';
import Navbar from './Components/Nav/Nav';
import Carousel from './Components/Carousel/Carousel-slick';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
