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

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Gallery />
      <FAQ />

      <Footer />
    </div>
  );
}

export default App;