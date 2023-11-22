import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/NavBar';
import Slider from './Carousel/Carousel';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
