import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"
import { useState } from "react"
import { db } from "../../firebase.js"
import {collection, addDoc} from "firebase/firestore"
import { Link } from "react-router-dom"
import { BadgeCheck, Asterisk } from "lucide-react"

const Estimate = () => {
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [info, setInfo] = useState({})
    
    const handleChange = (e) => {
     setInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
     console.log(info)
     setError("")
    }

    const toggleForm = () => {
        setSubmitted(!submitted)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        setError('')

        if (!info.firstname || !info.lastname || !info.email || !info.phone || !info.address || !info.zip) {
            setError("Please fill in all required fields.");
            return
        }

        try {
            const ref = await addDoc(collection(db, 'client-requests'),info)
            console.log("Request Info:", ref)
        } catch (err) {
            setError("There was an error submitting your request")
            console.log(err, error)
        }
        setSubmitted(!submitted)
        setInfo({})
    }
    
    
    return (
    <>
    <Navbar />
    <div className="flex justify-center min-h-screen p-20 items-center bg-[#385230]">
    {!submitted ? (
        <div className="max-w-2xl w-full bg-gray-200 rounded-xl text-center">
        <h1 className="text-gray-700 text-lg mt-15">No long term contracts. No pressure. Cancel Anytime</h1>
        <h1 className="text-black font-semibold text-2xl mb-15">Submit form for a free price estimate!</h1>
         <form className="space-y-8 m-5 text-start">
         <h1 className="flex text-start text-xs font-bold items-center">(<Asterisk className="text-red-700 size-2.5"/>) indicates a required field</h1>
         {error && <h1 className="text-sm text-red-600 text-center">Please fill in all required fields.</h1>}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
         <div>
         <label className="flex block mb-3">First Name<Asterisk className="text-red-700 size-2.5"/></label>
          <input id="firstname" name="firstName" placeholder="ex. John" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange} />
          </div>
          <div>
          <label className="flex block mb-3">Last Name<Asterisk className="text-red-700 size-2.5"/></label>
          <input id="lastname" name="lastName" placeholder="ex. Smith" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange} />
        </div>
            <div>
            <label className="flex block mb-3">Email<Asterisk className="text-red-700 size-2.5"/></label>
            <input type="email" id="email" placeholder="ex. johnsmith@example.com" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>           
            </div>
            <div>
            <label className="flex block mb-3">Phone Number<Asterisk className="text-red-700 size-2.5"/></label>
            <input id="phone" name="phone" placeholder="ex. (123) 456-7899" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>            
            </div>
            </div>
            <div className="md:col-span-2 m-6">
            <label className="flex block mb-3">Service Address<Asterisk className="text-red-700 size-2.5"/></label>
            <input id="address" name="address" placeholder="ex. 1234 Example Blvd, California" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>   
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
            <div className="">
            <label className="flex block mb-3">Zip Code<Asterisk className="text-red-700 size-2.5"/></label>
            <input id="zip" name="zip" placeholder="ex. 91234" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>            
            </div>
            <div className="">
            <label className="block mb-3">Apartment/Suite (Optional)</label>
            <input id="unit" name="unit" placeholder="Apt. 123, Suite A, Unit 1" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" onChange={handleChange}/>                  
            </div>
            </div>
            <div className="w-full p-5">
            <label htmlFor="additional" className="block mb-2 text-black text-start">Additional Details (Optional):</label>
            <textarea id="additional" 
            rows="4" 
            className="block p-2.5 w-full text-sm text-black rounded-lg bg-white focus:outline-hidden" 
            placeholder="Tell us anything that might help! 😊 
Let us know what days/times work for an estimate, your preferred cleaning days, and 
any areas you'd like extra attention (fridge, windows, etc.). Pet info or anything else we should know!
" 
            onChange={handleChange}/>
            </div>
            </form>
            <div className="bg-green-800 rounded-2xl p-2 m-10  hover:bg-green-700">
        <button onClick={handleClick} className="text-center w-full p-2 text-white font-semibold">Submit Request</button>
            </div>
        </div>
        ) : (
            <div className="flex justify-center items-center min-h-screen"> 
            <div className="bg-gray-200 rounded-4xl p-20 flex-col text-center w-full m-20">
                <h1 className='text-2xl font-semibold'>Thank you for your Request!</h1>
            <div className="flex justify-center items-center mb-4">
                <BadgeCheck className="text-green-600 w-20 h-20 m-5" />
            </div>
            <div className='flex flex-col w-full max-w-2xl space-y-3'>
            <Link to="/"><button className="text-center w-full p-2 text-white font-semibold bg-green-700 rounded-xl hover:bg-green-800">Back to home</button></Link>
                <button type='submit' className="text-center w-full p-2 text-white font-semibold bg-green-700 rounded-xl hover:bg-green-800" onClick={toggleForm}>Submit another request</button>
            </div>
            </div>
        </div>
        )}
    </div> 
    <Footer />  
    </>
    )
}

export default Estimate