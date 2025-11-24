'use client';

interface YouTubeEmbedProps {
  videoId: string;
}

export default function YouTubeEmbedComponent({ videoId }: YouTubeEmbedProps) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full pointer-events-none scale-[1.35]"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
} 