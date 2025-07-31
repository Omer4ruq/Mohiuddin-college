import Contact from "../Home/Contact";
import Facilities from "../Home/Facilities";
import GallerySection from "../Home/GallerySection";
import HeroSection from "../Home/HeroSection";
import OurPride from "../Home/OurPride";
import Testimonial from "../Home/Testimonial";
import CertificationAndLinks from "../Home/certificationAndLinks/CertificationAndLinks";
// import CornerAndEvents from "../Home/cornerAndEvents/CornerAndEvents";
import SchoolHistory from "../Home/history/SchoolHistory";
import OtherServices from "../Home/otherServices/OtherServices";
import Presence from "../Home/presence/Presence";
import SpeechAndMenu from "../Home/speechAndMenu/SpeechAndMenu";
// import StudentOverview from "../Home/studentOverview/StudentOverview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SpeechAndMenu />
      <SchoolHistory />
      {/* <EventAndDailyAttendance /> */}
      <CertificationAndLinks />
      {/* Bongobondhu corner commented out */}
      {/* <CornerAndEvents /> */}
      {/* <StudentOverview /> */}
      <OtherServices />
      <Presence />
      <Facilities />
      <GallerySection />
      <OurPride />
      <Contact />
      <Testimonial />
    </>
  );
}
