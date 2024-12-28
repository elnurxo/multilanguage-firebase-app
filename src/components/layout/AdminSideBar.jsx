import { useState } from "react";
import { Home, PlusCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const AdminSideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <motion.div
        className={`${
          isCollapsed ? "w-16" : "w-64"
        } bg-gray-800 min-h-screen p-5 transition-all duration-300 ease-in-out relative`}
        initial={{ width: "16rem" }}
        animate={{ width: isCollapsed ? "4rem" : "16rem" }}
        exit={{ width: "16rem" }}
      >
        {/* Collapse Button */}
        <button
          className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-2 rounded-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <ChevronRight className="w-6 h-6" />
          ) : (
            <ChevronLeft className="w-6 h-6" />
          )}
        </button>

        <div className="text-white text-xl font-semibold mb-8 mt-12">
          <h1 className={`${isCollapsed ? "hidden" : ""}`}>Admin Panel</h1>
        </div>
        <nav className="space-y-4">
          {/* Dashboard Link */}
          <div className="group relative">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-white hover:text-gray-200 ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <Home className="w-6 h-6" />
            </NavLink>
            <span
              className={`absolute left-full top-0 transform translate-x-3 px-2 py-1 text-sm bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                isCollapsed ? "group-hover:opacity-100" : "opacity-0"
              }`}
            >
              Dashboard
            </span>
          </div>

          {/* Add Product Link */}
          <div className="group relative">
            <NavLink
              to="/admin/add-product"
              className={({ isActive }) =>
                `flex items-center space-x-3 text-white hover:text-gray-200 ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <PlusCircle className="w-6 h-6" />
            </NavLink>
            <span
              className={`absolute left-full top-0 transform translate-x-3 px-2 py-1 text-sm bg-gray-600 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity ${
                isCollapsed ? "group-hover:opacity-100" : "opacity-0"
              }`}
            >
              Add Product
            </span>
          </div>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8 ml-16">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSideBar;
