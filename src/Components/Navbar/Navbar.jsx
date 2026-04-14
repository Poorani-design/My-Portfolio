import React from "react";

const Navbar = () => {
  const links = [
    { name: "About", navLink: "#about" },
    { name: "Skills", navLink: "#skills" },
    { name: "Roadmap", navLink: "#roadmap" },
    { name: "Projects", navLink: "#projects" },
    { name: "Contact", navLink: "#contact" },
  ];
  return (
    <>
      <nav className="flex md:flex-row sm:flex-col items-center justify-between w-full  p-3 my-2 h-[15vh] z-10 mx-3px">
        <div className="heading-1 text-yellow flex flex-row md:flex-col py-2 lg:flex-row sm:text-center  md:text-left  md:items-left gap-1 lg:gap-2 md:justify-start">
            <div>Poorani</div>
            <div>Gunasekaran</div>
        </div>
        <div className="justify-between items-center nav-links sm:block hidden">
          <ul className="flex justify-between text-center items-center gap-2 md:gap-3 lg:gap-4 px-4">
            {links.map((link) => {
              return (
                <li className="text-main hover-yellow nav-link" key={link.name}>
                  <a href={link.navLink}>{link.name}</a>
                </li>
              );
            })}
            <span className="mx-1">|</span>{" "}
            <span className="text-switcher cursor-pointer heading-3">🌙</span>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
