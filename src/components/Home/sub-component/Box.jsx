/* eslint-disable react/prop-types */
export default function Box({
  heading,
  icon,
  component,
  colSpan = "col-span-1",
}){
  console.log("hello", heading)
  return (
    <div
      className={`${colSpan} border border-primary rounded-md relative pb-2 bg-white`}
    >
      <div className="flex items-center gap-3 bg-gradient-to-r from-primary to-secondary p-4 text-textColor">
        <img src={icon} alt="" className="h-5" />
        <h4 className="text-2xl">{heading}</h4>
      </div>
      <div className="p-4 ">{component}</div>
    </div>
  );
}

