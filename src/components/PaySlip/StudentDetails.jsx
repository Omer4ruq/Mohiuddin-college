import { images } from "../../assets";

const StudentDetails = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="col-span-2">
                <table className="w-full h-full min-w-[450px]">
                  <tbody>
                    <tr>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-textColor text-center bg-primary">
                        Student Name
                      </td>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-primary pl-4 bg-primarylight">
                        Abdul Momen Khan kamal
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-textColor text-center bg-primary">
                        Student ID
                      </td>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-primary pl-4 bg-primarylight">
                        1122445566
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-textColor text-center bg-primary">
                        Class
                      </td>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-primary pl-4 bg-primarylight">Nine</td>
                    </tr>
                    <tr>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-textColor text-center bg-primary">
                        Section
                      </td>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-primary pl-4 bg-primarylight">Golap</td>
                    </tr>
                    <tr>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-textColor text-center bg-primary">
                        Shift
                      </td>
                      <td className="border-b-4 text-base sm:text-lg py-3 border-white text-primary pl-4 bg-primarylight">Day</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="qrcode p-5 flex flex-col justify-center gap-2">
                <img className="w-[200px] self-center" src={images.qrcode} alt="qrcode" />
                <p className="text-primary text-center">
                  অনলাইন পেমেন্টের ক্ষেত্রে অথবা পে-স্লিপের তথ্য দেখতে কিউআর
                  কোডটি স্কান করুন।{" "}
                </p>
              </div>
            </div>
        </>
    );
};

export default StudentDetails;