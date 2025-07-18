'use client';

import { YouTubeEmbed as NextYouTubeEmbed } from '@next/third-parties/google';

interface YouTubeEmbedProps {
  videoId: string;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps) {
  return (
    <NextYouTubeEmbed
      videoid={videoId}
      height={400}
      width={720}
    />
  );
} 