import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import HomeOne from "./pages/Homes/HomeOne";
import WOW from "wow.js";
import AOS from "aos";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPageOne from "./pages/Services/ServicesPageOne";
import EstimatePage from "./pages/EstimatePage";
import ContactPage from "./pages/ContactPage";
import FurnaceRepair from "./pages/Services/furnace-repair";
import BoilerRepair from "./pages/Services/boiler-repair";
import Repiping from "./pages/Services/repiping";
import HotWater from "./pages/Services/hot-water";
import WaterMain from "./pages/Services/water-main";
import Fast from "./pages/Services/fast";
import DrainTile from "./pages/Services/drain-tile";
import Sewer from "./pages/Services/sewer";
import DrainageRepair from "./pages/Services/drainage-repair";
import AllTypes from "./pages/Services/all-types";
import Camera from "./pages/Services/camera";
import Testimonial from "./pages/Testimonial";
import Error from "./pages/Error";


function App() {
  // wow js scroll
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  // aos scroll
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, disable: "mobile" });
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPageOne />} />
        <Route path="/furnace-repair" element={<FurnaceRepair />} />
        <Route path="/boiler-repair" element={<BoilerRepair />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/repiping" element={<Repiping />} />
        <Route path="/hot-water" element={<HotWater />} />
        <Route path="/water-main" element={<WaterMain />} />
        <Route path="/fast" element={<Fast />} />
        <Route path="/drain-tile" element={<DrainTile />} />
        <Route path="/sewer" element={<Sewer />} />
        <Route path="/drainage-repair" element={<DrainageRepair />} />
        <Route path="/all-types" element={<AllTypes />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/error" element={<Error />} />

        {/* Redirect to Error page for unknown routes */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default App;
