import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error) {
      alert(
        error?.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-slate-800 p-8 rounded-2xl w-[350px] shadow-lg"
      >
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Ludo Login
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-slate-700 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-slate-700 text-white outline-none"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition-all text-white p-3 rounded-lg font-bold"
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/register";
            }}
            className="bg-slate-700 hover:bg-slate-600 transition-all text-white p-3 rounded-lg"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;