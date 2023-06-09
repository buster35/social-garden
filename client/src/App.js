import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { UserProvider } from "./ctx/UserContext";
import { HomePage, LoginPage, ProfilePage, WelcomePage } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="background">
    <BrowserRouter>
      <UserProvider>
        <Header />
        <div className="pt-3 px-4">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/" element={<ProtectedRoute component={HomePage} />} />
            <Route path="/profile" element={<ProtectedRoute component={ProfilePage} />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
