import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images,onImageClick }) => {
  return (
    <ul className={css.galleryList}>
      {images.map(({ id, urls }) => (
        <li key={id} className={css.galleryItem}>
          <ImageCard
            urls={urls} onImageClick={onImageClick}
          ></ImageCard>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
