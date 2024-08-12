import { Link } from "react-router-dom";
import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
import { navlinks } from "../constants/index.js";

// eslint-disable-next-line react/prop-types
function Nav({ page }) {
  const [hamburgerClasses, setHamburgerClasses] = useState("hidden");
  function showHamburger() {
    if (hamburgerClasses === "hidden") {
      setHamburgerClasses(
        "p-4 mt-4 rounded-2xl w-fit float-right md:hidden border border-black rounded-md w-fit px-4 py-2",
      );
    } else {
      setHamburgerClasses("hidden");
    }
  }
  return (
    <header className="py-6 z-10 w-full px-4">
      <nav className="flex justify-between items-center mx-auto">
        <div className="ml-5 cursor-pointer">
          <Link to="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CoinEd</span>
            </a>
          </Link>
        </div>
        <ul
          className="flex gap-16 text-xl font-sans max-md:hidden"
          id="nav-items"
        >
          {navlinks.map((obj) => {
            if (obj.pageName === page) {
              return obj.links.map((obj, index) => {
                if (obj.link[0] === "#") {
                  return (
                    <li key={index} className="cursor-pointer">
                      <a href={obj.link}>{obj.title}</a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="cursor-pointer">
                      <Link to={obj.link}>{obj.title}</Link>
                    </li>
                  );
                }
              });
            }
          })}
        </ul>
        <div className="flex gap-5 mr-5 max-md:hidden text-xl cursor-pointer">
          {page === "home" && <Link to="/signin">Login</Link>}
          {page === "signin" && <Link to="/signup">Signup</Link>}
          {page === "signup" && <Link to="/signin">Signin</Link>}
        </div>
        <div className="hidden max-md:block">
          <button aria-controls="nav-items" aria-expanded="false">
            <img
              src={hamburger}
              alt="hamburger"
              width={40}
              onClick={() => showHamburger()}
            />
          </button>
        </div>
      </nav>
      <div className={hamburgerClasses}>
        <ul className="text-xl font-sans text-right">
          {navlinks.map((obj) => {
            if (obj.pageName === page) {
              return obj.links.map((obj, index) => (
                <li key={index} className="cursor-pointer py-1">
                  <a href={obj.link}>{obj.title}</a>
                </li>
              ));
            }
          })}
          <li className="cursor-pointer">
            <Link to={"./login"}>Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
