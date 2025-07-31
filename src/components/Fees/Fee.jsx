const Fee = ({title, money, frequncy}) => {
  return (
    <>
      <div className="fee border border-primary rounded-sm text-center">
        <h6 className="bg-primary text-textColor text-xl py-2">{title}</h6>
        <div className="p-5 fee_details text-primary">
          <p className="money text-4xl leading-4">{money} টাকা</p>
          <p className="frequency text-lg">{frequncy}</p>
          <p className="flex justify-center gap-2 sections text-lg">
            <span>বিজ্ঞান</span>
            <span>|</span>
            <span>ব্যবসা</span>
            <span>|</span>
            <span>মানবিক</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Fee;
