import { useState, useEffect } from "react";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

function Admin() {
  const [restaurants, setRestaurants] = useState([]);
  const [name, setName] = useState("");
  const [food, setFood] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("restaurants")) || [];
    setRestaurants(saved);
  }, []);

  const saveData = (data) => {
    localStorage.setItem("restaurants", JSON.stringify(data));
    setRestaurants(data);
  };

  const handleAdd = () => {
    const newData = {
      id: Date.now(),
      name,
      food,
      location
    };

    saveData([...restaurants, newData]);
    setName("");
    setFood("");
    setLocation("");
  };

  const handleDelete = (id) => {
    saveData(restaurants.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8 text-white">
      <Header title="Dashboard Admin" />

      <div className="bg-white/10 p-6 rounded-xl mb-8">
        <input
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 mr-3 rounded bg-white/20"
        />
        <input
          placeholder="Menu"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          className="p-3 mr-3 rounded bg-white/20"
        />
        <input
          placeholder="Lokasi"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-3 mr-3 rounded bg-white/20"
        />
        <button
          onClick={handleAdd}
          className="bg-emerald-500 px-4 py-2 rounded"
        >
          Tambah
        </button>
      </div>

      <RestaurantList
        restaurants={restaurants}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Admin;