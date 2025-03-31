import React from 'react'
import './login.css'
import {User, Lock, ArrowLeft} from 'lucide-react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
<div className="login-page">
<Link to="/"><button className="back flex text-white mx-4 py-4"><ArrowLeft />Back to Home </button></Link>
<div className="login2">
    <div className="flex flex-col bg-gray-700 rounded-lg justify-center items-center  max-w-md w-full shadow-2xl p-4">
    <form className="p-5">
        <img src="/src/assets/wc.png" className="w-40 h-32 mb-6 justify-center"/>
        <h1 className="text-center">Login</h1>
        <div className='inputs p-4'>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <User />
        <input type='text' className="placeholder-black" placeholder="Username" required/>
        </div>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl">
        <Lock />
        <input type='text' className="placeholder-black" placeholder="Password" required/>
        </div>
        </div>
        <div className='remember pb-10'>
            <label><input type='checkbox'/>Remember Me</label>
        </div>
        <div className="bg-blue-500 mx-auto rounded-2xl">
        <button type='submit' className="text-center w-full p-2">Login</button>
        </div>
    </form>
    </div>
    </div>
</div>
  );
};

export default Login;