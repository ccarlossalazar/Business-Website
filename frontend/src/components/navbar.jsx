
import Logo from '/src/assets/wc.png'
import { SquareMenu, X } from "lucide-react"
import { useState } from "react"
import {Link } from 'react-router-dom'

const Navbar = () => {
const [menuDrawerUp, setMenuDrawerUp] = useState(false)
    
const toggleMenuDrawer = () => {
        setMenuDrawerUp(!menuDrawerUp)
    }

    return (
        <nav className="sticky top-0 z-50 py-8 backdrop-blur-lg border-b 
        border-neutral-700/80 bg-opacity-90">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                    <Link to='/'><button><img className="h-12 w-12 mr-2" src={Logo} alt="logo"/></button></Link>
                    <span className="text-2xl tracking-tight">West Coast Janitorial Services</span>
                    </div>
                    <div className="items-center">
                        <ul className="hidden lg:flex ml-14 space-x-12 text-xl">
                        <li>
                        <a href="#">About</a> 
                        </li>
                        <li>
                        <a>Features</a>
                        </li>
                        <li>
                        <a>Check it out</a>
                        </li>
                        </ul>
                        </div>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <Link to='/login'>
                    <button href="#" className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-lg text-xl">Login</button>
                    </Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleMenuDrawer}>
                        {menuDrawerUp ? <X /> : <SquareMenu />}
                    </button>
                    </div>
                    </div>
                    {menuDrawerUp && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="py-4">
                        <li>
                        <a href="#">About</a> 
                        </li>
                        <li>
                        <a>Features</a>
                        </li>
                        <li>
                        <a>Check it out</a>
                        </li>
                        </ul>
                        <div className="space-x-6 flex py-2">
                        <Link to='/login'>
                        <button className="bg-gradient-to-r from-blue-500 to-blue-700 py-2 px-3 rounded-md">Login</button>
                        </Link>
                        </div>
                    </div>)}
                </div>
        </nav>
    )
}

export default Navbar