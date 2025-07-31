export default function AdmInstructions() {
   const instructions = [
      "১) ভর্তি আবেদন ফর্মের সকল তথ্য নির্ভুল ভাবে দিতে হবে। ",
      "২) পূর্ণাঙ্গ তথ্য ব্যতীত আবেদন গ্রহণযোগ্য হবে না। ",
      "৩) শিক্ষার্থীর ছবি দিতে হবে এবং সাইজ হবে ৩২০x৩৬০ পিক্সেল। ",
      "৪) শিক্ষার্থীর জন্ম নিবন্ধন সনদের এর ছবি (JPG/JPEG/PNG) সংযুক্ত করতে হবে। ",
      "৫) আবেদন ফি Tk 1111  bKash এর মাধ্যমে প্রদান করতে হবে। bKash পেমেন্ট অপশন ফর্ম পূরণ করে সাবমিট দিলে আসবে।",
      "৬) শ্রেণী অনুযায়ী বয়স নিচে দেওয়া হল। kg-4: 4-11 year , 5-10 : 12-20year",
      "৭) সক্রিয় মোবাইল নাম্বার দিন। এটি SMS নোটিফিকেশনে দরকার হবে।",
   ]
  return (
    <div className=" mt-2">
      <h2 className="text-2xl font-medium text-primary px-4 py-3">
       নির্দেশাবলী
      </h2>
      {
         instructions.map((instruction, index) => (
            <p key={index} className="tex font-medium text-black px-4 py-1">{instruction}</p>
         ))
      }
    </div>
  )
}
