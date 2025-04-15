import Logo from '/src/assets/wc.png';
import { SquareMenu, X } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuDrawerUp, setMenuDrawerUp] = useState(false);

const toggleMenuDrawer = () => {
    setMenuDrawerUp(!menuDrawerUp);
};



  return (
    <nav className="sticky top-0 z-50 py-4 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <button>
                <img className="h-25 w-40" src={Logo} alt="logo" />
              </button>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="items-center text-green-800 font-semibold">
            <ul className="hidden lg:flex ml-14 space-x-12 text-xl">
              <li><a href="#residential" className="hover:text-green-600">Residential</a></li>
              <li><a href="#commercial" className="hover:text-green-600">Commercial</a></li>
              <li><a href="#detailed" className="hover:text-green-600">Detailed Cleanings</a></li>
              <li><a href="#about" className="hover:text-green-600">About</a></li>
              <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
              <li><Link to="/admin-portal" className="hover:text-green-600">Admin</Link></li>
            </ul>
          </div>

          {/* Login button (desktop) */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link to="/login">
              <button className="bg-gradient-to-r from-green-600 to-green-800 py-2 px-3 rounded-lg text-xl text-white">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleMenuDrawer}>
              {menuDrawerUp ? <X /> : <SquareMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuDrawerUp && (
          <div className="fixed right-0 z-20 bg-white w-full p-5 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-lg font-semibold text-green-800 space-y-4">
              <li><a href="#residential">Residential</a></li>
              <li><a href="#commercial">Commercial</a></li>
              <li><a href="#detailed">Detailed Cleanings</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to="/admin-portal" className="hover:text-green-600">Admin</Link></li>
            </ul>
            <div className="space-x-6 flex py-2 pt-5">
              <Link to="/login">
                <button className="bg-gradient-to-r from-green-600 to-green-800 py-2 px-3 rounded-md text-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
