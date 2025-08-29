import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Search, ChevronRight } from "lucide-react";

// Main Office Page — big cards showing university administration names
// Pure TSX (no explicit TypeScript types). TailwindCSS + Framer Motion + Lucide icons.

const SECTIONS = [
  {
    id: "executive",
    title: "Executive Office",
    desc: "Top leadership and executive oversight",
    roles: [
      { id: "principal", title: "Principal", name: "Md. Sajjad Hossain" },
      { id: "vice_principal", title: "Vice Principal", name: "Dr. Farzana Ahmed" },
      { id: "registrar", title: "Registrar", name: "Md. Kamrul Hasan" },
      { id: "controller_exam", title: "Controller of Examinations", name: "Prof. Nazmul Arefin" },
    ],
  },
  {
    id: "academic",
    title: "Academic Affairs",
    desc: "Faculties, research, and curriculum administration",
    roles: [
      { id: "dean_arts", title: "Dean, Faculty of Arts", name: "Prof. Shabnam Jahan" },
      { id: "dean_science", title: "Dean, Faculty of Science", name: "Prof. Tanjim Rahman" },
      { id: "director_research", title: "Director, Research & Publications", name: "Dr. Mahbub Karim" },
      { id: "director_admission", title: "Director, Admissions", name: "Sabina Yasmin" },
    ],
  },
  {
    id: "student_services",
    title: "Student Services",
    desc: "Discipline, welfare, counseling and student experience",
    roles: [
      { id: "proctor", title: "Chief Proctor", name: "Lt. Col. (R) Arif Hossain" },
      { id: "student_affairs", title: "Director, Student Affairs", name: "Mst. Nargis Akter" },
      { id: "counseling", title: "Head, Counseling & Career", name: "Md. Naimul Islam" },
      { id: "librarian", title: "University Librarian", name: "Tahmina Sultana" },
    ],
  },
  {
    id: "administration",
    title: "Administration & Operations",
    desc: "Finance, HR, procurement and campus operations",
    roles: [
      { id: "bursar", title: "Bursar (Finance Head)", name: "Md. Rezaul Karim" },
      { id: "accounts_head", title: "Head of Accounts", name: "Saidur Rahman" },
      { id: "hr_head", title: "Head of Human Resources", name: "Nadia Chowdhury" },
      { id: "it_director", title: "Director, IT Services", name: "Engr. Imran Hossain" },
    ],
  },
];

const allRolesFlat = SECTIONS.flatMap(s => s.roles.map(r => ({ ...r, sectionId: s.id, sectionTitle: s.title })));

export default function MainOfficePage() {
  const [q, setQ] = useState("");
  const [activeSection, setActiveSection] = useState("all");

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    const base = activeSection === "all" ? allRolesFlat : allRolesFlat.filter(r => r.sectionId === activeSection);
    if (!text) return base;
    return base.filter(r => r.name.toLowerCase().includes(text) || r.title.toLowerCase().includes(text));
  }, [q, activeSection]);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">Main Office</h1>
              <p className="text-xs text-slate-500">University Administration Directory</p>
            </div>
          </div>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
          >
            Go to Dashboard <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Filters */}
      <section className="bg-gradient-to-b from-indigo-50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">Administration</h2>
              <p className="text-sm text-slate-500">Browse by office or search by name/title</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search name or title..."
                  className="w-72 rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>

              <div className="relative">
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="w-56 appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="all">All Sections</option>
                  {SECTIONS.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
                <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Cards Grid */}
      <section>
        <div className="mx-auto max-w-7xl px-4 pb-14">
          {/* Section Blocks */}
          {SECTIONS.filter(sec => activeSection === "all" || sec.id === activeSection).map((sec, sIdx) => (
            <div key={sec.id} className="mb-10">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{sec.title}</h3>
                  <p className="text-sm text-slate-500">{sec.desc}</p>
                </div>
                <div className="text-xs text-slate-500">{sec.roles.length} roles</div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {sec.roles
                  .filter(r => !q || r.name.toLowerCase().includes(q.toLowerCase()) || r.title.toLowerCase().includes(q.toLowerCase()))
                  .map((role, idx) => (
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: (sIdx * 0.05) + (idx * 0.03) }}
                      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                    >
                      <div className="flex items-center gap-5">
                        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-indigo-100 text-indigo-700 text-xl font-bold">
                          {role.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate text-lg font-semibold leading-tight">{role.name}</h4>
                          <p className="text-sm text-slate-600">{role.title}</p>
                          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">{sec.title}</span>
                            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1">Office</span>
                          </div>
                        </div>
                      </div>

                      {/* Meta/CTA Row */}
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Team</div>
                          <div className="hidden sm:block">•</div>
                          <div>Available 9:00–17:00</div>
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:shadow-md"
                        >
                          View Profile <ChevronRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </motion.div>
                  ))}

                {(sec.roles.filter(r => !q || r.name.toLowerCase().includes(q.toLowerCase()) || r.title.toLowerCase().includes(q.toLowerCase())).length === 0) && (
                  <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
                    No matching roles in this section.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Your University — Main Office
        </div>
      </footer>
    </div>
  );
}
