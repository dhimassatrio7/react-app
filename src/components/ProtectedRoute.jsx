import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useSelector((state) => state.auth); // Ambil data user dari Redux

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect jika belum login
  }

  if (!allowedRoles.includes(user.user_role)) {
    return <Navigate to="/not-authorized" replace />; // Redirect jika tidak memiliki akses
  }

  return children; // Render komponen jika user memiliki role yang diizinkan
};

export default ProtectedRoute;
