import { Link } from "react-router-dom";

function RestaurantCard({ data, onDelete }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">

      <h3 className="text-xl font-bold mb-2 text-amber-400">
        {data.name}
      </h3>

      <p className="text-gray-300 mb-1">
        🍽️ {data.food}
      </p>

      <p className="text-gray-400 mb-4">
        📍 {data.location}
      </p>

      <div className="flex justify-between items-center">

        <Link
          to={`/detail/${data.id}`}
          className="text-sm px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
        >
          Detail
        </Link>

        {onDelete && (
          <button
            onClick={() => onDelete(data.id)}
            className="text-sm px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
          >
            Hapus
          </button>
        )}

      </div>

    </div>
  );
}

export default RestaurantCard;