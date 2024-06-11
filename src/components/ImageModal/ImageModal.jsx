import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose,urls, alt}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.modal}>
      <button onClick={isOpen}>Open Modal</button>
      <img src={urls} alt={alt} />
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ImageModal;

