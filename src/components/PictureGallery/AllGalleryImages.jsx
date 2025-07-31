import { Fragment } from "react";

const AllGalleryImages = ({pictures}) => {
  // const { pictures } = useContext(PictureContext);
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 gap-3">
        {pictures?.map((item) => {
          return (
            <Fragment key={item.id}>
              <img
                className={`rounded-md w-full h-full object-cover`}
                src={item?.galary_image}
                alt="gallery image"
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default AllGalleryImages;
