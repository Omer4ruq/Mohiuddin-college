

const SectionTop = ({title, image}) => {
    return (
        <>
            <div className="testimonial__top bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-2">
            <img className="drop-shadow-sm" src={image} alt="comments" />
            <p className="text-textColor text-xl">{title} </p>
          </div>
        </>
    );
};

export default SectionTop;