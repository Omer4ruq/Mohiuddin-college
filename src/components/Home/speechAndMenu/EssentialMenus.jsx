import admitCardIcon from "../../../assets/icons/admit-card.png";
import calendarIcon from "../../../assets/icons/calendar.png";
import fingerIcon from "../../../assets/icons/finger.png";
import payslipIcon from "../../../assets/icons/pay-slip.png";
import resultIcon from "../../../assets/icons/result.png";
import seatIcon from "../../../assets/icons/seat.png";

const essentialMenu = [
  {
    id: 1,
    icon: fingerIcon,
    title: "উপস্থিতির তথ্য",
    class: "w-6",
  },
  {
    id: 2,
    icon: calendarIcon,
    title: "ক্লাস রুটিন",
    class: "w-5",
  },
  {
    id: 3,
    icon: seatIcon,
    title: "পরীক্ষার সিট প্লান",
    class: "w-5",
  },
  {
    id: 4,
    icon: admitCardIcon,
    title: "পরীক্ষার এডমিট কার্ড",
    class: "w-6",
  },
  {
    id: 5,
    icon: resultIcon,
    title: "পরীক্ষার রেজাল্ট",
    class: "w-6",
  },
  {
    id: 6,
    icon: payslipIcon,
    title: "ফিসের তথ্য",
    class: "w-5",
  },
];
export default function EssentialMenus() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-2 gap-4">
      {essentialMenu.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center gap-3 p-4 border border-primary rounded-md text-center"
        >
          <div className="bg-primary rounded-full h-12 w-12 flex items-center justify-center">
            <img src={item.icon} alt="" className={item.class} />
          </div>
          <h4 className="text-2xl text-primary">{item.title}</h4>
        </div>
      ))}
    </div>
  );
}
