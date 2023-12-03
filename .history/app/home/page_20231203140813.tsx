import Link from "next/link";
import Navbar from "../components/navbar";
import Icon from "@mdi/react";
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiReddit } from "@mdi/js";
import Image from "next/image";
import background from "public/background.png";
import pb from "public/pb.png";

function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <div
        className="w-11/12 flex justify-center items-center "
        style={{
          height: "90%",
        }}
      >
        <Image
          alt="Background"
          src={background}
          placeholder="blur"
          quality={100}
          sizes="100%"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="border rounded-full mb-3 h-36 w-36 text-center">
            <Image
              alt="Pb"
              src={pb}
              placeholder="blur"
              quality={100}
              sizes="100%"
            />
          </div>

          <div className="text-center">
            <h1>Yakup Yazir</h1>
            <h4>"Developer"</h4>
          </div>
          <div className="flex flex-row space-x-4 border border-x-0 border-dashed p-3">
            <a href="https://github.com/It3chii ">
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
