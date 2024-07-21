const Nav = () => {
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
        <ul className="flex gap-16 text-xl font-sans max-md:hidden">
          <li className="cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="#about-us">About us</a>
          </li>
          <li className="cursor-pointer">
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
        <div className="flex gap-5 mr-5 max-md:hidden text-xl cursor-pointer">
          <div>Login</div>
        </div>
        <div className="hidden max-md:block">haburger</div>
      </nav>
    </header>
  );
};

export default Nav;
