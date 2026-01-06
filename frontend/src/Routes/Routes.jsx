import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Deskstop from "../pages/Deskstop";
import AddUser from "../pages/AddUser";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute from "./AdminRoute";

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/desktop"
        element={
          <AdminRoute>
            <Deskstop />
          </AdminRoute>
        }
      />

      <Route
        path="/addusers"
        element={
          <AdminRoute>
            <AddUser />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default Routess;
