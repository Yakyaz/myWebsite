import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-between items-center p-2 pr-12 pl-12  bg-zinc-400 shadow-xl ">
      <li>
        <Link className=" " href="/home">
          home
        </Link>
      </li>
      <li>
        <Link className="" href="/about">
          about me
        </Link>
      </li>
      <li>
        <Link className="" href="/projects">
          projects
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
