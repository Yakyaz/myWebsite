import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-between items-center p-2 pr-12 pl-12 border-b border-black shadow-xl bg-black-500">
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
