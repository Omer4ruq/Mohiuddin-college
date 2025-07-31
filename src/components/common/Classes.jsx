import { Fragment } from "react";

const Classes = ({active=9}) => {

    const classes = ["১ম", "২য়", "৩য়", "৪র্থ","৫ম","৬ষ্ঠ","৭ম","৮ম","৯ম","১০ম","একাদশ","দ্বাদশ"]
    return (
        <>
            <div className="classes flex flex-wrap gap-2 justify-center">
                {classes.map((item, index) => (
                    <Fragment key={`${item}`}>
                        <span className={`${active === index+1 ? "text-textColor bg-primary" : "text-primary bg-white"} border border-primary text-lg rounded-md px-7 py-2`}>{item} শ্রেণী</span>
                    </Fragment>
                ))}
            </div>
        </>
    );
};

export default Classes;