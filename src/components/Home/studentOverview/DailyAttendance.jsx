import Attendance from "./Attendance";

export default function DailyAttendance() {
  const attendanceInfo = [
    {
      id: 1,
      type: "শিক্ষার্থী",
      total: "১২৩৪",
      present: "৮৭৯",
      male_present: "৪৭৯",
      male_absent: "৩০০",
      female_present: "৪০০",
      female_absent: "১২১",
      absent: "৪২১",
    },
    {
      id: 2,
      type: "শিক্ষক",
      total: "৪৫",
      present: "৪০",
      male_present: "২০",
      male_absent: "০৪",
      female_present: "২০",
      female_absent: "০১",
      absent: "০৫",
    },
    {
      id: 3,
      type: "স্টাফ",
      total: "২১",
      present: "১৯",
      male_present: "১২",
      male_absent: "০২",
      female_present: "০৭",
      female_absent: "০০",
      absent: "০২",
    },
  ];

  return (
    <div className="space-y-4 pb-10">
      <h3 className="text-primary text-3xl">তারিখঃ ১৫ মে ২০২৪</h3>
      {attendanceInfo.map((item) => (
        <Attendance key={item.id} data={item} />
      ))}
      <button className="text-xl text-primary font-poppins font-semibold absolute bottom-0 right-0 p-4">
        View More
      </button>
    </div>
  );
}
