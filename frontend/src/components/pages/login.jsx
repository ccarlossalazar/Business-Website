import {React} from 'react'
import {User, Lock, ArrowLeft, Eye, EyeOff} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [email, setEmail] = useState(``)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [visible, setVisibility] = useState(false)
  const navigate = useNavigate()

const handleLogin = async (e) => {
  e.preventDefault()
  setError(``)
  try {
    await signInWithEmailAndPassword(auth, email, password)
    navigate('/admin/dashboard')
  } catch (err) {
    setError("Invalid email or password", err)
    }
  }

  const toggleVisibility = () => {
    setVisibility(!visible)
  }

  return (
<>
<div className=" bg-[#385230] h-screen w-screen flex justify-center items-center">
<div className=" bg-white rounded-lg justify-center items-center max-w-md w-full shadow-3xl p-8">
<Link to="/"><button className="flex text-green-800 font-semibold text-start hover:text-green-600"><ArrowLeft />Back to Home </button></Link>
    <div className="w-full flex justify-center items-center">
    <form onSubmit={handleLogin} className="p-5 items-center justify-center">
        <img src="/src/assets/wc.png" className="w-60 h-40 mb-3"/>
        <h1 className="text-center font-semibold text-lg">Login</h1>
        {error && (
          <div className="bg-white rounded-xl p-2 mt-2 text-center text-red-600">
          <span>{error}
          </span>
          </div>)}
        <div className='p-4 grid grid-cols-1 gap-4'>
        <div className="input flex p-4 bg-gray-300 text-black rounded-2xl transition delay-50 duration-200 ease-in-out focus-within:-translate-y-1 focus-within:scale-100 focus-within:ring-1 focus-within: ring-green-700">
        <User className='text-gray-400'/>
        <input onChange={(e) => setEmail(e.target.value)} type='email' className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Username" required value={email}/>
        </div>
        <div className="input flex mb-4 p-4 bg-gray-300 text-black rounded-2xl transition delay-50 duration-200 ease-in-out focus-within:-translate-y-1 focus-within:scale-100 focus-within:ring-1 focus-within: ring-green-700">
        <Lock className='text-gray-400' />
        <input onChange={(e) => setPassword(e.target.value)} type={visible ? 'text' : 'password'} className="placeholder-gray-400 focus:outline-hidden ml-2 w-full" placeholder="Password" required value={password}/>
        <button className="text-gray-400" type="button" onClick={toggleVisibility}> {visible ? <Eye/> : <EyeOff/>}</button>
        </div>
        </div>
        <div className='remember pb-10'>
            <label><input id="default-checkbox" type='checkbox'/>Remember Me</label>
        </div>
        <div className="bg-green-800 mx-auto w-60 rounded-2xl  transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold hover:text-green-300">Login</button>
        </div>
    </form>
    </div>
    </div>
</div>
</>
  );
};

export default Login;