import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user || user.role !== "Admin") {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default AdminRoute;
