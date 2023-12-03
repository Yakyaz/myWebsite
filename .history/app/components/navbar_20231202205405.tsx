import Link from "next/link";
import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-between items-center p-6 bg-transparent">
      <li className="ml-4">
        <Toggle />
      </li>
      <li>
        <Link href="/home">home</Link>
      </li>
      <li>
        <Link href="/about">about me</Link>
      </li>
      <li className="mr-4">
        <Link href="/projects">projects</Link>
      </li>
    </ul>
  );
};

export default Navbar;
