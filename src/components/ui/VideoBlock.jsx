import React from 'react';

/*
  Lightweight video component with sensible defaults for background/hero videos.
  - Use MP4 (H.264) + WebM sources when possible for broader compatibility
  - Provide a poster image for fast paint and better LCP
  - Keep videos short and under ~10–20MB; consider CDN for larger files
*/
const VideoBlock = ({
  src,
  webm,
  poster,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  playsInline = true,
  preload = 'metadata',
  ...rest
}) => {
  return (
    <video
      className={className}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      controls={false}
      {...rest}
    >
      {webm && <source src={webm} type="video/webm" />}
      {src && <source src={src} type="video/mp4" />}
      {/* Fallback text */}
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBlock;
