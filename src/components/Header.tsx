import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/pedro/PPLogo.png";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <section className="relative bg-transparent flex justify-between items-center pr-6 border-b-2 border-gray-400 mb-2">
       <img src={logo} alt="Logo" className=" mr-2w-40 h-28 md:w-44 md:h-36" />

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center justify-between">
 <nav className="hidden md:flex space-x-12 text-2xl flex-1 justify-start  pr-12">
        <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link to="/projects" className="text-white hover:text-gray-300">
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </nav>

      <div className="flex items-center justify-end">
        {menuOpen && (
          <nav className=" md:hidden mt-4 flex justify-center items-center gap-4 pb-4 text-lg spacex-3 ">
           <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/" className="text-white hover:text-gray-300">
          Home
        </Link>
           <Link to="/about" className="text-white hover:text-gray-300">
          About
        </Link>
           </div>
            <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/projects" className="text-white hover:text-gray-300">
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
        </div>
          </nav>
        )}
      
      
      <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-50"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={45} /> : <Menu size={45} />}
          </button>
      </div>
      </div>


       
    </section>
  );
}
