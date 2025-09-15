import Spline from '@splinetool/react-spline';
import { Download, Github, Linkedin, Twitter } from 'lucide-react';

function Hero() {
  return (
    <main id='home' className="flex lg:mt-10 mt-7 flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      
      {/* Text Section */}
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="lg:pl-30 pl-10 pr-10 mt-3">
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
          Hi, I'm Rishabh  
          <br />
          Full Stack Developer
        </h1>
        <h2>
          Crafting the web with full-stack development and AI. Building smart, responsive web apps with automation and machine learning.
        </h2>
        <br />
        <div className='flex items-center gap-6'>
          <button className='bg-amber-800 border border-black rounded-2xl p-3 flex gap-3 shadow-amber-600 shadow-2xl hover:bg-amber-700'>
            Download Resume <Download />
          </button>
          <a href="https://github.com/Rishabhpal07"
          target="_blank"
          rel="noopener noreferrer"
          >
          <Github className='border-white border rounded-full p-1'/>
          </a>
          <a href="https://x.com/RishabhPal34339"
          target="_blank"
          rel="noopener noreferrer">
          <Twitter className='border-white border rounded-full p-1'/>
          </a>
            <a href="https://www.linkedin.com/in/rishabh-pal-5028b4278/"
            target="_blank"
            rel="noopener noreferrer">
               <Linkedin className='border-white border rounded-full p-1'/>
            </a>

        </div>
      </div>

      {/* Spline Model Section */}
      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0"
     data-aos-duration="3000" className="w-full lg:w-auto">
        <Spline
          className='lg:top-0 top-[-20px] h-full'
          scene="https://prod.spline.design/uXrhbaBi5Ercq9Xy/scene.splinecode"
        />
      </div>

    </main>
  )
}

export default Hero;
