import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/routes/protected-route";
import Layout from "@/components/layout";
import Homepage from "@/pages/homepage";
import Aboutpage from "@/pages/aboutpage";
import Loginpage from "@/pages/loginpage";

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
                <Aboutpage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" index element={<Loginpage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
