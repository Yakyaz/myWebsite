export default function () {
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

      <p>Album: {song.album?.name}</p>
      <p>Release: {song.album?.releaseDate}</p>
    </div>
  );
}
