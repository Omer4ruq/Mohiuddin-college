import { useEffect, useRef, useState } from "react";
import Box from "./sub-component/Box";
// import Box from "../sub-component/Box";

// Fake alumni data (তুমি চাইলে আলাদা alumniData.js ফাইল রাখতে পারো)
const fakeAlumniData = [
  {
    id: 1,
    name: "ড. মাহমুদ হাসান",
    batch: "২০০৫",
    profession: "চিকিৎসক",
    image_url: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "ইঞ্জি. তানভীর রহমান",
    batch: "২০০৮",
    profession: "সফটওয়্যার ইঞ্জিনিয়ার",
    image_url: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "সাবরিনা আক্তার",
    batch: "২০১০",
    profession: "শিক্ষিকা",
    image_url: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 4,
    name: "মুহিবুল আলম",
    batch: "২০০৬",
    profession: "ব্যবসায়ী",
    image_url: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "নাজমা আক্তার",
    batch: "২০১২",
    profession: "সরকারি কর্মকর্তা",
    image_url: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

// Small card component
function AlumniCard({ a }) {
  return (
    <div className="min-w-[220px] max-w-[220px] shrink-0 rounded-xl border border-primary/30 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="h-36 w-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
        <img
          src={a?.image_url}
          alt={a?.name}
          className="h-24 w-24 object-cover rounded-full border-4 border-white shadow"
        />
      </div>
      <div className="p-3 text-center">
        <h5 className="text-base font-semibold text-primary leading-tight">
          {a?.name}
        </h5>
        <p className="text-sm text-gray-600 mt-0.5">ব্যাচ: {a?.batch}</p>
        <p className="text-xs text-gray-500 mt-1">{a?.profession}</p>
      </div>
    </div>
  );
}

export default function AlumniSlider({
  heading = "আমাদের প্রাক্তন শিক্ষার্থীবৃন্দ",
  icon,
  speed = 0.6,
}) {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const alumni = fakeAlumniData;
  const track = [...alumni, ...alumni]; // infinite loop feel

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let rafId;
    const step = () => {
      if (!paused) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        } else {
          el.scrollLeft += speed;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused, speed]);

  return (
    <Box
      heading={heading}
      icon={icon}
      component={
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={containerRef}
            className="overflow-x-hidden whitespace-nowrap [scrollbar-width:none]"
            style={{ scrollBehavior: "auto" }}
          >
            <div className="flex gap-4 py-2">
              {track.map((a, idx) => (
                <AlumniCard key={`${a.id}-${idx}`} a={a} />
              ))}
            </div>
          </div>
        </div>
      }
      colSpan="col-span-1 lg:col-span-3"
    />
  );
}
