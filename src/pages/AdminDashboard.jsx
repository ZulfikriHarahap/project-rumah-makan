import Navbar from "../components/Navbar";
import RestaurantList from "../components/RestaurantList";

function AdminDashboard({ setRole, restaurants, setRestaurants }) {

  const handleDelete = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 p-10 text-white">
      <Navbar setRole={setRole} />

      <h2 className="text-3xl text-cyan-400 mt-8 mb-6">
        Dashboard Admin
      </h2>

      <RestaurantList
        restaurants={restaurants}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default AdminDashboard;