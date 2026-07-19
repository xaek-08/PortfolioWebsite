import { Link, NavLink } from "react-router-dom";

const navLink =
  "px-2 py-2 border-b-2 border-transparent hover:border-pink-300 transition-colors text-sm text-gray-700";

function Navbar() {
  return (
    <div className="bg-mist-100 shadow-sm px-6 py-6 flex items-center justify-between sticky top-0 z-50">
      {/* LEFT */}
      <Link to="/home" className={navLink}>
        <h1>TechWithP</h1>
      </Link>

      {/* CENTER */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `${navLink} ${isActive ? "border-pink-300 text-pink-500" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${navLink} ${isActive ? "border-pink-300 text-pink-500" : ""}`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `${navLink} ${isActive ? "border-pink-300 text-pink-500" : ""}`
          }
        >
          Blogs
        </NavLink>
      </div>

      {/* RIGHT */}
      <div className="flex items-center bg-gray-100 border border-gray-400 rounded-full px-4 py-2 w-[400px] focus-within:border-pink-300">
        <span className="text-gray-300 mr-2">🔍</span>
        <input
          type="text"
          placeholder="Search...."
          className="bg-transparent text-sm outline-none w-full"
        />
      </div>
    </div>
  );
}

export default Navbar;