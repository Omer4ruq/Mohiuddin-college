import React from "react";
import Slider from "react-slick";
import staffData from "../../data/staffData";

// Auto slider for teachers — bigger cards + header style inspired by OurPride
// Uses react-slick, TailwindCSS
export default function TeachersSlider() {
  const teachers = staffData.current_teachers || [];

  const settings = {
    infinite: true,
    slidesToShow: 3, // fewer per view so cards can be larger
    slidesToScroll: 1,
    autoplay: true,
    speed: 2200,
    autoplaySpeed: 2200,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Title block — pulls visual cues from OurPride (icon + heading) */}
        <header className="mb-10 flex items-center gap-3">
          <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-indigo-600/10 text-indigo-700">
            {/* star icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M12 2l2.7 6.6 7.1.6-5.4 4.6 1.7 6.9L12 16.9 5 20.7l1.7-6.9L1.3 9.2l7.1-.6L12 2z"/>
            </svg>
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800">Our Teachers</h2>
            <div className="mt-2 h-1 w-24 rounded-full bg-indigo-200" />
            <p className="mt-2 text-sm text-slate-500">Meet our dedicated teaching staff</p>
          </div>
        </header>

        <Slider {...settings} className="[&_.slick-track]:flex [&_.slick-slide]:h-auto">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="px-4">
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
                <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-2xl ring-2 ring-indigo-100">
                  <img
                    src={teacher.image_url}
                    alt={teacher.name_english}
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/160"; }}
                  />
                </div>
                <h3 className="text-xl font-semibold leading-tight text-slate-800">
                  {teacher.name_english}
                </h3>
                <p className="mt-1 text-base text-slate-500">{teacher.title_english}</p>

                {/* subtle meta row */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">Faculty</span>
                  <span>•</span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
