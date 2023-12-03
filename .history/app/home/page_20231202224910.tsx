import Link from "next/link";
import Navbar from "../components/navbar";
import Icon from "@mdi/react";
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiReddit } from "@mdi/js";
function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div
        className="bg-green-900 w-11/12 flex justify-center items-center "
        style={{ height: "90%" }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="border rounded-full mb-3 bg-green-300 h-36 w-36 text-center">
            picture
          </div>
          <div className="flex flex-row space-x-4 border border-x-0 border-dashed border-spacing-2">
            <a href="https://github.com/It3chii">
              <Icon path={mdiGithub} size={2} />
            </a>
            <a href="https://www.instagram.com/yakupwrld_/">
              <Icon path={mdiInstagram} size={2} />
            </a>
            <a href="https://www.linkedin.com/in/yakup-yazir-aa9a61247/">
              <Icon path={mdiLinkedin} size={2} />
            </a>
            <a href="https://www.reddit.com/user/It3chii">
              <Icon path={mdiReddit} size={2} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
