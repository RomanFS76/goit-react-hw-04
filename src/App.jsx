import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { getImagesApi } from "./api/unsplash";

function App() {
  useEffect(() => {
    const getImages = async () => {
      const data = await getImagesApi();
      console.log(data.hits);
    };

    getImages();
  }, []);

  return <></>;
}

export default App;
