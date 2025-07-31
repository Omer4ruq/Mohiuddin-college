import { images } from "../../assets";
import Quiz from "./Reputaion/Quiz";
import ReputationSlider from "./Reputaion/ReputationSlider";
import Box from "./sub-component/Box";

const Reputation = () => {
  return (
    <div className="reputation_quiz grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Box
        icon={images.quiz}
        heading="শেখ রাসেল কুইজ প্রতিযোগিতা"
        component={<Quiz />}
      />
      <Box
        heading="বিদ্যালয়ের সুনাম যারা বহুগুণে বারিয়ে দিয়েছে"
        icon={images.fullStar}
        colSpan="col-span-1 lg:col-span-2"
        component={<ReputationSlider />}
      />
    </div>
  );
};

export default Reputation;
