import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Projects} from "./pages/Projects";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {BestTripMethods} from "./pages/Best_trip_methods";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />     
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/best-trip-methods" element={<BestTripMethods />} />
        </Routes>
    );
}