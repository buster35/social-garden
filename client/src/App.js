import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { UserProvider } from "./ctx/UserContext";
import { HomePage, LoginPage, ProfilePage } from "./pages";
import WelcomePage from './pages/WelcomePage'

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div className="pt-3 px-4">
          <Routes>
          <Route path="/" element={<LayoutWithHeader><HomePage /></LayoutWithHeader>} />
            <Route path="/login" element={<LayoutWithHeader><LoginPage /></LayoutWithHeader>} />
            <Route path="/profile" element={<LayoutWithHeader><ProfilePage /></LayoutWithHeader>} />
            <Route path="/welcome" element={<WelcomePage />} />
            {/* <Route path="/post/:id" element={<PostItem />} /> */}
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

const LayoutWithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
)

export default App;
