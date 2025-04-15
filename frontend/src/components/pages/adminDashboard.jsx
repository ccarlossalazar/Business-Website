import Sidebar from "../sideNavbar.jsx"
import Navbar from "../navbar.jsx"
import CalendarWidget from "../calendar.jsx"

const AdminDashboard = () => {
    return(
        <>
            <Navbar />
            <Sidebar />
            <div className="ml-48 pt-20 min-h-screen bg-green-950 text-white flex justify-center items-center">
                <CalendarWidget />
            </div>
        </>
    )
}

export default AdminDashboard