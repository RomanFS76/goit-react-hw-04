import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose,img,setModalIsOpen}) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.modal}>      
      <img src={img} onClick={()=>{setModalIsOpen}}/>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default ImageModal;

