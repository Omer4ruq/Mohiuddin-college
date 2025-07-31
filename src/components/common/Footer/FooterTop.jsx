import { images } from "../../../assets";

const FooterTop = () => {
    return (
        <>
            <div className="container-fluid footerTop mt-32">
                <img src={images.footerTop} alt="footer top image" className="w-full h-auto object-cover" />
            </div>
        </>
    );
};

export default FooterTop;