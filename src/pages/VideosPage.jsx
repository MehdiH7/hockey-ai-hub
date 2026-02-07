import { useMemo, useState } from "react";
import { hockeyVideos } from "../data/content";

function toYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    const id = parsed.searchParams.get("v");
    if (id) {
      return `https://www.youtube.com/embed/${id}`;
    }

    return "";
  } catch {
    return "";
  }
}

export default function VideosPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeVideo = useMemo(() => hockeyVideos[activeIndex], [activeIndex]);
  const embedUrl = toYouTubeEmbedUrl(activeVideo?.url || "");

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
          <div className="video-frame-wrap">
            {embedUrl ? (
              <iframe
                className="video-frame"
                src={embedUrl}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <p className="muted">This video URL is not a valid YouTube link.</p>
            )}
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
