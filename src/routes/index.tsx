import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/protected-route";
import Layout from "@/components/layout";
import Homepage from "@/pages/homepage";
import About from "@/pages/about";
import Login from "@/pages/loginpage";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            index
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/login" index element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
