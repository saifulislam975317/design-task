import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Advertisers</Link>
      </li>
      <li>
        <Link to="/">Publishers</Link>
      </li>

      <li>
        <Link to="/contact">Contact us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-slate-500  text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOption}
          <li tabIndex={0}></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
