import Link from "next/link";
import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <ul className=" navbar bg-base-100">
      <li>
        <Toggle />
      </li>
      <li>
        <Link className="btn m-1  " href="/home">
          home
        </Link>
      </li>
      <li>
        <Link className="btn m-1" href="/about">
          about me
        </Link>
      </li>
      <li>
        <Link className="btn m-1" href="/projects">
          projects
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
