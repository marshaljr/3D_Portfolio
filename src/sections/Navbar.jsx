import React from "react";
import navLinks from "../constants/index";
// import logo from "/assets/logo.png";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name, icon, style, delay }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a flex items-center hover:text-yellow-400 transition"
            aria-label={`Navigate to ${name} section`}>
            <lord-icon
              src={icon}
              trigger="loop"
              colors={style.colors}
              delay={delay}
              style={{
                width: style.width,
                height: style.height,
                marginRight: "0.4rem",
              }}></lord-icon>
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  // Close mobile menu on escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md"
      id="navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-3 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors flex items-center"
            aria-label="Marshal - Home">
            <lord-icon
              src="https://cdn.lordicon.com/shcfcebj.json"
              trigger="loop"
              colors="primary:#b4b4b4,secondary:#eeca66"
              style={{
                width: "28px",
                height: "28px",
                paddingTop: "4px",
                paddingRight: "2rem",
              }}></lord-icon>
            <span>Marshal</span>
            {/* {logo && (
              <img
                src={logo}
                alt="logo"
                className="w-16 h-14 inline-block ml-2 mr-2 rounded-full hover:scale-105 transition-transform"
              />
            )} */}
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex p-3 min-w-[44px] min-h-[44px] items-center justify-center"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}>
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt={isOpen ? "Close navigation menu" : "Open navigation menu"}
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden" aria-label="Main navigation">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}
        role="navigation"
        aria-label="Mobile navigation">
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
