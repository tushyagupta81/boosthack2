import hamburger from "../assets/icons/hamburger.svg";
import { useState } from "react";
const Nav = () => {
  const [hamburgerClasses, setHamburgerClasses] = useState("hidden");
  function showHamburger() {
    if (hamburgerClasses === "hidden") {
      setHamburgerClasses(
        "p-4 border-2 border-black mt-4 rounded-md w-fit float-right md:hidden",
      );
    } else {
      setHamburgerClasses("hidden");
    }
  }
  return (
    <header className="py-6 z-10 w-full px-4">
      <nav className="flex justify-between items-center mx-auto">
        <div className="ml-5 cursor-pointer">
          <img
            src="https://cdn.dribbble.com/users/8322394/screenshots/16257129/media/52e02c3a2da5974e1f9d0d27de7ae5cb.jpg"
            alt="random logo"
            width={80}
            className="rounded-full"
          />
        </div>
        <ul
          className="flex gap-16 text-xl font-sans max-md:hidden"
          id="nav-items"
        >
          <li className="cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about-us">About us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#join-us">Join us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
        <div className="flex gap-5 mr-5 max-md:hidden text-xl cursor-pointer">
          <div>Login</div>
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
        <ul className="gap-20 text-xl font-sans text-right">
          <li className="cursor-pointer border-b-2 border-b-gray-300">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer border-b-2 border-b-gray-300">
            <a href="#about-us">About us</a>
          </li>
          <li className="cursor-pointer border-b-2 border-b-gray-300">
            <a href="#join-us">Join us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
