import Navbar from "../navbar.jsx"
import Sidebar from "../sideNavbar.jsx"
import UserTable from "../userTable.jsx";


const AdminUsers = () => {
    return (
        <div>
          <Navbar />
          <div className="flex flex-row bg-green-950 h-screen justify-center items-center">
            <div className="w-1/4">
              <Sidebar />
            </div>
                <div className="w-3/4  pr-10 lg:pr-50">
              <UserTable/>
            </div>
          </div>
        </div>
      );
    };

export default AdminUsers


