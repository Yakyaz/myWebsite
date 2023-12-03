import Link from "next/link";
import Navbar from "../components/navbar";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
