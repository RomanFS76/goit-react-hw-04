import css from "./ImageCard.module.css"

const ImageCard = ({ urls, alt,onImageClick}) => {
  return (

      <img src={urls.small} alt={alt} className={css.img} onClick={() => onImageClick(urls.regular)}/>

  );
};

export default ImageCard;
