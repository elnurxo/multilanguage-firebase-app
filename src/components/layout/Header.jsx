import { NavLink } from "react-router-dom";
import { ShoppingCart, Home, Package, LogIn, UserPlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher"; // Import updated LanguageSwitcher

const Header = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <nav className="bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo Section */}
        <NavLink to="/" className="flex items-center space-x-2">
          <ShoppingCart className="w-7 h-7 text-white" />
          <span className="text-lg font-semibold text-white hover:text-gray-200">
            {t("E-Commerce App")}
          </span>
        </NavLink>

        {/* Right Side: Navigation Icons */}
        <div className="flex space-x-6 items-center">
          <div className="group relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <Home className="w-7 h-7" />
            </NavLink>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {t("home")}
            </span>
          </div>

          <div className="group relative">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <Package className="w-7 h-7" />
            </NavLink>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {t("products")}
            </span>
          </div>

          <div className="group relative">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <LogIn className="w-7 h-7" />
            </NavLink>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {t("login")}
            </span>
          </div>

          <div className="group relative">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `text-white hover:text-gray-200 transition-colors ${
                  isActive ? "text-yellow-400" : ""
                }`
              }
            >
              <UserPlus className="w-7 h-7" />
            </NavLink>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {t("register")}
            </span>
          </div>

          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
