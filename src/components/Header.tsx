import { Link } from "react-router-dom";
export function Header() {
  return (
    <section className="bg-transparent flex justify-between items-center p-4">
      
 <img src="/imgs/PPLogo.png" alt="Logo" className="w-44 h-36" />

     <div className="flex space-x-12 text-2xl flex-1 justify-end pr-12">
        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
    
      </div>
    </section>
  );
}
