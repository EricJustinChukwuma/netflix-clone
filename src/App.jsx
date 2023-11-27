import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import Account from "./Pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";


export default function App() {
    return ( 
      <>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/signUpPage" element={<SignUpPage />} />
            <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>} 
            />
          </Routes>
        </AuthContextProvider>
      </>
    )
};











