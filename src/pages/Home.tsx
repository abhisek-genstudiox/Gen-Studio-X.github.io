import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import HeroPic from '../components/home/HeroPic';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <HeroPic />
    </div>
  )
}

export default Home 