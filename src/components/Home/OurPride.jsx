import { images } from "../../assets";
// import QuizCompetition from "./Reputaion/QuizCompetition";
import QuoteSlider from "./Reputaion/QuoteSlider";
import Box from "./sub-component/Box";

export default function OurPride() {
  return (
    <div className="reputation_quiz grid grid-cols-1 gap-5 bg-white">
      {/* sheikh rasel quiz commented out */}
      {/* <Box
        icon={images.quiz}
        heading="শেখ রাসেল কুইজ প্রতিযোগিতা"
        component={<QuizCompetition />}
      /> */}
      <Box
        heading="Our Allumni"
        icon={images.fullStar}
        colSpan="col-span-1"
        component={<QuoteSlider />}
      />
    </div>
  );
}
