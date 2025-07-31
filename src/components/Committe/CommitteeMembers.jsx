import { FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

export default function CommitteeMembers({item}) {
  return (
    <>
      <div className="staff__single font-liAdorNoirrit rounded-xl flex flex-col gap-2 bg-primary text-textColor items-center text-center py-6 xl:py-10 p-5">
        <div className="icon_wrapper bg-white rounded-full flex justify-center items-cente w-16 h-16">
          <img
            className="rounded-full border-2 border-primary"
            src={item?.img}
            alt="profile picture"
          />
        </div>
        <div className="social_icons flex gap-2">
          <FaPhoneSquareAlt className="w-5 h-5 text-textColor" />
          <IoLogoFacebook className="w-5 h-5 text-textColor" />
          <FaLinkedin className="w-5 h-5 text-textColor" />
          <FaSquareTwitter className="w-5 h-5 text-textColor" />
        </div>
        <h3 className="text-2xl leading-4 mt-2">{item?.name}</h3>
        <p className="leading-4 text-lg font-medium">{item?.designation}</p>
        <p className="leading-3 text-lg">{item?.degination}</p>
      </div>
    </>
  );
}
