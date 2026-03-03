import { useParams, useNavigate } from "react-router-dom";

function Detail({ restaurants }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <div className="text-white p-10">Data tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8 text-white">

      <div className="max-w-3xl w-full bg-white/5 p-10 rounded-3xl">

        <h1 className="text-4xl text-cyan-400 mb-4">
          {restaurant.name}
        </h1>

        <p>🍽️ {restaurant.food}</p>
        <p className="mb-4">📍 {restaurant.location}</p>

        <p className="mb-6">{restaurant.desc}</p>

        <a
          href={restaurant.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 rounded-xl"
        >
          Buka di Google Maps
        </a>

        <button
          onClick={() => navigate(-1)}
          className="ml-4 px-6 py-3 bg-gray-600 rounded-xl"
        >
          Kembali
        </button>

      </div>
    </div>
  );
}

export default Detail;