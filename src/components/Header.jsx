import React, { useState } from "react";
import { Link } from "react-router-dom";

// react icons
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export default function Header() {
  // open menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header fixed top-0 left-0 z-50 w-full">
      <div className="header__container container flex h-24 items-center justify-between">
        <Link
          to="/"
          className="header__logo font-serif text-[20px] font-semibold text-gray-900"
        >
          Travello.
        </Link>

        <div
          className={`header__menu fixed top-24 left-0 w-full origin-top bg-white py-8 px-16 text-center shadow-md transition-all duration-400 md:static md:top-0 md:flex md:w-auto md:scale-y-100 md:items-center md:gap-8 md:p-0 md:shadow-none ${
            menuOpen ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <ul className="header__list mb-8 flex flex-col gap-8 md:mb-0 md:flex-row">
            {[
              ["About", "/about"],
              ["Why Us", "/why-us"],
              ["Trips", "/trips"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <li key={url}>
                <Link
                  to={url}
                  className="header__link group relative text-[15px] font-medium leading-tight text-gray-900"
                >
                  {title}
                  <div className="absolute top-6 left-0 h-[3px] w-0 bg-blue-600 transition-all duration-400 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/register" className="header__button button">
            Register
          </Link>
        </div>

        <div
          className="header__toggle inline-flex cursor-pointer p-1 text-[1.3rem] text-gray-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? <RiMenu3Fill /> : <RiCloseFill />}
        </div>
      </div>
    </header>
  );
}
