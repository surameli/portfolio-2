import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


const navItema = [
  { name: "Home", href: "#Home" },
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

const NavBar = () => {
  const [isscrolled, setisscrolled] = useState(false);
  const [ismenuopen, setmenuopne] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setisscrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
  return (
    <div
      className={`fixed w-full z-40 transition-all duration-300  ${
        isscrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}

        <h1 className="text-2xl font-bold text-glow ">
          Surafel <span className="text-primary">Melliyon</span>
        </h1>

        {/* Nav Items */}
        <ul className="md:flex gap-8 hidden">
          {navItema.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className=" text-foreground/80 hover:text-primary transition-color duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile size */}
        <button onClick={() => setmenuopne(!ismenuopen)} className="md:hidden p-2 text-foreground z-50" aria-label={ismenuopen ? "Close menu" : "Open menu"}>{ismenuopen ? <X size ={24}/> :<Menu size ={24}/>}</button>
        <div className={`fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${ismenuopen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none "}`}>
          <ul className="flex flex-col space-y-8 text-xl">
            {navItema.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg font-medium hover:text-primary transition-color duration-300"
                  onClick={() => setmenuopne(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
