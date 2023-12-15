import React, { useState } from "react";

const navbarLinks = [
  { displayName: "Home", href: "/" },
  { displayName: "Oil Soaps", href: "/oil-soaps" },
  { displayName: "Glycerin Soaps", href: "/glycerin-soaps" },
  { displayName: "Bath", href: "/bath" },
  { displayName: "Face & Body", href: "/face-and-body" },
  { displayName: "Candles", href: "/candles" },
  { displayName: "Gifting", href: "/gifting" },
];

const MenuIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7 "
      viewBox="0 0 20 20"
      fill="black"
    >
      <path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      />
    </svg>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const fromEarthLogoURL =
    process.env.PUBLIC_URL + "/images/from-earth-logo.jpg";

  return (
    <nav className="">
      <div className="h-12 w-full bg-headerPurple flex justify-center items-center">
        <p className="font-bold text-white">FROM EARTH</p>
      </div>
      <div className="p-4 lg:px-10 container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={fromEarthLogoURL} width="60" height="60" />
        </a>
        <div className="hidden md:flex space-x-4">
          {navbarLinks.map((item) => {
            return (
              <a
                className="text-lg text-black hover:text-green-900 hover:underline"
                href={item.href}
              >
                {item.displayName}
              </a>
            );
          })}
        </div>
        {/* Add a responsive menu button for smaller screens */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <MenuIconSvg />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 pb-5">
            {navbarLinks.map((item) => {
              return (
                <a
                  className="text-lg text-black text-right pr-5"
                  href={item.href}
                >
                  {item.displayName}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
