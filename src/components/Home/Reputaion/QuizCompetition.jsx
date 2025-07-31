import { images } from "../../../assets";
import Button from "../../common/Button";

export default function QuizCompetition() {
  return (
    <>
      <div className="img_wrapper mb-7 flex justify-center">
        <img src={images.quizBanner} alt="quiz banner" className="w-full" />
      </div>
      <div className="flex flex-col justify-end">
        <Button position="self-center" text="কুইজে অংশগ্রহণ করতে ক্লিক করো" />
      </div>
    </>
  );
}
