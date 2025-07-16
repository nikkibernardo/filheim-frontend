import React, { useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAlert, useUser } from "../hooks/Hooks";

function Navbar() {
  const { dispatchAlert } = useAlert();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="border-gray-200 dark:bg-gray-900 pt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a 
          href="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span 
            className="self-center text-2xl font-semibold whitespace-nowrap text-white"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            FILHEIM
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link
  to="/contact"
  className="text-white bg-white/10 hover:bg-white/20 focus:ring-4 focus:outline-none focus:ring-white/30 font-semibold rounded-sm text-sm px-4 py-2 text-center border border-white transition duration-200"
>
  CONTACT US
</Link>

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            ref={buttonRef}
          >
            <span className="sr-only">
              Open main menu
            </span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div 
          className={`items-center justify-between ${menuOpen ? '' : 'hidden'} w-full md:flex md:w-auto md:order-1`} 
          id="navbar-cta"
          ref={menuRef}
        >
          <ul className={`flex flex-col font-medium p-4 md:p-0 mt-1 ${menuOpen ? 'border rounded-sm border-gray-800 bg-gray-900/50 dark:bg-gray-900 shadow-lg' : ''} md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li className={menuOpen ? "hover:bg-white/10 rounded transition-colors" : ""}>
              <a 
                href="/" 
                className="block py-2 px-3 md:p-0 text-white font-normal hover:font-semibold hover:text-white"
              >
                HOME
              </a>
            </li>
            <li className={menuOpen ? "hover:bg-white/10 rounded transition-colors" : ""}>
              <a 
                href="/collection"  
                className="block py-2 px-3 md:p-0 text-white font-normal hover:font-semibold hover:text-white"
              >
                COLLECTIONS
              </a>
            </li>
            <li className={menuOpen ? "hover:bg-white/10 rounded transition-colors" : ""}>
              <a 
                href="/services" 
                className="block py-2 px-3 md:p-0 text-white font-normal hover:font-semibold hover:text-white"
              >
                SERVICES
              </a>
            </li>
            <li className={menuOpen ? "hover:bg-white/10 rounded transition-colors" : ""}>
              <a 
                href="/about" 
                className="block py-2 px-3 md:p-0 text-white font-normal hover:font-semibold hover:text-white"
              >
                ABOUT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
