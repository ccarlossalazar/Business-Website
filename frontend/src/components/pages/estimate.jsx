import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"
import { useState } from "react"
import axios from 'axios'

const Estimate = () => {
    const [info, setInfo] = useState({})
    const [submitted, setSubmitted] = useState(false)
    
    const handleChange = (e) => {
     setInfo(prev=>({...prev, [e.target.id]:e.target.value})) 
    }
    
    const handleClick = async (e) => {
        e.preventDefault()
        try{
          const newEstimate = {
            ...info,
          }
          console.log("New Estimate Payload:", newEstimate);
          await axios.post("http://localhost:5000/clients/estimate", newEstimate)
          setSubmitted(!submitted)
        }catch(err){
          console.error("New Equipment Error:", err.message);
        }
      }
  
    
    
    return (
    <>
    <Navbar />
    <div className="flex justify-center min-h-screen p-20 items-center bg-[#385230]">
        <div className="max-w-4xl w-full bg-gray-200 rounded-xl text-center">
        <h1 className="text-gray-700 text-lg mt-15">No long term contracts. No pressure. Cancel Anytime</h1>
        <h1 className="text-black font-semibold text-2xl mb-15">Submit form for a free price estimate!</h1>
         <form className="space-y-8 m-5 text-start">
         <h1 className="text-start text-xs font-bold">(*) indicates a required field</h1>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
         <div>
         <label className="block mb-3">First Name*</label>
          <input id="firstname" name="firstName" placeholder="ex. John" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange} />
          </div>
          <div>
          <label className="block mb-3">Last Name*</label>
          <input id="lastname" name="lastName" placeholder="ex. Smith" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange} />
        </div>
            <div>
            <label className="block mb-3">Email*</label>
            <input id="email" placeholder="ex. johnsmith@example.com" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>           
            </div>
            <div>
            <label className="block mb-3">Phone Number*</label>
            <input id="phone" name="phone" placeholder="ex. (123) 456-7899" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>            
            </div>
            </div>
            <div className="md:col-span-2 m-6">
            <label className="block mb-3">Service Address*</label>
            <input id="address" name="address" placeholder="ex. 1234 Example Blvd, California" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>   
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
            <div className="">
            <label className="block mb-3">Zip Code*</label>
            <input id="zip" name="zip" placeholder="ex. 91234" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required onChange={handleChange}/>            
            </div>
            <div className="">
            <label className="block mb-3">Apartment/Suite (Optional)</label>
            <input id="unit" name="unit" placeholder="Apt. 123, Suite A, Unit 1" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" onChange={handleChange}/>                  
            </div>
            </div>
            <div className="w-full p-5">
            <label htmlFor="additional" className="block mb-2 text-black text-start">Additional Details (Optional):</label>
            <textarea id="additional" rows="3" className="block p-2.5 w-full text-sm text-black rounded-lg bg-white focus:outline-hidden" placeholder="Anything else you would like us to know?" onChange={handleChange}/>
            </div>
            </form>
            <div className="bg-green-800 rounded-2xl p-2 m-10">
        <button onClick={handleClick} className="text-center w-full p-2 text-white font-semibold">Submit Request</button>
            </div>
        </div>
    </div> 
    <Footer />  
    </>
    )
}

export default Estimate