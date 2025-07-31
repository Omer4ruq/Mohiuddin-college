import messageIcon from "../../../assets/icons/messageIcon.png";
import peerIcon from "../../../assets/icons/peer.png";
import Box from "../sub-component/Box";
import DailyAttendance from "./DailyAttendance";
import MujibCorner from "./MujibCorner";

export default function StudentOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box
        heading="দৈনিক উপস্থিতির তথ্য"
        icon={peerIcon}
        component={<DailyAttendance />}
      />
      <Box
        heading="হৃদয়ে বঙ্গবন্ধু কর্নার"
        icon={messageIcon}
        component={<MujibCorner />}
        colSpan="col-span-1 lg:col-span-2"
      />
    </div>
  );
}
