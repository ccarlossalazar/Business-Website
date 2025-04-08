import React from 'react'
import {User, Lock, ArrowLeft} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar.jsx'

const Login = () => {
  return (
<>
 {/*<Link to="/"><button className="flex text-white mx-4 py-4"><ArrowLeft />Back to Home </button></Link>*/}
<Navbar />
<div className=" bg-[#385230] h-screen w-screen flex justify-center items-center">
<div className="flex justify-center">
    <div className="flex bg-white rounded-lg justify-center items-center max-w-md w-full shadow-2xl p-8">
    <form className="p-5 items-center justify-center">
        <img src="/src/assets/wc.png" className="w-50 h-35 mb-3 ml-5"/>
        <h1 className="text-center">Login</h1>
        <div className='inputs p-4'>
        <div className="input flex mb-4 p-4 bg-gray-400 text-black rounded-2xl">
        <User />
        <input type='text' className="placeholder-black" placeholder="Username" required/>
        </div>
        <div className="input flex mb-4 p-4 bg-gray-400 text-black rounded-2xl">
        <Lock />
        <input type='text' className="placeholder-black" placeholder="Password" required/>
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