import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user, isAdmin } = useSelector((state) => state.auth);
  const currentPath = window.location.pathname;
  
  // If there's no user logged in, redirect to login
  if (!user) {
    // Redirect to admin login if trying to access an admin route, else client login
    if (currentPath.startsWith("/admin")) {
      return <Navigate to="/admin/login" />;
    }
    return <Navigate to="/login" />;
  }

  // If trying to access admin routes but the user is not an admin, redirect to login
  if (adminOnly && !isAdmin) {
    return <Navigate to="/admin/login" />;
  }

  // If the route is for the client and the user is an admin, don't allow access
  if (!adminOnly && isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }

  // If authenticated, render the protected component
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  adminOnly: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  adminOnly: false,
};

export default ProtectedRoute;
