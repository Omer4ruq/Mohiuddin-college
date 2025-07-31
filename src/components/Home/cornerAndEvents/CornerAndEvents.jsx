import linkIcon from "../../../assets/icons/link.png";
import messageIcon from "../../../assets/icons/messageIcon.png";
import Box from "../sub-component/Box";
import Events from "./Events";
import MujibCorner from "./MujibCorner";

export default function CornerAndEvents() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box
        heading="হৃদয়ে বঙ্গবন্ধু কর্নার"
        icon={messageIcon}
        component={<MujibCorner />}
        colSpan="col-span-1 lg:col-span-2"
      />

      <Box
        heading="আসন্ন ইভেন্ট ও অন্যান্য সময়সূচী"
        icon={linkIcon}
        component={<Events />}
      />
    </div>
  );
}
