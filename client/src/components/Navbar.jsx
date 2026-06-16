function Navbar() {
  return (
    <div className="h-16 bg-slate-800 border-b border-slate-700 flex items-center justify-between px-6">
      <h1 className="text-white text-2xl font-bold">
        Ludo Platform
      </h1>

      <div className="flex items-center gap-4">
        <div className="text-white">
          ₹500
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;