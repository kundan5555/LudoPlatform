function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 min-h-screen p-5">
      <h2 className="text-white text-xl font-bold mb-8">
        Menu
      </h2>

      <div className="flex flex-col gap-4">
        <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg text-left">
          Dashboard
        </button>

        <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg text-left">
          Wallet
        </button>

        <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg text-left">
          Matches
        </button>

        <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg text-left">
          History
        </button>

        <button className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-lg text-left">
          Profile
        </button>
      </div>
    </div>
  );
}

export default Sidebar;