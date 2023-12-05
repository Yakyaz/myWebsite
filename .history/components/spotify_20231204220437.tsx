import { NextApiRequest, NextApiResponse } from "next";
import { SpotifyService } from "spotify-now-playing";
import React from "react";

const Spotify = async (req: NextApiRequest, res: NextApiResponse) => {
  const spotify = new SpotifyService(
    "532ab0366abb482b9af90ed85cf6f2ce",
    "d28df87ae6be4465ad2d444eeaa3472f",
    "AQC9ig3suhO8zCjaRDxSMKHVaSyH7KwwsQTYn7KBsXZ-S1WGDEKHOW6-xfYo0cvzNfm4wxZxY-9J2qkk6Lku__S3pruoaCVG9ik0NX3Fihw-AQm5s1zOAcMAdqR1ErUZrKk"
  );
  const song = await spotify.getCurrentSong();

  return (
    <div className="">
      <p> Listening to </p>
      <div className="flex flex-row w-60 h-20 mb-96 ">
        <img src={song.album?.image || "https://cdn.albert.lol/964d7fc6"} />
        <p className="text-sm">
          <b>{song.title}</b>
        </p>
      </div>
    </div>
  );
};

export default Spotify;
