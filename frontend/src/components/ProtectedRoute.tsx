import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
  role?: "admin" | "user";
}

export default function ProtectedRoute({ children, role }: Props) {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role");

  // 🔒 Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // ⚠️ Role mismatch (extra safety: handle null/undefined)
  if (role && (!userRole || userRole !== role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ Access granted
  return children;
}