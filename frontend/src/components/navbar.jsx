import Logo from '/src/assets/wc.png';
import { SquareMenu, X } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [menuDrawerUp, setMenuDrawerUp] = useState(false);

  const toggleMenuDrawer = () => {
    setMenuDrawerUp(!menuDrawerUp);
  }

  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth)
      console.log('User logged out successfully!')
    } catch (error) {
      console.error('Error Logging Out:', error)
    }
    window.location.reload()
  }

  return (
    <nav className="sticky top-0 z-50 py-4 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container px-4 mx-auto relative text-sm">
        {/* Flex container for the logo and menu */}
        <div className="flex justify-between items-center w-full">
          
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <button>
                <img className="h-25 w-40" src={Logo} alt="logo" />
              </button>
            </Link>
          </div>

          {/* Menu Links Section */}
          <div className="flex-grow flex justify-center">
            <ul className="hidden lg:flex space-x-8 text-3xl text-green-800 font-semibold">
              <li><a href="#residential" className="hover:text-green-600">Residential</a></li>
              <li><a href="#commercial" className="hover:text-green-600">Commercial</a></li>
              <li><a href="#detailed" className="hover:text-green-600">Detailed Cleanings</a></li>
              <li><a href="#about" className="hover:text-green-600">About</a></li>
              <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
              {user && (
                <li><Link to="/admin/dashboard" className="hover:text-green-600">Admin</Link></li>
              )}
            </ul>
          </div>

          {/* Login / Logout Button */}
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {!user ? (
              <Link to="/login">
                <button className="bg-gradient-to-r from-green-600 to-green-800 py-2 px-3 rounded-lg text-xl text-white hover:bg-gradient-to-br">
                  Login
                </button>
              </Link>
            ) : (
              <Link to="/">
                <button onClick={handleLogout} className="bg-transparent py-2 px-3 rounded-md text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500">
                  Logout
                </button>
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden md:flex flex-col justify-end hover:text-green-700">
            <button onClick={toggleMenuDrawer}>
              {menuDrawerUp ? <X /> : <SquareMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {menuDrawerUp && (
          <div className="fixed right-0 z-20 bg-white w-full p-5 flex flex-col justify-center items-center lg:hidden">
            <ul className="text-lg font-semibold text-green-800 space-y-4 ">
              <li className='hover:text-green-600'><a href="#residential">Residential</a></li>
              <li className='hover:text-green-600'><a href="#commercial">Commercial</a></li>
              <li className='hover:text-green-600'><a href="#detailed">Detailed Cleanings</a></li>
              <li className='hover:text-green-600'><a href="#about">About</a></li>
              <li className='hover:text-green-600'><a href="#contact">Contact</a></li>
              {user && (
                <li><Link to="/admin/dashboard" className="hover:text-green-600">Admin</Link></li>
              )}
            </ul>
            {!user ? (
              <div className="space-x-6 flex py-2 pt-5">
                <Link to="/login">
                  <button className="bg-gradient-to-r from-green-500 to-green-700 py-2 px-3 rounded-md text-white hover:bg-gradient-to-br ">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <div className="space-x-6 flex py-2 pt-5">
                <Link to="/">
                  <button onClick={handleLogout} className="bg-transparent py-2 px-3 rounded-md text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500">
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
