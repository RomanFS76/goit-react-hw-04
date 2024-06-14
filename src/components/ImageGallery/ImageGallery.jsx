import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images,onImageClick }) => {
  return (
    <div className={css.wrapGallery}>
      <ul className={css.galleryList}>
        {images.map(image => (
          <li key={image.id} className={css.galleryItem}>
            <div className={css.wrapCard}>
              <ImageCard
                image={image}
                onImageClick={() => onImageClick(image)}
              ></ImageCard>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
