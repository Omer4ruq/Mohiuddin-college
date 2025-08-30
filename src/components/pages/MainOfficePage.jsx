import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Search, ChevronRight } from "lucide-react";

// Main Office Page — Bangla UI & data
// Pure TSX (no explicit TypeScript types). TailwindCSS + Framer Motion + Lucide icons.

const SECTIONS = [
  {
    id: "executive",
    title: "নির্বাহী অফিস",
    desc: "শীর্ষ নেতৃত্ব ও নির্বাহী তদারকি",
    roles: [
      { id: "principal", title: "অধ্যক্ষ", name: "মোঃ সাজ্জাদ হোসেন" },
      { id: "vice_principal", title: "উপাধ্যক্ষ", name: "ডাঃ ফারজানা আহমেদ" },
      { id: "registrar", title: "রেজিস্ট্রার", name: "মোঃ কামরুল হাসান" },
      { id: "controller_exam", title: "পরীক্ষা নিয়ন্ত্রক", name: "প্রফেসর নাজমুল আরেফিন" },
    ],
  },
  {
    id: "academic",
    title: "একাডেমিক বিষয়াবলি",
    desc: "ফ্যাকাল্টি, গবেষণা ও কারিকুলাম ব্যবস্থাপনা",
    roles: [
      { id: "dean_arts", title: "ডিন, কলা অনুষদ", name: "প্রফেসর শবনম জাহান" },
      { id: "dean_science", title: "ডিন, বিজ্ঞান অনুষদ", name: "প্রফেসর তানজিম রহমান" },
      { id: "director_research", title: "পরিচালক, গবেষণা ও প্রকাশনা", name: "ডাঃ মাহবুব করিম" },
      { id: "director_admission", title: "পরিচালক, ভর্তি", name: "সাবিনা ইয়াসমিন" },
    ],
  },
  {
    id: "student_services",
    title: "ছাত্র-ছাত্রী সেবা",
    desc: "শৃঙ্খলা, কল্যাণ, কাউন্সেলিং ও শিক্ষার্থীর অভিজ্ঞতা",
    roles: [
      { id: "proctor", title: "প্রধান প্রোক্টর", name: "লে. কর্নেল (অবঃ) আরিফ হোসেন" },
      { id: "student_affairs", title: "পরিচালক, ছাত্রকল্যাণ", name: "মোছাঃ নার্গিস আক্তার" },
      { id: "counseling", title: "প্রধান, কাউন্সেলিং ও ক্যারিয়ার", name: "মোঃ নাঈমুল ইসলাম" },
      { id: "librarian", title: "লাইব্রেরিয়ান", name: "তাহমিনা সুলতানা" },
    ],
  },
  {
    id: "administration",
    title: "প্রশাসন ও অপারেশন্স",
    desc: "অর্থ, মানবসম্পদ, ক্রয় ও ক্যাম্পাস পরিচালনা",
    roles: [
      { id: "bursar", title: "বার্সার (অর্থ প্রধান)", name: "মোঃ রেজাউল করিম" },
      { id: "accounts_head", title: "হিসাব শাখার প্রধান", name: "সাইদুর রহমান" },
      { id: "hr_head", title: "মানবসম্পদ প্রধান", name: "নাদিয়া চৌধুরী" },
      { id: "it_director", title: "পরিচালক, আইটি সেবা", name: "ইঞ্জি. ইমরান হোসেন" },
    ],
  },
];

const allRolesFlat = SECTIONS.flatMap(s => s.roles.map(r => ({ ...r, sectionId: s.id, sectionTitle: s.title })));

export default function MainOfficePageBn() {
  const [q, setQ] = useState("");
  const [activeSection, setActiveSection] = useState("all");

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    const base = activeSection === "all" ? allRolesFlat : allRolesFlat.filter(r => r.sectionId === activeSection);
    if (!text) return base;
    return base.filter(r => r.name.toLowerCase().includes(text) || r.title.toLowerCase().includes(text));
  }, [q, activeSection]);

  return (
    <div className="min-h-screen w-full bg-gray-100 text-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight">প্রধান অফিস</h1>
              <p className="text-xs text-slate-500">বিশ্ববিদ্যালয় প্রশাসনের ডিরেক্টরি</p>
            </div>
          </div>
          {/* <a
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md"
          >
            ড্যাশবোর্ডে যান <ChevronRight className="h-4 w-4" />
          </a> */}
        </div>
      </header>

      {/* Filters */}
      <section className="">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight">প্রশাসনিক তালিকা</h2>
              <p className="text-sm text-slate-500">সেকশন বাছাই করুন বা নাম/পদবি দিয়ে খুঁজুন</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="নাম বা পদবি দিয়ে খুঁজুন..."
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
                  <option value="all">সব সেকশন</option>
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
          {SECTIONS.filter(sec => activeSection === "all" || sec.id === activeSection).map((sec, sIdx) => (
            <div key={sec.id} className="mb-10">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{sec.title}</h3>
                  <p className="text-sm text-slate-500">{sec.desc}</p>
                </div>
                <div className="text-xs text-slate-500">{sec.roles.length} জন</div>
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
                        <img className="w-full h-full object-cover rounded-2xl" src="https://media.istockphoto.com/id/2160439329/photo/happy-multiethnic-male-teacher-smiling-at-primary-school.jpg?s=612x612&w=0&k=20&c=0-Lem0EucN1GIoZduYU0rPXUZuGuquTgz_nPXuR-210=" alt="" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="truncate text-lg font-semibold leading-tight">{role.name}</h4>
                          <p className="text-sm text-slate-600">{role.title}</p>
                          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
                            <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1">{sec.title}</span>
                            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-1">অফিস</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> টিম</div>
                          <div className="hidden sm:block">•</div>
                          <div>সময়: ৯:০০–১৭:০০</div>
                        </div>
                        {/* <a
                          href="#"
                          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm transition hover:shadow-md"
                        >
                          বিস্তারিত দেখুন <ChevronRight className="h-3.5 w-3.5" />
                        </a> */}
                      </div>
                    </motion.div>
                  ))}

                {(sec.roles.filter(r => !q || r.name.toLowerCase().includes(q.toLowerCase()) || r.title.toLowerCase().includes(q.toLowerCase())).length === 0) && (
                  <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-600">
                    এই সেকশনে মিল পাওয়া যায়নি।
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}
