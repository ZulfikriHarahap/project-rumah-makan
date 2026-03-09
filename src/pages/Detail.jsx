import { useParams } from "react-router-dom"
import { restaurants } from "../components/RestaurantList"

export default function Detail(){

const {id} = useParams()

const resto = restaurants.find((r)=> r.id === parseInt(id))

if(!resto) return <h1 className="text-white">Data tidak ditemukan</h1>

return(

<div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 flex justify-center items-center p-6">

<div className="bg-slate-800 p-8 rounded-xl max-w-xl text-white shadow-xl">

<h1 className="text-3xl font-bold mb-4 text-blue-300">
{resto.name}
</h1>

<p className="text-yellow-400 mb-4 text-lg">
⭐ {resto.rating} / 5
</p>

<p className="text-gray-300 mb-6 leading-relaxed">
{resto.desc}
</p>

<a href={resto.maps} target="_blank">

<button className="bg-blue-500 hover:bg-blue-400 px-5 py-2 rounded-lg">

Buka di Google Maps

</button>

</a>

</div>

</div>

)

}