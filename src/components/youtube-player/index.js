import React, { useRef, forwardRef } from 'react';
import YouTube from 'react-youtube';

/**
 * Extracts YouTube video ID from various URL formats
 * @param {string} urlOrId - YouTube URL or video ID
 * @returns {string} - YouTube video ID
 */
const getYouTubeId = (urlOrId) => {
  if (!urlOrId) return null;
  
  // If it's already just an ID (no slashes or special chars), return it
  if (!urlOrId.includes('/') && !urlOrId.includes('?')) {
    return urlOrId;
  }
  
  // Extract ID from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/embed\/)([^?&]+)/,
    /(?:youtube\.com\/watch\?v=)([^&]+)/,
    /(?:youtu\.be\/)([^?&]+)/,
    /(?:youtube\.com\/v\/)([^?&]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = urlOrId.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  return null;
};

/**
 * Reusable YouTube Player Component
 * @param {Object} props
 * @param {string} props.videoId - YouTube video ID or URL
 * @param {string} props.className - CSS class name
 * @param {number} props.width - Player width
 * @param {number} props.height - Player height
 * @param {Object} props.opts - YouTube player options (autoplay, controls, etc.)
 * @param {Function} props.onReady - Callback when player is ready
 * @param {Function} props.onError - Callback when player errors
 * @param {Function} props.onStateChange - Callback when player state changes
 */
const YoutubePlayer = forwardRef(({
  videoId,
  className,
  width,
  height,
  opts = {},
  onReady,
  onError,
  onStateChange,
  ...restProps
}, ref) => {
  const wrapperRef = useRef(null);
  const extractedVideoId = getYouTubeId(videoId);
  
  if (!extractedVideoId) {
    console.error('Invalid YouTube video ID or URL:', videoId);
    return null;
  }
  
  const defaultOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      modestbranding: 1,
      ...opts.playerVars,
    },
    ...opts,
  };
  
  // Calculate dimensions to maintain 16:9 aspect ratio
  const aspectRatio = 16 / 9;
  let finalWidth = width;
  let finalHeight = height;
  
  // If width is percentage, use aspect-ratio CSS for responsive design
  // BUT if height is also percentage, prioritize height to fill container
  if (typeof width === 'string' && width.includes('%')) {
    // If height is also percentage, use both width and height to fill container
    // Don't use aspectRatio when height is explicitly set to fill container
    const styleProps = { width };
    if (height && typeof height === 'string' && height.includes('%')) {
      styleProps.height = height;
      // Don't set aspectRatio when height is explicitly set to fill container
    } else {
      // Only use aspectRatio when height is not explicitly set
      styleProps.aspectRatio = `${aspectRatio}`;
    }

    return (
      <div 
        ref={(node) => {
          wrapperRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={className} 
        style={styleProps}
      >
        <YouTube
          videoId={extractedVideoId}
          opts={defaultOpts}
          onReady={onReady}
          onError={onError}
          onStateChange={onStateChange}
          {...restProps}
        />
      </div>
    );
  }
  
  // Calculate dimensions to maintain 16:9 ratio
  if (width && !height) {
    // Only width provided - calculate height
    finalHeight = width / aspectRatio;
  } else if (height && !width) {
    // Only height provided - calculate width
    finalWidth = height * aspectRatio;
  } else if (width && height) {
    // Both provided - use width and calculate height to maintain 16:9
    finalHeight = width / aspectRatio;
  } else {
    // Neither provided - use defaults with 16:9 ratio
    finalWidth = 560;
    finalHeight = 560 / aspectRatio;
  }
  
  return (
    <div 
      ref={(node) => {
        wrapperRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={className} 
      style={{ width: finalWidth, height: finalHeight }}
    >
      <YouTube
        videoId={extractedVideoId}
        opts={defaultOpts}
        onReady={onReady}
        onError={onError}
        onStateChange={onStateChange}
        {...restProps}
      />
    </div>
  );
});

YoutubePlayer.displayName = 'YoutubePlayer';

export default YoutubePlayer;

