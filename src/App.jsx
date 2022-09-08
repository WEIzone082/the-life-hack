import React from "react";

import Index from "./pages/Index";
import "./assets/index.sass";

// here I used router v6 ,no switch ,only Routes
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Index></Index>} />
            </Routes>
        </div>
    );
}

export default App;
