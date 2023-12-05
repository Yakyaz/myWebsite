import { NextApiRequest, NextApiResponse } from "next";
import { SpotifyService } from "spotify-now-playing";

const Spotify = async () => {
  const spotify = new SpotifyService(
    "532ab0366abb482b9af90ed85cf6f2ce",
    "d28df87ae6be4465ad2d444eeaa3472f",
    "AQC9ig3suhO8zCjaRDxSMKHVaSyH7KwwsQTYn7KBsXZ-S1WGDEKHOW6-xfYo0cvzNfm4wxZxY-9J2qkk6Lku__S3pruoaCVG9ik0NX3Fihw-AQm5s1zOAcMAdqR1ErUZrKk"
  );
  const song = await spotify.getCurrentSong();

  if (!song) return <p></p>;

  return (
    <div className="ml-10">
      <p> Listening to: </p>
      <div className="flex flex-row items-center mt-2  bg-gray-200 w-60 p-2 bg-opacity-20 shadow-2xl">
        <img
          className="w-20 h-20"
          src={song.album?.image || "https://cdn.albert.lol/964d7fc6"}
        />
        <p className="text-sm ml-6">
          <b>{song.title}</b>
        </p>
      </div>
    </div>
  );
};

export default Spotify;
