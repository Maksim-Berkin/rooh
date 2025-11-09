import { Routes, Route } from 'react-router-dom';
// @ts-ignore
import Header from './components/Header';
// @ts-ignore: allow importing JS module without types
import Footer from './components/Footer';
// @ts-ignore: allow importing JS module without types
import FAQ from './components/FAQ';
// @ts-ignore: allow importing JS module without types
import Gallery from './components/Gallery';
// @ts-ignore: allow importing JS module without types
import Hero from './components/Hero';
// @ts-ignore: allow importing JS module without types
import Advantages from './components/Advantages';
// @ts-ignore: allow importing JS module without types
import HowItWorks from './components/HowItWork';
// @ts-ignore: allow importing JS module without types
import Pricing from './components/Pricing';
// @ts-ignore: allow importing JS module without types
import Terms from './components/Terms';

// Головна сторінка
function HomePage() {
  return (
    <>
      <Hero />
      <Advantages />
      <HowItWorks />
      <Pricing />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;