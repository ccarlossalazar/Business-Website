import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, ArrowLeftToLine, LogOut, UserRoundPen, User } from 'lucide-react';


const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-48 h-screen bg-green-900 text-white fixed top-20 left-0 pt-20">
      <ul>
      <p className="text-xs font-bold ml-3 text-green-300">NAVIGATION</p>
        <Link to="/admin/dashboard">
        <li className={`text-sm flex font-semibold px-4 py-2 items-center ${isActive("/admin/dashboard") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
        <LayoutDashboard className="p-1"/>
        <span>Dashboard</span>
        </li>
        </Link>
        <Link to="/admin/users">
        <li className={`text-sm flex font-semibold px-4 py-2 items-center ${isActive("/admin/users") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
        <Users className="p-1"/>
          <span>Users</span>
        </li>
        </Link>
      </ul>
      <ul>
      <p className="text-xs font-bold mt-4 ml-3 text-green-300">USER</p>
        <Link to="#">
        <li className={`text-sm flex font-semibold px-4 py-2 items-center ${isActive("#") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
        <UserRoundPen className="p-1"/>
        <span>Profile</span>
        </li>
        </Link>
        <Link to="#">
        <li className={`text-sm flex font-semibold px-4 py-2 items-center ${isActive("#") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
        <LogOut className="p-1"/>
        <span>Logout</span>
        </li>
        </Link>
        <Link to="/">
        <li className={`text-sm flex font-semibold px-4 py-2 items-center `}>
        <ArrowLeftToLine className="p-1"/>
        <span>Main Page</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
