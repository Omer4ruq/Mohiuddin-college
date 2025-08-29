import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, BarChart3, Building2, ChevronRight, Search } from "lucide-react";
import LoginButton from "../common/Header/LoginButton";

// 📌 Pure TSX (no explicit TypeScript types). Tailwind-based, production-ready single file.
// Drop this into your React app and route it as an Admin page.

const PRINCIPAL_NAME = "Md. Sajjad Hossain"; // fake principal name

const PROGRAMS = [
  { id: "xi", label: "Class XI (11th Grade)" },
  { id: "xii", label: "Class XII (12th Grade)" },
  { id: "bss", label: "Degree BSS" },
  { id: "ba", label: "BA Program" },
];

const STATS = [
  { id: "students", label: "Total Students", value: 2417, icon: Users },
  { id: "teachers", label: "Total Teachers", value: 86, icon: GraduationCap },
  { id: "departments", label: "Departments", value: 12, icon: Building2 },
  { id: "passrate", label: "Pass Rate", value: "96.4%", icon: BarChart3 },
];

// Fake teacher dataset keyed by program id
const TEACHERS = [
  { id: "t1", name: "Ahsan Kabir", subject: "Physics", program: "xi" },
  { id: "t2", name: "Farhana Rahman", subject: "Chemistry", program: "xi" },
  { id: "t3", name: "Sabbir Ahmed", subject: "Mathematics", program: "xii" },
  { id: "t4", name: "Nadia Akter", subject: "Biology", program: "xii" },
  { id: "t5", name: "Shahriar Chowdhury", subject: "Sociology", program: "bss" },
  { id: "t6", name: "Rokeya Begum", subject: "Political Science", program: "bss" },
  { id: "t7", name: "Imran Hossain", subject: "English Literature", program: "ba" },
  { id: "t8", name: "Jannatul Ferdaus", subject: "Bangla Literature", program: "ba" },
  { id: "t9", name: "Tanvir Islam", subject: "ICT", program: "xi" },
  { id: "t10", name: "Mahmudul Hasan", subject: "Economics", program: "xii" },
];

export default function AdminOverview() {
  const [selectedProgram, setSelectedProgram] = useState(PROGRAMS[0].id);
  const [query, setQuery] = useState("");

  const filteredTeachers = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TEACHERS.filter((t) =>
      t.program === selectedProgram &&
      (!q || t.name.toLowerCase().includes(q) || t.subject.toLowerCase().includes(q))
    );
  }, [selectedProgram, query]);

  const programLabel = useMemo(() => PROGRAMS.find(p => p.id === selectedProgram)?.label || "", [selectedProgram]);

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600" />
            <div>
              <h1 className="text-xl font-semibold tracking-tight">University Admin</h1>
              <p className="text-xs text-slate-500">Control panel for your institute</p>
            </div>
          </div>
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
          >
           <LoginButton></LoginButton>
          </a>
        </div>
      </header>

      {/* Hero / Principal */}
      <section className="bg-gradient-to-b from-indigo-50 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="col-span-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop"
                  alt="Principal"
                  className="h-16 w-16 rounded-xl object-cover"
                />
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Principal</p>
                  <h2 className="text-lg font-semibold">{PRINCIPAL_NAME}</h2>
                  <p className="mt-1 text-sm text-slate-600">Administrative Head of the Institute</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-slate-500">Office</p>
                  <p className="font-medium">Main Academic Building</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-slate-500">Email</p>
                  <p className="font-medium">principal@univ.edu</p>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="col-span-2 grid grid-cols-2 gap-4 md:grid-cols-4"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 * i }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-slate-100 p-2">
                      {React.createElement(s.icon, { className: "h-5 w-5" })}
                    </div>
                    <span className="text-xs font-medium text-indigo-600">Live</span>
                  </div>
                  <div className="mt-4 text-2xl font-semibold tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm text-slate-500">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teachers by Program */}
      <section>
        <div className="mx-auto max-w-7xl px-4 pb-14">
          <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Teachers</h3>
              <p className="text-sm text-slate-500">Select a class/program to view teachers</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <div className="relative">
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-64 appearance-none rounded-xl border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p.id} value={p.id}>{p.label}</option>
                  ))}
                </select>
                <ChevronRight className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
              <div className="relative">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search teacher or subject..."
                  className="w-72 rounded-xl border border-slate-300 bg-white pl-10 pr-3 py-2.5 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                />
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="mb-3 text-sm text-slate-500">Showing teachers for: <span className="font-medium text-slate-700">{programLabel}</span></div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTeachers.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-indigo-100 text-indigo-700 grid place-items-center font-semibold">
                    {t.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                  </div>
                  <div>
                    <h4 className="font-medium leading-tight">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.subject}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {filteredTeachers.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
                No teachers found for this filter.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Your University — Admin Panel
         
        </div>

      </footer>
    </div>
  );
}
