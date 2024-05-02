import React from "react";
import { MdSearch } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <a href="#" className="hd">
        <h2>CAMPUS CORNER</h2>
      </a>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <div className="icon">
          <MdSearch />
        </div>
      </div>
      <div className="nav">
        <NavLink to={"/Sellform"} className="sell-button">
          <span>+SELL</span>
        </NavLink>
      </div>
    </div>
  );
}

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Events from "./components/Events";
// import Sidebar from "./components/sidebar";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Profile from "./components/profile";
// import Navbar from "./components/navbar";
// import ProductForm from "./components/sellform";
// import HomeWithProducts from "./components/homewithproducts";
// import CreatorCard from "./components/creatercard";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<HomeWithProducts />} />
//           <Route path="/about" element={<CreatorCard />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/sellform" element={<ProductForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// // 