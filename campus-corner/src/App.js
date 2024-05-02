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
import CreatorCard from "./components/creatercard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeWithProducts />} />
          <Route path="/about" element={<CreatorCard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sellform" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
