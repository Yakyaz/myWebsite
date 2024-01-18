import { NextApiRequest, NextApiResponse } from "next";
import { SpotifyService } from "spotify-now-playing";
export const revalidate = 20;

const Spotify = async () => {
  const spotify = new SpotifyService(
    "532ab0366abb482b9af90ed85cf6f2ce",
    "d28df87ae6be4465ad2d444eeaa3472f",
    "AQC9ig3suhO8zCjaRDxSMKHVaSyH7KwwsQTYn7KBsXZ-S1WGDEKHOW6-xfYo0cvzNfm4wxZxY-9J2qkk6Lku__S3pruoaCVG9ik0NX3Fihw-AQm5s1zOAcMAdqR1ErUZrKk"
  );
  const song = await spotify.getCurrentSong();

  if (!song) return <p></p>;

  return (
    <div className="  sm:flex sm:justify-center sm:items-center">
      <div className=" justify-center  flex flex-row items-center mt-2  bg-gray-300 w-60 p-2 bg-opacity-20  shadow-xl border rounded-3xl border-gray-600">
        <img
          className="w-20 h-20 rounded-full border border-gray-500 "
          src={song.album?.image || "https://cdn.albert.lol/964d7fc6"}
        />
        <p className="text-sm ml-6">
          <p>{song.title}</p>
        </p>
      </div>
    </div>
  );
};

export default Spotify;
