import { useEffect, useState } from "react";
import "./App.css";
import { getImagesApi } from "./api/unsplash";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMassage from "./components/ErrorMassage/ErrorMassage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(img) {
    setSelectedImage(img);
    
  }

  function closeModal() {
    setSelectedImage(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getImagesApi(query, page);
        console.log(data);
        setImages((prev) => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && fetchData();
  }, [page, query]);

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar submit={handleSubmit}></SearchBar>
      {error && <ErrorMassage></ErrorMassage>}
      {images.length > 0 && <ImageGallery images={images} onImageClick={openModal}></ImageGallery>}
      {loading && <Loader></Loader>}
      {images.length > 0 && (
        <LoadMoreBtn loadmore={handleLoadMore}></LoadMoreBtn>
      )}
      <ImageModal img={setSelectedImage} isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen(true)}  onRequestClose={closeModal}></ImageModal>
    </>
  );
}

export default App;
