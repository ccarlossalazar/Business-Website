import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-48 h-screen bg-green-900 text-white fixed top-20 left-0 pt-20">
      <ul>
        <Link to="/admin/dashboard">
        <li className={`text-sm font-semibold px-4 py-2 ${isActive("/admin/dashboard") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
        Dashboard
        </li>
        </Link>
        <Link to="/admin/users">
        <li className={`px-4 py-2 ${isActive("/admin/users") ? "bg-green-700 text-gray-300" : "hover:bg-green-800"}`}>
          Users
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
