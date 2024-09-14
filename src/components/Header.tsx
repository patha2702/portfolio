import React from "react";
import Image from "next/image";
import { Moon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full py-4 px-8 flex justify-between items-center border-b bg-white/30 rounded-lg shadow-sm backdrop-blur-sm ring-1 ring-black/5">
      <div></div>
      <Moon width={40} height={40} strokeWidth={0.5} />
    </header>
  );
};

export default Header;
