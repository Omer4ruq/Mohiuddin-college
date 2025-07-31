const Student = ({ image, name, roll, group, registration }) => {
    return (
      <>
        <div className="staff__single rounded-xl flex flex-col gap-2 bg-white border border-primary text-primary items-center text-center text-xl py-6 xl:py-10 p-5">
          <div className="icon_wrapper bg-white rounded-full flex justify-center items-cente w-16 h-16">
            <img className="rounded-full border-2 border-primary" src={`${image}`} alt="profile picture" />
          </div>
          <h3 className="font-bold text-2xl">{name}</h3>
          <h3 className="font-bold">Roll: {roll}</h3>
        </div>
      </>
    );
  };
  
  export default Student;
  