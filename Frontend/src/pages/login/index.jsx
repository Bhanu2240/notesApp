import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginApi } from "../../services/authService";
import { useAuth } from "../../context/auth.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  const loginHandler = async () => {
    const data = await loginApi(email, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      dispatch({ type: "LOGIN", payload: data.user });
      navigate("/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-indigo-600"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-indigo-600"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={loginHandler}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
