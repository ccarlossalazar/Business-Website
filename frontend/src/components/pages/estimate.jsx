import Navbar from "../navbar.jsx"

const Estimate = () => {
    return (
    <>
    <Navbar />
    <div className="py-6">
        <div className="flex flex-col bg-gray-400 mx-7">
         <form className="p-5 text-center bg-gray">
            <h1 className="text-gray-700 text-lg">No long term contracts. No pressure. Cancel Anytime</h1>
            <h1 className="text-black font-semibold text-2xl">Submit form for a price estimate</h1>
            <div className='inputs'>
            <h1>Add inputs here</h1>
            </div>
            <div className="p-3">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black text-start">Additional Details:</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 bg-white dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Anything else you would like us to know?"></textarea>
            </div>
            <div className="bg-green-800 mx-auto rounded-2xl">
        <button type='submit' className="text-center w-full p-2 text-white font-semibold">Submit</button>
        </div>
         </form>
        </div>
    </div>
    </>
    )
}

export default Estimate