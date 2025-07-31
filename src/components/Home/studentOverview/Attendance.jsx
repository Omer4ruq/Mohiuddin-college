import femaleIcon from "../../../assets/icons/female.png";
import maleIcon from "../../../assets/icons/male.png";
import studentIcon from "../../../assets/icons/student.png";
export default function Attendance({ data }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-md shadow-[inset_2px_5px_12px_1px_rgb(0_0_0_/_0.15)]">
      <div className="flex items-center gap-3">
        <img src={studentIcon} alt="" className="w-8" />
        <div>
          <h4 className="text-xl text-primary">
            সর্বমোট {data.type}: {data.total} জন
          </h4>
          <div className="flex gap-1">
            <h4 className="text-[#0a772f]">{data.present} উপস্থিত</h4>
            <h4 className="text-primary">|</h4>
            <h4 className="text-[#ff0000]">{data.absent} অনুপস্থিত</h4>
          </div>
        </div>
      </div>
      <div className="space-y-2 w-20">
        <div className="flex items-center gap-1">
          <img src={maleIcon} alt="" className="w-6 h-6" />
          <h4 className="text-[#0a772f]">{data.male_present} </h4>
          <h4 className="text-primary">|</h4>
          <h4 className="text-[#ff0000]">{data.male_absent}</h4>
        </div>
        <div className="flex items-center gap-1">
          <img src={femaleIcon} alt="" className="w-6 h-6" />
          <h4 className="text-[#0a772f]">{data.female_present} </h4>
          <h4 className="text-primary">|</h4>
          <h4 className="text-[#ff0000]">{data.female_absent}</h4>
        </div>
      </div>
    </div>
  );
}
