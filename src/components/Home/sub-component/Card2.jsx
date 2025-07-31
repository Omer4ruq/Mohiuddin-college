import { Link } from "react-router-dom";
import globeIcon from "../../../assets/icons/globe.png";
export default function Card2({ title, link }) {
  return (
    <Link to={link}>
    <div className="rounded-md p-4 my-2 text-primary shadow-[inset_2px_5px_12px_1px_rgb(0_0_0_/_0.15)] flex items-center gap-4 overflow-hidden">
      <div className="w-6 flex justify-center">
        <img src={globeIcon} alt="" className="w-8 lg:w-6" />
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    </Link>
  );
}
