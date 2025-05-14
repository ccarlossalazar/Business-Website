import { Link } from "react-router-dom"
import { auth } from "../firebase"

const Footer = () => {
    const user = auth.currentUser;

    return (
        <div className="relative">
        <footer id="contact" className="text-center bg-[#385230] text-white font-semibold p-4 text-sm">
    <h1 className="p-2">(650) 560-9370 | <a href="westcoastjanitorial.com">westcoastjanitorial.com</a> | westcoastjanitoriallservices@gmail.com</h1>
    <h1 className="p-2">Located in Half Moon Bay, California. We also serve all cities in San Mateo County. Licensed in California (#02402155)</h1>
    <h1 className="pb-4">Copyright © 2024. All Rights Reserved Web Design by West Coast Janitorial Services</h1>
        <div className="absolute bottom-0 right-2">
        <div className="space-x-6 flex py-2 pt-5">
            {!user &&
                <Link to="/login">
                  <button className="py-2 px-3 rounded-md text-green-700 hover:text-green-600 ">
                    Login
                  </button>
                </Link>}
              </div>
        </div>
        </footer>
        </div>
    )
}

export default Footer