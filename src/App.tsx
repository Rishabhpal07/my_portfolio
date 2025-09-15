import { useEffect } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {Element} from 'react-scroll'


function App() {

  useEffect (() => {
    AOS. init({
    duration: 1500,
     once: true,
    })
    })

  return (
    <main>
      <img className='absolute top-0 right-0 opacity-60 -z-10' src="/gradient.png" alt="" />
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_980px_20px_#e99b63] -rotate-[30deg] -z-10'>
      </div>
       <Header/>
       <Element name="home">
       <Hero/>
       </Element>
       <Element name='about'>
       <About/>
        </Element>
        <Element name='skill'>
        <Skills/>
        </Element>
        <Element name="project">
        <Projects/>
        </Element>
         <Element name="contact">
         <Contact/>
         </Element>
    </main>

  )
}

export default App
