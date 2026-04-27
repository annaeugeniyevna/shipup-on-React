import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Operation from './components/Operation';
import Warehouse from './components/Warehouse';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Services/>
        <Operation/>
        <Warehouse/>
      </main>
      <Footer/>
    </>
  )
}

export default App;