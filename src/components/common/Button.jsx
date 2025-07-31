
const Button = ({onClick, text, textSize="text-base", position="self-center", isNav}) => {
    return (
        <>
            <button className={`text-textColor ${position} ${textSize} px-7 rounded-md py-2 bg-gradient-to-r from-primary to-secondary hover:translate-y-[-2px] duration-200 shadow-sm ${isNav && "from-menuColor to-menuColor"}`}
            onClick={onClick}>{text}</button>
        </>
    );
};

export default Button;