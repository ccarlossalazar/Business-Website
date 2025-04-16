import Sidebar from "../sideNavbar.jsx"
import Navbar from "../navbar.jsx"
import CalendarWidget from "../calendar.jsx"

const AdminDashboard = () => {
    return (
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-center items-center">
            <div className="w-1/4">
              <Sidebar />
            </div>
                <div className="w-3/4 p-6">
              <CalendarWidget />
            </div>
          </div>
        </div>
      )
    }

export default AdminDashboard