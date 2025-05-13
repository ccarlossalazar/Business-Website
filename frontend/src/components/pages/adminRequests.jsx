import Sidebar from "../sideNavbar.jsx"
import Navbar from "../navbar.jsx"
import RequestTable from "../requestsTable.jsx"

const AdminRequests = () => {
    return (
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-center items-center">
            <div className="w-1/4">
              <Sidebar />
            </div>
                <div className="w-3/4 p-6">
                <RequestTable/>
            </div>
          </div>
        </div>
      )
    }

export default AdminRequests