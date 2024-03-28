import './App.css';
import Navbar from './Components/Nav/Nav';
import Carousel from './Components/Carousel/Carousel-slick';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <About />
    </div>
  );
}

export default App;
