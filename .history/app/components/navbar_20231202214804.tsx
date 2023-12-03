"use client";
import Link from "next/link";
import React from "react";
import Toggle from "./toggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row justify-between items-center p-2 pr-12 pl-12 border-b border-black shadow-xl">
      <li>
        <Toggle />
      </li>
      <li>
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          <a className="btn m-1">Home</a>
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`link ${pathname === "/about" ? "active" : ""}`}
        >
          <a className="btn m-1">About</a>
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={`link ${pathname === "/projects" ? "active" : ""}`}
        >
          <a className="btn m-1">Projects</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
