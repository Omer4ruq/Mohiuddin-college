const Staff = ({ image, name, designation, registration }) => {
  return (
    <>
      <div className="staff__single rounded-xl flex flex-col gap-2 bg-primary text-textColor items-center text-center py-6 xl:py-10 p-5">
        <div className="icon_wrapper bg-white rounded-full flex justify-center items-cente w-16 h-16">
          <img className="rounded-full border-2 border-primary" src={`${image}`} alt="profile picture" />
        </div>
        <h3 className="font-semibold">{name}</h3>
        <p className="leading-4 font-medium">{designation}</p>
        <p className="leading-4">Reg No: {registration}</p>
      </div>
    </>
  );
};

export default Staff;
