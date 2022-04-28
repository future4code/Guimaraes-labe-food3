import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={<SignUp /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;