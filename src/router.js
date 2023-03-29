import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Dates from "./pages/Dates";
import Home from "./pages/Home";
import Membres from "./pages/Membres";
import Videos from "./pages/Videos";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/membres" element={<Membres />}/>
            <Route path="/dates" element={<Dates />}/>
            <Route path="/videos" element={<Videos />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}