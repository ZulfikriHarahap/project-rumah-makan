function Navbar({ setRole }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl text-cyan-400 font-bold">
        RumahMakan.id
      </h1>

      <button
        onClick={() => setRole(null)}
        className="px-4 py-2 bg-red-500 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;