import React from "react";

const navbarlink = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Contacto", link: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 sm:px-10 py-3">
        <h2 className="text-xl sm:text-2xl font-semibold">Portfolio</h2>

        <h2 className="title-font tracking-wider text-2xl sm:text-3xl">
          SOFIA NUNEZ
        </h2>

        <ul className="flex gap-8 items-center">
          {navbarlink.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-lg sm:text-xl text-white hover:text-yellow-300 transition-all duration-300"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;