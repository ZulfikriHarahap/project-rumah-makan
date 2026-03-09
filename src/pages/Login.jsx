import { useNavigate } from "react-router-dom"

export default function Login(){

const navigate = useNavigate()

return(

<div className="h-screen flex items-center justify-center bg-gray-950">

<div className="bg-gray-900 text-white p-10 rounded-2xl shadow-xl w-[420px] text-center">

<h1 className="text-3xl font-bold mb-4">
Kuliner Medan
</h1>

<p className="text-gray-400 mb-6">
Website ini membantu kamu menemukan berbagai rumah makan terbaik di kota Medan.
Temukan kuliner populer dan tempat makan favorit dengan mudah.
</p>

<button
onClick={()=>navigate("/home")}
className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl w-full"
>

Masuk ke Dashboard

</button>

</div>

</div>

)

}