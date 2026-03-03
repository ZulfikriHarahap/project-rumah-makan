import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const admins = JSON.parse(localStorage.getItem("admins")) || [];

    const exist = admins.find((a) => a.email === email);
    if (exist) {
      alert("Email sudah terdaftar!");
      return;
    }

    admins.push({ email, password });
    localStorage.setItem("admins", JSON.stringify(admins));

    alert("Admin berhasil daftar!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-white/10 p-8 rounded-2xl w-96">
        <h2 className="text-xl font-bold mb-4">Register Admin</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-white/20"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-white/20"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-emerald-500 py-3 rounded-xl"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}

export default Register;