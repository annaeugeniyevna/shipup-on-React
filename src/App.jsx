import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <div className="max-w-[1440px] mx-auto px-[5%]">
      <Navbar/>
      <main>
        <Hero/>
      </main>
    </div>
    </>
  )
}

export default App;