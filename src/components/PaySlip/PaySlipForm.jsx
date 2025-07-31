

const PaySlipForm = () => {
  return (
    <>
      <div className="student_search my-5 rounded-md border border-primary p-5">
        <form>
          <div className="items text-lg flex justify-between flex-wrap sm:flex-nowrap mb-4 gap-8">
            <div className="item w-full sm:w-80 flex flex-col gap-2 text-primary">
              <label className="leading-4 pl-1" htmlFor="registration">
                শিক্ষার্থীর রেজিঃ/আইডি নাম্বার
              </label>
              <input
                name="registration"
                type="text"
                placeholder="শিক্ষার্থীর রেজিঃ নাম্বার প্রবেশ করান"
                className="input input-bordered placeholder:text-primary placeholder:text-lg w-full max-w-full sm:max-w-xs"
              />
            </div>
            <div className="item w-full sm:w-80 flex flex-col gap-2 text-primary">
              <label className="leading-4 pl-1" htmlFor="month">
                মাস নির্বাচন করুন
              </label>
              <select
                name="month"
                className="select select-bordered text-lg w-full max-w-full sm:max-w-xs"
              >
                <option disabled selected>
                  কাঙ্খিত মাস নির্বাচন করুন
                </option>
                <option>Month 1</option>
                <option>Month 2</option>
              </select>
            </div>
          </div>
          <div className="items flex justify-between flex-wrap sm:flex-nowrap mb-4 gap-8">
            <div className="item w-full sm:w-80 flex flex-col gap-2 text-primary">
              <label className="leading-4 pl-1" htmlFor="month">
                সাল নির্বাচন করুন
              </label>
              <select
                name="month"
                className="select select-bordered text-lg w-full max-w-full sm:max-w-xs"
              >
                <option disabled selected>
                  সাল নির্বাচন করুন
                </option>
                <option>Month 1</option>
                <option>Month 2</option>
              </select>
            </div>
            <div className="item w-full sm:w-80 flex flex-col justify-end gap-2 text-primary">
            <button className="text-textColor text-lg px-7 rounded-md py-2 bg-gradient-to-r from-primary to-secondary">পে-স্লিপ খুজুন</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaySlipForm;
