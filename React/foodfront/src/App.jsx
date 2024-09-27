import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import HeroSub from './components/hero-sub/heroSub'
import TestimonialGrid from './components/testimonials/testimonials'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <HeroSub/>
      <TestimonialGrid/>
      <Footer/>
    </>
  )
}

export default App