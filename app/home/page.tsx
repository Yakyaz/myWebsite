import Link from "next/link";
import Icon from "@mdi/react";
import { mdiGithub, mdiInstagram, mdiLinkedin, mdiReddit } from "@mdi/js";
import Image from "next/image";
import pb from "public/pb.png";
import Spotify from "@/components/spotify";
export const revalidate = 20;

function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center ">
      <div
        className="w-11/12 flex justify-center items-center "
        style={{
          height: "90%",
        }}
      >
        <div className="flex flex-col justify-center items-center ">
          <div className="border rounded-full mb-3 h-36 w-36 text-center ">
            <Image
              className="border rounded-full mb-3 h-36 w-36 text-center "
              alt="Pb"
              src={pb}
              placeholder="blur"
              quality={100}
              sizes="100%"
            />
          </div>

          <div className="text-center">
            <h1>Yakup / It3chii</h1>
            <h4>"newbie Developer"</h4>
          </div>
          <div className="flex flex-row space-x-4 border border-x-0 mt-3 p-3">
            <a
              href="https://github.com/Yakyaz  "
              className="text-gray-100 hover:text-zinc-800 "
            >
              <Icon path={mdiGithub} size={2} />
            </a>
            <a
              href="https://www.instagram.com/yakupwrld_/"
              className="text-gray-100 hover:text-zinc-800 "
            >
              <Icon path={mdiInstagram} size={2} />
            </a>
            <a
              href="https://www.linkedin.com/in/yakup-yazir-aa9a61247/"
              className="text-gray-100 hover:text-zinc-800 "
            >
              <Icon path={mdiLinkedin} size={2} />
            </a>
            <a
              href="https://www.reddit.com/user/It3chii"
              className="text-gray-100 hover:text-zinc-800 "
            >
              <Icon path={mdiReddit} size={2} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen h-52 mb-12 ">
        <Spotify />
      </div>
    </main>
  );
}

export default Home;
