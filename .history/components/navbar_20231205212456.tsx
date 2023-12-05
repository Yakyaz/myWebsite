import Link from "next/link";
import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <ul className="flex flex-row justify-between items-center p-2 pr-12 pl-12 border-b border-black shadow-xl join">
      <li>
        <Toggle />
      </li>
      <li>
        <input
          className="join-item btn btn-square"
          type="radio"
          name="options"
          aria-label="1"
          checked
        />
        <Link className=" " href="/home">
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
