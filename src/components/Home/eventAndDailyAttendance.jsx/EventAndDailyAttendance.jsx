import linkIcon from "../../../assets/icons/link.png";
import peerIcon from "../../../assets/icons/peer.png";
import Box from "../sub-component/Box";
import DailyAttendance from "./DailyAttendance";
import Events from "./Events";

export default function EventAndDailyAttendance() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
         <Box
         heading="দৈনিক উপস্থিতির তথ্য"
         icon={peerIcon}
         component={<DailyAttendance />}
         />

         <Box
         heading="আসন্ন ইভেন্ট ও অন্যান্য সময়সূচী"
         icon={linkIcon}
         component={<Events />}
         />
         
      </div>
    );
}