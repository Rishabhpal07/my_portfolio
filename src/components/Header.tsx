import { Link } from 'react-scroll';
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [slider, setSlider] = useState(false);

  const handleToggle = () => setSlider(prev => !prev);

  const navLinks = [
    { label: 'Home', to: 'home' },
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' }
  ];

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur z-50">
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">Rishabh</h1>
      
      <nav className="hidden md:flex items-center gap-12">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            smooth={true}
            duration={700}
            offset={-80}  // Offset so content doesn’t hide under fixed header
            className="text-base tracking-wider text-white hover:text-gray-300 cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button className="md:hidden text-3xl p-2 text-white z-50" onClick={handleToggle}>
        {slider ? <X /> : <Menu />}
      </button>

      {slider && (
        <div className="fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur">
          <nav className="flex flex-col gap-6 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                className="text-base tracking-wider text-white hover:text-gray-300 cursor-pointer"
                onClick={() => setSlider(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
