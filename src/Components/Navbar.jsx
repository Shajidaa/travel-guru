import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-black z-50">
      <div className="flex items-center gap-2">
        <Link to={"/"} className="text-2xl font-bold">
          Travel Guru
        </Link>
      </div>

      <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 w-1/3">
        <FaSearch className="text-white/80" />
        <input
          type="text"
          placeholder="Search your Destination..."
          className="bg-transparent text-white outline-none w-full px-3 placeholder-white/60"
        />
      </div>

      <ul className="md:flex items-center gap-8 hidden">
        <NavLink className="hover:text-yellow-400">News</NavLink>
        <NavLink className="hover:text-yellow-400">Destination</NavLink>
        <NavLink className="hover:text-yellow-400">Blog</NavLink>
        <NavLink className="hover:text-yellow-400">Contact</NavLink>
        <NavLink
          to="/login"
          className="btn bg-yellow-500 hover:bg-yellow-600 border-none px-5"
        >
          Login
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
