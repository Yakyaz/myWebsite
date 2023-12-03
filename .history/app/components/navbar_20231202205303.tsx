import Link from "next/link";
import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-between items-center p-6 mr-4 ml-4 bg-transparent">
      <li>
        <Toggle />
      </li>
      <li>
        <Link href="/home">home</Link>
      </li>
      <li>
        <Link href="/about">about me</Link>
      </li>
      <li>
        <Link href="/projects">projects</Link>
      </li>
    </ul>
  );
};

export default Navbar;
