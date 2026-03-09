import { useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../components/RestaurantList";
import ScrollAnimation from "../components/ScrollAnimation";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blue-bg text-white">

      {/* BUBBLE BACKGROUND */}
      <div className="bubble w-20 h-20 left-10"></div>
      <div className="bubble w-32 h-32 left-1/3"></div>
      <div className="bubble w-16 h-16 right-20"></div>
      <div className="bubble w-24 h-24 right-1/4"></div>

      {/* EMOJI MAKANAN */}
      <span className="food-icon left-10 top-20">🍜</span>
      <span className="food-icon right-20 top-40">🍔</span>
      <span className="food-icon left-1/2 bottom-20">🍣</span>
      <span className="food-icon right-1/3 bottom-32">🍕</span>

      <Navbar />

      {/* HERO */}
      <div className="h-[500px] flex flex-col justify-center items-center text-center px-6">

        <h1 className="text-6xl font-bold mb-6 text-blue-300">
          Eksplorasi Kuliner Medan
        </h1>

        <p className="text-lg text-gray-300 max-w-xl mb-8">
          Temukan berbagai rumah makan terbaik di kota Medan dengan rekomendasi kuliner populer.
        </p>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari rumah makan..."
          className="search-box"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* LIST RESTORAN */}
      <div className="flex flex-col gap-8 px-10 pb-20 max-w-5xl mx-auto">

        {filteredRestaurants.map((item) => (
          <ScrollAnimation key={item.id}>
            <RestaurantCard data={item} />
          </ScrollAnimation>
        ))}

      </div>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-700 pt-10 pb-6 text-center">

        <h2 className="text-xl mb-4 text-blue-300">
          Hubungi Kami
        </h2>

        <a
          href="https://wa.me/6282267793259"
          target="_blank"
        >
          <button className="bg-green-500 hover:bg-green-400 px-6 py-3 rounded-lg mb-6">
            WhatsApp
          </button>
        </a>

        <p className="text-gray-400 text-sm">
          © 2026 Eksplorasi Kuliner Medan. All rights reserved.
        </p>

      </footer>

    </div>
  );
}