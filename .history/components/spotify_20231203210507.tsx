import { NextApiRequest, NextApiResponse } from "next";
import { SpotifyService } from "spotify-now-playing";

export default async function (req: NextApiRequest, res: NextApiResponse) {}

export default function () {
  const spotify = new SpotifyService(
    "532ab0366abb482b9af90ed85cf6f2ce",
    "d28df87ae6be4465ad2d444eeaa3472f",
    "AQC9ig3suhO8zCjaRDxSMKHVaSyH7KwwsQTYn7KBsXZ-S1WGDEKHOW6-xfYo0cvzNfm4wxZxY-9J2qkk6Lku__S3pruoaCVG9ik0NX3Fihw-AQm5s1zOAcMAdqR1ErUZrKk"
  );
  const song = await spotify.getCurrentSong();

  res.json(song);
  var { data: song } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 5 * 1000,
    fallbackData: "loading",
  });

  if (song.title && !song.isPlaying) {
    return <p>Not listening to anything</p>;
  }

  return (
    <div>
      <img
        src={song.album?.image || "https://cdn.albert.lol/964d7fc6"}
        width="150px"
        height="150px"
      />

      <p>
        Listening to <b>{song.title}</b> by {song.artist?.name || "unknown"}
      </p>
    </div>
  );
}
