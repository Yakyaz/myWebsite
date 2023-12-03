import Link from "next/link";
import React from "react";
import Toggle from "./toggle";

const Navbar = () => {
  return (
    <table>
      <tr>
        <td>
          <Toggle />
        </td>
      </tr>
      <tr>
        <td>
          <Link href="/home">Home</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link href="/about">About Me</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link href="/projects">Projects</Link>
        </td>
      </tr>
    </table>
  );
};

export default Navbar;
