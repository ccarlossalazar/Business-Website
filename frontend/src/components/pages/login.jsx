import React from 'react'
import {User, Lock, ArrowLeft} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar.jsx'

const Login = () => {
  return (
<>
<Navbar />
<div className=" bg-[#385230] h-screen w-screen flex justify-center items-center">
<div className=" bg-white rounded-lg justify-center items-center max-w-md w-full shadow-3xl p-8">
<Link to="/"><button className="flex text-green-800 font-semibold text-start"><ArrowLeft />Back to Home </button></Link>
    <div className="w-full flex justify-center items-center">
    <form className="p-5 items-center justify-center">
        <img src="/src/assets/wc.png" className="w-60 h-40 mb-3"/>
        <h1 className="text-center font-semibold text-lg">Login</h1>
        <div className='p-4 grid grid-cols-1 gap-4'>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <User className='text-gray-400'/>
        <input type='text' className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Username" required/>
        </div>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <Lock className='text-gray-400' />
        <input type='text' className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Password" required/>
        </div>
        </div>
        <div className='remember pb-10'>
            <label><input id="default-checkbox" type='checkbox'/>Remember Me</label>
        </div>
        <div className="bg-green-800 mx-auto rounded-2xl">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold">Login</button>
        </div>
    </form>
    </div>
    </div>
</div>
</>
  );
};

export default Login;