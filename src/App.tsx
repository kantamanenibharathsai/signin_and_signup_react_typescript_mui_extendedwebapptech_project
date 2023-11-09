import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Signin from "./components/sign_in/sign-in";
import Signup from "./components/sign_up/sign-up";
import Home from "./components/home/home";
import Products from "./components/products/products";
import ProtectedRoute from "./utils/protected-route";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedRoute />}>
                    <Route  element={<Home />} path="/"/>
                    <Route  element={<Products />} path="/products"/>
                </Route>
                <Route element={<Signin/>} path='/login'/>
                <Route element={<Signup/>} path='/register'/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;