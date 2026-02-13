import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { BestTripMethods } from "./pages/Best_trip_methods";

function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function Router() {
  return (
    <>
     <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/best-trip-methods" element={<BestTripMethods />} />
    </Routes>
    </>
  );
}