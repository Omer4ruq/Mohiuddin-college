import LatestNotice from "../../Home/LatestNotice";
import Intro from "./Intro";
import LoginButton from "./LoginButton";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <div className="">
      <Intro />
      <div className="flex justify-end lg:justify-between gap-2 bg-white shadow-md">
        <NavMenu />
        <LoginButton />
      </div>
      
      <LatestNotice />
    </div>
  );
}
