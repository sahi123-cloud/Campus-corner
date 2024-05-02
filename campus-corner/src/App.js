import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Events from "./components/Events";
import Sidebar from "./components/sidebar";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
import Navbar from "./components/navbar";
import ProductForm from "./components/sellform";
import HomeWithProducts from "./components/homewithproducts";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/*" element={<Home />} />
          <Route path="/*" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <HomeWithProducts />
    </>
  );
}

function MainContent() {
  return (
    <Sidebar>
      <Routes>
        <Route path="/events" element={<Navbar><Events /></Navbar>} />
        <Route path="/profile" element={<Navbar><Profile /></Navbar>} />
        <Route path="/sellform" element={<ProductForm />} />
      </Routes>
    </Sidebar>
  );
}

export default App;