import Link from "next/link";
import React from "react";
import Toggle from "./components/toggle";

const Navbar = () => {
  return (
    <ul>
      <li>
        <ToggleMode />
      </li>
      <li>
        <Link href="/">home</Link>
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
