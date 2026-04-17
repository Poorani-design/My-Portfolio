import React, { useState } from "react";

const Navbar = () => {
  const links = [
    { name: "About", navLink: "#about" },
    { name: "Skills", navLink: "#skills" },
    { name: "Roadmap", navLink: "#roadmap" },
    { name: "Projects", navLink: "#projects" },
    { name: "Contact", navLink: "#contact" },
  ];
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
    return !theme
      ? document.documentElement.classList.add("light")
      : document.documentElement.classList.remove("light");
  };
  return (
    <>
      <nav className="flex md:flex-row sm:flex-col items-center justify-between w-full  sm:h-30 md:h-15 p-3 my-2 h-[15vh] z-10 mx-3px">
        <div className="text-yellow flex flex-col sm:flex-row py-2 lg:flex-row sm:text-center  md:text-left  md:items-left gap-1 lg:gap-2 md:justify-start text-3xl heading-1 ">
          <div>Poorani</div>
          <div>Gunasekaran</div>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <div className="justify-between items-center nav-links sm:block hidden">
            <ul className="flex justify-between text-center items-center gap-2 md:gap-3 lg:gap-4 px-4">
              {links.map((link) => {
                return (
                  <li
                    className="text-main hover-yellow nav-link"
                    key={link.name}
                  >
                    <a href={link.navLink}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div onClick={() => toggleTheme()}>
            {" "}
            <span className="opacity-0 sm:opacity-50 mx-2 h-full border border-left "></span>
            {!theme && (
              <>
                <span className="text-switcher text-2xl cursor-pointer heading-3">
                  🌙
                </span>
              </>
            )}
            {theme && (
              <>
                <span className="text-switcher text-2xl cursor-pointer heading-3">
                  ☀️
                </span>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
