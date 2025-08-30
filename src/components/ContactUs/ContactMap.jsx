// Updated ContactMap.jsx
export default function ContactMap({map}) {
  return (
    <div className="w-full h-full min-h-[600px] flex items-center justify-center p-6">
      <div className="w-full lg:h-[850px] h-[550px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
        <iframe
          src={map}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
          title="School Location Map"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
  );
}