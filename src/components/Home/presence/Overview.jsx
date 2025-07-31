import staffIcon from "../../../assets/icons/staff.png";
import studentIcon from "../../../assets/icons/student.png";
import teacherIcon from "../../../assets/icons/teacher.png";

export default function Overview() {
  const attendanceInfo = [
    {
      id: 1,
      icon: studentIcon,
      title: "১২৩৪ জন শিক্ষার্থী",
      subTitle: "৮৭৯ ছাত্র | ৪২১ ছাত্রী",
    },
    {
      id: 2,
      icon: teacherIcon,
      title: "৪৫ জন শিক্ষক",
      subTitle: "৩০ শিক্ষক | ১৫ শিক্ষিকা",
    },
    {
      id: 3,
      icon: staffIcon,
      title: "২১ জন স্টাফ",
      subTitle: "১১ কর্মকর্তা | ১৫ কর্মচারী",
    },
  ];

  return (
    <div className="space-y-4 pb-10">
      {attendanceInfo.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-3 p-4 rounded-md shadow-[inset_2px_5px_12px_1px_rgb(0_0_0_/_0.15)]"
        >
          <img src={item.icon} alt="" className="w-7" />
          <div className="text-primary">
            <h3 className="text-xl leading-6">{item.title}</h3>
            <h4 className="text-xl leading-6">{item.subTitle}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}
