import './App.css';
import Advertisement from './components/Advertisement';
import AstrologerSection from './components/AstrologerSection';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Review from './components/Review';
import Sun from './components/Sun';
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <>
      <Navbar/>      
      <Carousel/>
      <VideoCarousel/>
      <Advertisement/>
      <AstrologerSection/>
      <Sun/>
      <Review/>
      <Footer/>
    </>
  );
}

export default App;
