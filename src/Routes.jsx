import { Route, Routes } from "react-router";
import TicketBookedPage from "./pages/TicketBooked";
import DetailsPage from "./pages/AttendeeDetails";
import BaseLayout from "./layout/BaseLayout";
import AboutPage from "./pages/AboutPage";
import StepOne from "./pages/SelectTicket";
import LandingPage from "./MainPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      {/* All other pages WITH BaseLayout */}
      <Route element={<BaseLayout />}>
        <Route path="/select" element={<StepOne />} />
        <Route path="/ticket" element={<TicketBookedPage />} />
        <Route path="/upload" element={<DetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
