/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
// import Box from "../sub-component/Box";
import staffData from "../../../src/data/staffData"; // uses current_teachers
import Box from "../Home/sub-component/Box";

// Small presentational card (consistent look)
function TeacherCard({ t }) {
  return (
    <div className="min-w-[220px] max-w-[220px] shrink-0 rounded-xl border border-primary/30 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="h-36 w-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
        <img
          src={t?.image_url}
          alt={t?.name_bengali || t?.name_english || "Teacher"}
          className="h-24 w-24 object-cover rounded-full border-4 border-white shadow"
        />
      </div>
      <div className="p-3 text-center">
        <h5 className="text-base font-semibold text-primary leading-tight">
          {t?.name_bengali || t?.name_english}
        </h5>
        <p className="text-sm text-gray-600 mt-0.5">
          {t?.title_bengali || t?.title_english || "শিক্ষক"}
        </p>
        {t?.subject_bengali || t?.subject_english ? (
          <p className="text-xs text-gray-500 mt-1">
            {t?.subject_bengali || t?.subject_english}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Smooth, continuous, auto-scrolling slider using scrollLeft.
 * Props:
 * - heading: Box heading text (Bangla/English)
 * - icon: heading icon (pass same style you used elsewhere)
 * - speed: pixels per frame (default 0.6). Larger => faster.
 */
export default function AllTeacherSlider({
  heading = "আমাদের বর্তমান শিক্ষকবৃন্দ",
  icon,
  speed = 0.6,
}) {
  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // Get teachers safely
  const teachers = (staffData?.current_teachers || []).filter(Boolean);

  // Duplicate list to create infinite feel
  const track = [...teachers, ...teachers];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let rafId;
    const step = () => {
      if (!paused) {
        // When we reach end, rewind seamlessly
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
              {track.map((t, idx) => (
                <TeacherCard key={`${t?.serial || idx}-${idx}`} t={t} />
              ))}
            </div>
          </div>
        </div>
      }
      colSpan="col-span-1 lg:col-span-3"
    />
  );
}
