import { useEffect, useMemo, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { hockeyVideos } from "../data/content";

export default function VideosPage() {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = useMemo(() => hockeyVideos[activeIndex], [activeIndex]);
  const initialVideo = hockeyVideos[0];

  useEffect(() => {
    if (!videoRef.current || playerRef.current) {
      return undefined;
    }

    let isMounted = true;

    const setupPlayer = async () => {
      if (typeof window !== "undefined") {
        window.videojs = videojs;
      }

      await import("videojs-youtube");

      if (!isMounted || !videoRef.current) {
        return;
      }

      playerRef.current = videojs(videoRef.current, {
        controls: true,
        fluid: true,
        responsive: true,
        preload: "auto",
        techOrder: ["youtube"],
        sources: [
          {
            type: "video/youtube",
            src: initialVideo.url,
          },
        ],
      });
    };

    void setupPlayer();

    return () => {
      isMounted = false;
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [initialVideo.url]);

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }

    playerRef.current.src({
      type: "video/youtube",
      src: activeVideo.url,
    });
  }, [activeVideo]);

  return (
    <section className="stack-lg">
      <div>
        <h2>Video Library</h2>
        <p className="muted">
          Watch demo videos and highlights from the Hockey AI research ecosystem.
        </p>
      </div>

      <div className="video-layout">
        <div className="video-player card">
          <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-big-play-centered" />
          </div>
          <div className="video-meta">
            <p className="eyebrow">Now playing</p>
            <h3>{activeVideo.title}</h3>
            <p>{activeVideo.description}</p>
          </div>
        </div>

        <aside className="video-playlist card">
          <p className="eyebrow">Playlist</p>
          <div className="stack-sm">
            {hockeyVideos.map((video, index) => (
              <button
                key={video.url}
                type="button"
                className={index === activeIndex ? "video-item video-item-active" : "video-item"}
                onClick={() => setActiveIndex(index)}
                aria-pressed={index === activeIndex}
              >
                <span className="video-item-title">{video.title}</span>
                <span className="video-item-note">{video.note}</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
