import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Administrador from "./pages/Administrador";

export default function Routers(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/administrador" element={<Administrador />} />
            </Routes>
        </BrowserRouter>
    );
}