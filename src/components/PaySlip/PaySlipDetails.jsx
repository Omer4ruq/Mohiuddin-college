import { images } from "../../assets";

const PaySlipDetails = () => {
    return (
        <>
            <p className="text-primary font-semibold text-center py-3 border border-primary rounded-sm my-5">
              Payslip Information
            </p>

            {/* payslip table */}
            <table className="w-full border-separate min-w-[450px]">
              <tbody>
                <tr>
                  <td className="w-1/3 lg:w-1/2 px-3 lg:px-0 border-b-4 py-3 text-base sm:text-lg border-white text-textColor text-center bg-primary">Month Name</td>
                  <td colSpan={2} className="border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">July</td>
                </tr>
                <tr>
                  <td className="w-1/3 lg:w-1/2 px-3 lg:px-0 border-b-4 py-3 text-base sm:text-lg border-white text-textColor text-center bg-primary">Year</td>
                  <td colSpan={2} className="border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">2024</td>
                </tr>
                <tr>
                  <td className="w-1/3 lg:w-1/2 px-3 lg:px-0 border-b-4 py-3 text-base sm:text-lg border-white text-textColor text-center bg-primary">This Month Due Amount</td>
                  <td colSpan={2} className="border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">1234 BDT</td>
                </tr>
                <tr>
                  <td rowSpan={4} className="w-1/3 border-b-4 py-3 px-3 lg:px-0 text-base sm:text-lg border-white text-textColor text-center bg-primary">Total Due Amount</td>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">June - 2024</td>
                  <td className="w-1/4 text-[#FF0000] bg-primarylight border-l-4 border-white border-b-4 py-3 text-base sm:text-lg pl-4">1234 BDT</td>
                </tr>
                <tr>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">Late Fine - June</td>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight border-l-4">100 BDT</td>
                </tr>
                <tr>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight">July - 2024</td>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight border-l-4">1234 BDT</td>
                </tr>
                <tr>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight font-bold">Total Payable</td>
                  <td className="w-1/3 border-b-4 py-3 text-base sm:text-lg border-white text-primary pl-4 bg-primarylight border-l-4 font-bold">2468 BDT</td>
                </tr>
              </tbody>
            </table>

            <p className="bg-primary mt-4 py-4 flex gap-2 items-center text-textColor justify-center">
              <img className="w-5" src={images.rightIcon} alt="right icon" />
              <span>Pay Total Due Amount</span>
            </p>
        </>
    );
};

export default PaySlipDetails;