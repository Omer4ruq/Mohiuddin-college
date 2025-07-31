export default function YoutubeVideo({ videoId }) {
  return (
    <div className="video-container w-full">
      <iframe
        width="100%"
        height="420"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube video"
      />
    </div>
  );
}
