import { useState } from "react";

function Login({ setRole }) {
  const [selected, setSelected] = useState("user");

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white">

      <div className="hidden md:flex w-1/2 flex-col justify-center px-16">
        <h1 className="text-5xl font-bold mb-6">
          Platform Informasi
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Rumah Makan Modern
          </span>
        </h1>
        <p className="text-gray-300">
          Sistem informasi untuk menemukan dan mengelola rumah makan terbaik.
        </p>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center p-10">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">

          <h2 className="text-3xl text-center mb-8 text-cyan-400">
            RumahMakan.id
          </h2>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setSelected("user")}
              className={`flex-1 py-3 rounded-xl ${
                selected === "user"
                  ? "bg-cyan-500"
                  : "bg-white/10"
              }`}
            >
              User
            </button>

            <button
              onClick={() => setSelected("admin")}
              className={`flex-1 py-3 rounded-xl ${
                selected === "admin"
                  ? "bg-blue-600"
                  : "bg-white/10"
              }`}
            >
              Admin
            </button>
          </div>

          <button
            onClick={() => setRole(selected)}
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl"
          >
            Masuk
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;