// SpotifyComponent.tsx
"use client";
import React from "react";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const SpotifyComponent: React.FC = () => {
  const { data: song } = useSWR("/api/spotify", fetcher, {
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
};

export default SpotifyComponent;
