import { Link } from "react-router-dom"

export default function RestaurantCard({ data }) {

  const stars = Math.round(data.rating)

  const getIcon = (category) => {
    if(category === "Masakan Padang") return "🍛"
    if(category === "Soto") return "🍲"
    if(category === "Mie Aceh" || category === "Mie") return "🍜"
    if(category === "Sate") return "🍢"
    if(category === "Seafood") return "🦐"
    if(category === "Dessert") return "🍰"
    if(category === "Bakso") return "🍡"
    if(category === "Ayam") return "🍗"
    if(category === "Nasi Goreng") return "🍚"
    return "🍽️"
  }

  return (

    <div className="food-card p-6 transition duration-300 hover:shadow-blue-500/40 hover:shadow-lg hover:-translate-y-1">

      <div className="flex items-start justify-between">

        <div>

          {/* NAMA RESTORAN */}
          <h2 className="text-2xl font-semibold text-blue-200 mb-1">
            {data.name}
          </h2>

          {/* KATEGORI */}
          <p className="text-gray-400 flex items-center gap-2 mb-2">
            <span>{getIcon(data.category)}</span>
            {data.category}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-2">

            <span className="text-yellow-400 text-lg transition-all duration-500">
              {"★".repeat(stars)}
            </span>

            <span className="text-gray-400 text-sm">
              {data.rating} / 5
            </span>

          </div>

        </div>

        {/* BADGE BEST */}
        {data.best && (
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
            ⭐ Best
          </span>
        )}

      </div>

      {/* BUTTON */}
      <div className="mt-4">

        <Link to={`/detail/${data.id}`}>
          <button className="bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-lg">
            Lihat Detail
          </button>
        </Link>

      </div>

    </div>

  )

}