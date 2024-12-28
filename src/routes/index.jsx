// utils/routes.jsx
import Home from "../pages/client/Home";
import Products from "../pages/client/Products";
import ProductDetail from "../pages/client/ProductDetail";
import NotFound from "../pages/client/NotFound";
import Login from "../pages/client/Login";
import Register from "../pages/client/Register";
import User from "../pages/client/User";

import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminAddProduct from "../pages/admin/AdminAddProduct";

import ClientLayout from "../components/layout/ClientLayout";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

export const ROUTES = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/user",
        element: (
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin/login", element: <AdminLogin /> },
      {
        index: true,
        element: (
          <ProtectedRoute adminOnly={true}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/admin/add-product",
        element: (
          <ProtectedRoute adminOnly={true}>
            <AdminAddProduct />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
