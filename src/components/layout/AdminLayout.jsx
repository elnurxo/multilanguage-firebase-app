import { Outlet, useLocation } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

const AdminLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin/login";

  return (
    <>
      {!isLoginPage && <AdminSideBar />}
      <Outlet />
    </>
  );
};

export default AdminLayout;
