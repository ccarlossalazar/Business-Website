import Navbar from "../navbar.jsx"
import Footer from "../footer.jsx"

const Estimate = () => {
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
          <input name="firstName" placeholder="ex. John" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required />
          </div>
          <div>
          <label className="block mb-3">Last Name*</label>
          <input name="lastName" placeholder="ex. Smith" className="bg-white rounded-lg p-2 w-full focus:outline-hidden" required />
        </div>
            <div>
            <label className="block mb-3">Email*</label>
            <input name="email" placeholder="ex. johnsmith@example.com" className="bg-white rounded-lg p-2 w-full focus:outline-hidden"></input>            
            </div>
            <div>
            <label className="block mb-3">Phone Number*</label>
            <input name="phone" placeholder="ex. (123) 456-7899" className="bg-white rounded-lg p-2 w-full focus:outline-hidden"></input>            
            </div>
            </div>
            <div className="md:col-span-2 m-6">
            <label className="block mb-3">Service Address*</label>
            <input name="address" placeholder="ex. 1234 Example Blvd, California" className="bg-white rounded-lg p-2 w-full focus:outline-hidden"></input>    
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6">
            <div className="">
            <label className="block mb-3">Zip Code*</label>
            <input name="zip" placeholder="ex. 91234" className="bg-white rounded-lg p-2 w-full focus:outline-hidden"></input>            
            </div>
            <div className="">
            <label className="block mb-3">Apartment/Suite (Optional)</label>
            <input name="apartment" placeholder="Apt. 123, Suite A, Unit 1" className="bg-white rounded-lg p-2 w-full focus:outline-hidden"></input>                     
            </div>
            </div>
            <div className="w-full p-5">
            <label htmlFor="message" className="block mb-2 text-black text-start">Additional Details (Optional):</label>
            <textarea id="message" rows="3" className="block p-2.5 w-full text-sm text-black rounded-lg bg-white focus:outline-hidden" placeholder="Anything else you would like us to know?"></textarea>
            </div>
            <div className="bg-green-800 rounded-2xl p-2 m-10">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold">Submit Request</button>
            </div>
         </form>
        </div>
    </div>
    <Footer />  
    </>
    )
}

export default Estimate