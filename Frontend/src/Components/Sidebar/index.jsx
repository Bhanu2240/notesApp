import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const getStyle = ({ isActive }) => {
        const styles='flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full ';
        return isActive? `text-slate-50 bg-indigo-800 ${styles}` : `hover:bg-indigo-800 hover:text-slate-50 ${styles}`;
    }
  return (
    <aside className="flex flex-col gap-4 border-2 border-gray-200 p-4 w-52 h-screen">

      <NavLink to="/" className={getStyle}>
        <span className="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>

      <NavLink to="/archive" className={getStyle}>
        <span className="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>

      <NavLink to="/favorites" className={getStyle}>
        <span className="material-icons-outlined">star_outline</span>
        <span>Favorities</span>
      </NavLink>

      <NavLink to="/bin" className={getStyle}>
        <span className="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>

    </aside>
  );
};

export default Sidebar;
