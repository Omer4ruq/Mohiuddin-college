export default function EventCard({ item, icon }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="rounded-md px-3 py-4 text-primary shadow-[inset_2px_5px_12px_1px_rgb(0_0_0_/_0.15)] flex items-center gap-2 overflow-hidden">
      <div className="w-[20%] sm:w-[12%] lg:w-[22%] xl:w-[14%] flex justify-center">
        <img src={item?.image ? item.image : icon} alt="" className="w-8 lg:w-6" />
      </div>
      <div className="w-[80%] sm:w-[88%] lg:w-[78%] xl:w-[86%] border-l-2 pl-5 border-primary ">
        <h3 className="text-xl font-semibold">{item?.title}</h3>
        <h4 className="text-gray-500 text-sm font-poppins leading-6">
          {formatDate(item?.start)} - {formatDate(item?.end)}
        </h4>
      </div>
    </div>
  );
}
