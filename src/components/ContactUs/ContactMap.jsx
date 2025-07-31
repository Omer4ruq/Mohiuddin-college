export default function ContactMap({map}) {
  
    return (
      <div className="mb-8">
      <iframe
        src={map}
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg"
        title="School Location Map"
      ></iframe>
    </div>

    );
}