import { Fragment } from "react";

const GalleryImages = ({ pictures }) => {
  return (
    <>
      {pictures?.map((item, index) => {
        if (index <= 8) {
          return (
              <Fragment key={item.id}>
                <img
                  className={`rounded-md`}
                  src={item?.galary_image}
                  alt="gallery image"
                />
              </Fragment>
          );
        }
      })}
    </>
  );
};

export default GalleryImages;
