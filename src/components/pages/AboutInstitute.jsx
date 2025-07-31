import GallerySlider from "../AboutInstitute/GallerySlider";
import SchoolHistory from "../AboutInstitute/SchoolHistory";

export default function AboutInstitute() {
  return (
    <>
      <div className="space-y-3">
        <h2 className="text-2xl font-medium text-textColor font-poppins bg-primary px-4 py-3">
          About Institute
        </h2>
        <GallerySlider />
      </div>
      <SchoolHistory />
    </>
  );
}
