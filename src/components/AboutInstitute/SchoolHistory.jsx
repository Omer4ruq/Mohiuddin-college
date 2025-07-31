import buildingIcon from "../../assets/icons/building.png";
import Box from "../Home/sub-component/Box";
import HistoryContent from "./HistoryContent";
import SchoolDetails from "./SchoolDetails";

export default function SchoolHistory() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Box
        heading="Our History"
        icon={buildingIcon}
        component={<HistoryContent />}
        colSpan="col-span-1 lg:col-span-2"
      />

      <div className="col-span-1 border border-primary rounded-md pb-2">
        <SchoolDetails />
      </div>
    </div>
  );
}
