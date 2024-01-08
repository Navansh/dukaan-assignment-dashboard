import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Paymentscashfreedashboard = React.lazy(
  () => import("pages/Paymentscashfreedashboard"),
);
const PaymentscashfreedashboardOne = React.lazy(
  () => import("pages/PaymentscashfreedashboardOne"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<PaymentscashfreedashboardOne />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/paymentscashfreedashboardone"
            element={<PaymentscashfreedashboardOne />}
          />
          <Route
            path="/paymentscashfreedashboard"
            element={<Paymentscashfreedashboard />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
