import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Operation from './components/Operation';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <Services/>
        <Operation/>
      </main>
    </>
  )
}

export default App;