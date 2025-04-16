import Navbar from "../navbar.jsx"
import Sidebar from "../sideNavbar.jsx"


const AdminUsers = () => {
    return (
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-center items-center">
            <div className="w-1/4">
              <Sidebar />
            </div>
                <div className="w-3/4 p-6">
              <h1 className="text-white">Users Table Goes Here</h1>
            </div>
          </div>
        </div>
      );
    };

export default AdminUsers


