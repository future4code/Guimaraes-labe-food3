import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Address from "../pages/Address/Address";
import FourFood from "../pages/FourFood/FourFood";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cart  from "../pages/Cart/Cart.js";
<<<<<<< HEAD
import Profile from "../pages/ProfilePages/Profile"; 
=======
import Profile from "../pages/ProfilePages/Profile";
import EditProfile from "../pages/ProfilePages/EditProfile";
>>>>>>> master

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="" element={<App />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={<SignUp /> } />
                <Route path="/address" element={<Address /> } />
                <Route path="/fourfood" element={<FourFood />} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/profile" element={<Profile/>} />
<<<<<<< HEAD
                <Route path="/cart" element={<Cart/>} />
            </Routes>   
=======
                <Route path="/editprofile" element={<EditProfile/>} />
            </Routes>
>>>>>>> master
        </BrowserRouter>
    )
}

export default Router;