import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <div className="flex justify-between items-center bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl mb-8 shadow-lg text-white">
      <h1 className="text-2xl font-bold text-amber-400">
        {title}
      </h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-amber-400">
          Home
        </Link>
        <Link to="/admin" className="hover:text-amber-400">
          Admin
        </Link>
      </div>
    </div>
  );
}

export default Header;