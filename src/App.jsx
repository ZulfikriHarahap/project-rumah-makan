import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Detail from "./pages/Detail";

function App() {
  const [role, setRole] = useState(null);

  const [restaurants, setRestaurants] = useState([
    { id: "1", name: "RM Garuda", food: "Rendang", location: "Medan", maps: "https://www.google.com/maps?q=RM+Garuda+Medan", desc: "Restoran legendaris khas Minang." },
    { id: "2", name: "Sate Memeng", food: "Sate Padang", location: "Medan", maps: "https://www.google.com/maps?q=Sate+Memeng+Medan", desc: "Sate Padang kuah kental khas." },
    { id: "3", name: "RM Tabona", food: "Soto Medan", location: "Medan", maps: "https://www.google.com/maps?q=RM+Tabona+Medan", desc: "Soto Medan gurih dan kaya rempah." },
    { id: "4", name: "Wajir Seafood", food: "Seafood", location: "Medan", maps: "https://www.google.com/maps?q=Wajir+Seafood+Medan", desc: "Seafood segar favorit keluarga." },
    { id: "5", name: "Ucok Durian", food: "Durian", location: "Medan", maps: "https://www.google.com/maps?q=Ucok+Durian+Medan", desc: "Durian Medan legit berkualitas." },
    { id: "6", name: "Mie Aceh Titi Bobrok", food: "Mie Aceh", location: "Medan", maps: "https://www.google.com/maps?q=Mie+Aceh+Titi+Bobrok+Medan", desc: "Mie Aceh pedas topping lengkap." },
    { id: "7", name: "Ayam Penyet Jakarta", food: "Ayam Penyet", location: "Medan", maps: "https://www.google.com/maps?q=Ayam+Penyet+Jakarta+Medan", desc: "Ayam penyet sambal mantap." },
    { id: "8", name: "Bakso Amat", food: "Bakso", location: "Medan", maps: "https://www.google.com/maps?q=Bakso+Amat+Medan", desc: "Bakso urat kenyal kuah gurih." },
    { id: "9", name: "Nasi Goreng Pemuda", food: "Nasi Goreng", location: "Medan", maps: "https://www.google.com/maps?q=Nasi+Goreng+Pemuda+Medan", desc: "Nasi goreng spesial topping lengkap." }
  ]);

  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            role ? (
              role === "admin" ? <Navigate to="/admin" /> : <Navigate to="/home" />
            ) : (
              <Login setRole={setRole} />
            )
          }
        />

        <Route
          path="/home"
          element={
            role === "user" ? (
              <Home setRole={setRole} restaurants={restaurants} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/admin"
          element={
            role === "admin" ? (
              <AdminDashboard
                setRole={setRole}
                restaurants={restaurants}
                setRestaurants={setRestaurants}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/detail/:id"
          element={<Detail restaurants={restaurants} />}
        />

      </Routes>
    </Router>
  );
}

export default App;