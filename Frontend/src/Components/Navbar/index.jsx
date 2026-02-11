import React from 'react';
import { useAuth } from "../../context/auth.context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const { dispatch } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <header className="flex items-center border-b-2 border-gray-100 px-4 py-1 gap-3">
      <img
        className="w-12 h-12"
        src="https://play-lh.googleusercontent.com/vSNQds6F5roxdN4-a16JnQ9dWQVSZZ8OH4-iMAcNLaFQd3ItZWU8rOPOql4Ew5Hh1esX"
        alt="Notes App Logo"
      />

      <h1 className="text-indigo-800 text-4xl font-semibold">
        NotesApp
      </h1>
       <button className='ml-auto bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500' onClick={logoutHandler}>Logout</button>
    </header>
  );
};

export default Navbar;

