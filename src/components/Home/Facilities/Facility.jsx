
const Facility = ({title, description, image}) => {
    return (
        <>
            <div className="rounded-xl flex flex-col gap-2 bg-primary text-textColor items-center text-center p-5">
                <img className="icon_wrapper bg-white rounded-full flex justify-center items-center p-1 w-16 h-16" src={image} alt="profile picture" />
                <h3 className="text-2xl">{title}</h3>
                <p className="leading-5">{description}</p>
            </div>
        </>
    );
};

export default Facility;