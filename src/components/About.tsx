import Spline from '@splinetool/react-spline';

const AboutMe = () => {
  return (
    <>
     <div data-aos="fade-down"
        data-aos-easing="linear"
       data-aos-duration="1500" className="text-5xl lg:pt-10 pt-30 text-center text-white">
        About Me
      </div>
      <section id='about'  className="flex flex-col lg:flex-row items-center m-4 justify-center min-h-[80vh] bg-gradient-to-br from-gray-900  to-black p-7 text-white">
     
        <div className="flex justify-center items-center w-full pr-2 lg:w-1/2 h-[500px] overflow-hidden">
          <Spline
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          data-aos-duration="3000"
            scene="https://prod.spline.design/OdCPuxsDTC5VqL1t/scene.splinecode"
            className="w-full h-full"
          />
        </div>

        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
        className="max-w-xl text-center lg:text-left mt-8 ml-3 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">I'm Rishabh</h1>
          <p className="text-lg mb-6">
            A 3rd-year Software Engineering student and part-time freelancer.
            I craft web applications integrated with AI and build intelligent AI agents.
          </p>
          <div className="flex flex-col gap-4 m-4">
            <a  href="https://github.com/rishabhpal07?tab=repositories"
          target="_blank"
          rel="noopener noreferrer" className="bg-amber-800 hover:bg-amber-700 p-3 text-center rounded-md text-white">
              Web Application Development
            </a>
            <a href='https://rishabh-pal.app.n8n.cloud/webhook/44e3fcc2-c2e7-49a5-8dfa-b0e563b0c321/chat'
            target="_blank"
          rel="noopener noreferrer"
             className="bg-amber-800 hover:bg-amber-700 text-center p-3 rounded-md text-white">
              AI Agents Development
            </a>
            <a href='https://leetcode.com/u/rishabh_21390/'
            target="_blank"
          rel="noopener noreferrer"
            className="bg-amber-800 hover:bg-amber-700 p-3 rounded-md text-center text-white">
              Problem Solving
            </a>
          </div>
        </div>

      </section>  
    </>
  );
};

export default AboutMe;
