import Link from "next/link";
import Navbar from "../components/navbar";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div
        className="bg-green-900 w-11/12 flex justify-center items-center "
        style={{ height: "90%" }}
      >
        <div className="flex flex-col ">
          <div>pb</div>
          <div className="flex flex-row justify-between">
            <a href="github.com">
              <Icon path={mdiGithub} size={2} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
