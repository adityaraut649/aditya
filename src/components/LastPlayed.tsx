
export default function LastPlayed() {
  return (
    <p className="flex min-w-0 items-center gap-1.5 text-sm text-zinc-500">
     <img
        src="/spotify.svg"
        alt="Spotify"
        className="h-4 w-4 shrink-0"
    />

      <span className="shrink-0 font-medium text-zinc-300">
        Last played
      </span>

      <span className="shrink-0">—</span>

      <a
        href="https://open.spotify.com/track/6RZwj2PZDqM6g7gmO6bOxw"
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-w-0 flex-1 items-center gap-0.5 overflow-hidden text-zinc-300 hover:underline underline-offset-2"
      >
        <span className="shrink-0">Do Dhaari Talwaar</span>

        <span className="shrink-0">·</span>

        <span className="min-w-0 truncate text-zinc-500">
          Sohail Sen, Shahid Mallya, Shweta Pandit, Irshad Kamil
        </span>
      </a>
    </p>
  );
}