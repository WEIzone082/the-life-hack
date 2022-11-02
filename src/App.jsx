import React from "react";

import Index from "./pages/Index";
import BikePage from "./pages/BikePage";
import Transportation from "./pages/Transportation";
import "./assets/index.css";

// here I used router v6 ,no switch ,only Routes
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route
                    path="/bike-page"
                    element={<BikePage />}
                />
                <Route
                    path="/transportation"
                    element={<Transportation />}
                />
            </Routes>
        </div>
    );
}

export default App;
