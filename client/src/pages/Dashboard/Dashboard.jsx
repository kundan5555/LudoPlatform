import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <h1 className="text-white text-3xl font-bold mb-6">
            Dashboard
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-gray-400 mb-2">
                Wallet Balance
              </h2>

              <h1 className="text-white text-3xl font-bold">
                ₹500
              </h1>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-gray-400 mb-2">
                Total Matches
              </h2>

              <h1 className="text-white text-3xl font-bold">
                25
              </h1>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h2 className="text-gray-400 mb-2">
                Total Wins
              </h2>

              <h1 className="text-white text-3xl font-bold">
                18
              </h1>
            </div>
          </div>

          {/* Active Matches */}
          <div className="bg-slate-800 mt-8 p-6 rounded-2xl">
            <h2 className="text-white text-2xl font-bold mb-4">
              Active Matches
            </h2>

            <div className="flex flex-col gap-4">
              <div className="bg-slate-700 p-4 rounded-lg text-white">
                Match #1001 — ₹50 Entry
              </div>

              <div className="bg-slate-700 p-4 rounded-lg text-white">
                Match #1002 — ₹100 Entry
              </div>

              <div className="bg-slate-700 p-4 rounded-lg text-white">
                Match #1003 — ₹200 Entry
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;