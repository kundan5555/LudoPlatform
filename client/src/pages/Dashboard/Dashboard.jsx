function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Ludo Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Wallet Card */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
        }}
      >
        <h2>Wallet Balance</h2>
        <h1>₹ 500</h1>
      </div>

      {/* Match Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Total Matches</h3>
          <h1>25</h1>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Wins</h3>
          <h1>18</h1>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Losses</h3>
          <h1>7</h1>
        </div>
      </div>

      {/* Active Matches */}
      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <h2>Active Matches</h2>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div
            style={{
              background: "#334155",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            Match #1001 — ₹50 Entry
          </div>

          <div
            style={{
              background: "#334155",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            Match #1002 — ₹100 Entry
          </div>

          <div
            style={{
              background: "#334155",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            Match #1003 — ₹200 Entry
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;