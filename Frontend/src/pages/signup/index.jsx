import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupApi } from "../../services/authService";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupHandler = async () => {
    const data = await signupApi(email, password);

    if (data.message === "Signup successful") {
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[350px] bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Signup
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
          onClick={signupHandler}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Signup
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
