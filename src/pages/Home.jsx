import Navbar from "../components/Navbar";
import RestaurantList from "../components/RestaurantList";

function Home({ setRole, restaurants }) {
  return (
    <div className="min-h-screen bg-slate-900 p-10 text-white">
      <Navbar setRole={setRole} />
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default Home;