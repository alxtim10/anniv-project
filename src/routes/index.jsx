import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Main from "../pages/main/Main";

function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    )
}

export default RoutesIndex