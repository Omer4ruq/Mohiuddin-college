import Card2 from "../sub-component/Card2";

export function Repair() {
  const repair = [
    "কর্ম পরিকল্পনা/ আদেশ / বিজ্ঞপ্তি",
    "ফোকাল পয়েন্ট কর্মকর্তা ও বিকল্প কর্মকর্তা",
    "মাসিক/ত্রৈমাসিক/বার্ষিক/পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
    "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/ প্রজ্ঞাপন",
  ];
  return (
    <>
      {repair.map((item, index) => (
        <Card2 key={index} title={item} />
      ))}
    </>
  );
}

export function WorkSheet() {
  const workSheet = [
    "এপিএ নির্দেশিকা/পরিপত্র/এপিএ টিম",
    "চুক্তিসমূহ",
    "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
    "এপিএএমএস সফটওয়্যার লিংক ",
  ];
  return (
    <>
      {workSheet.map((item, index) => (
        <Card2 key={index} title={item} />
      ))}
    </>
  );
}

export function Objection() {
  const objection = [
    "অনিক ও আপিল কর্মকর্তা",
    "মাসিক/ত্রৈমাসিক/বার্ষিক/পরিবীক্ষণ/মূল্যায়ন প্রতিবেদন",
    "অভিযোগ দাখিল (অনলাইন আবেদন)",
    "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/ প্রজ্ঞাপন",
  ];
  return (
    <>
      {objection.map((item, index) => (
        <Card2 key={index} title={item} />
      ))}
    </>
  );
}

export function InfoRights() {
  const infoRights = [
    "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
    "আবেদন ও আপিল ফরম",
    "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
    "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/ প্রজ্ঞাপন",
  ];
  return (
    <>
      {infoRights.map((item, index) => (
        <Card2 key={index} title={item} />
      ))}
    </>
  );
}
