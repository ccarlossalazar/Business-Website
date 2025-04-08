import Navbar from "../navbar.jsx"

const Estimate = () => {
    return (
    <>
    <Navbar />
    <div className="h-screen w-screen flex justify-center items-center bg-[#385230]">
        <div className="flex flex-col bg-gray-200 mx-7 justify-center items-center rounded-xl">
        <h1 className="text-gray-700 text-lg mt-20">No long term contracts. No pressure. Cancel Anytime</h1>
        <h1 className="text-black font-semibold text-2xl">Submit form for a free price estimate!</h1>
         <form className="p-5 text-center bg-gray space-y-4 mt-10">
         <h1 className="text-start pl-10 text-xs font-bold">* indicates a required field</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center place-items-center text-start">
         <div>
         <label className="block">First Name*</label>
          <input name="firstName" placeholder="John" className="bg-white rounded-lg p-2" required />
          </div>
          <div>
          <label className="block">Last Name*</label>
          <input name="lastName" placeholder="Smith" className="bg-white rounded-lg p-2" required />
        </div>
        </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center place-items-center text-start">
            <div>
            <label className="block">Email*</label>
            <input name="email" placeholder="ex. johnsmith@example.com" className="bg-white rounded-lg p-2"></input>            
            </div>
            <div>
            <div>
            <label className="block">Phone Number*</label>
            <input name="phone" placeholder="ex. (123) 456-7899" className="bg-white rounded-lg p-2"></input>            
            </div>
            </div>
            </div>
            <div>
            <label className="block">Service Address*</label>
            <input name="address" placeholder="ex. 1234 Example Blvd, California" className="bg-white rounded-lg p-2"></input>    
            </div>
            <div>
            <label className="block">Zip Code*</label>
            <input name="zip" placeholder="ex. 91234" className="bg-white rounded-lg p-2"></input>            
            </div>
            <div>
            <label className="block">Apartment/Suite (Optional)</label>
            <input name="apartment" placeholder="Apt. 123, Suite A, Unit 1" className="bg-white rounded-lg p-2"></input>                     
            </div>
            <div className="mb-6 max-w-3xl w-screen">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-start">Additional Details:</label>
            <textarea id="message" rows="3" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-green dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything else you would like us to know?"></textarea>
            </div>
            <div className="bg-green-800 mx-auto rounded-2xl mb-10">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold">Submit Request</button>
        </div>
         </form>
        </div>
    </div>
    </>
    )
}

export default Estimate