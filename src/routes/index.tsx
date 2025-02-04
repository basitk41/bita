import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import Homepage from "@/pages/homepage";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Homepage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
