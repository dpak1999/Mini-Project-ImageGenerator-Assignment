import "./css/App.css";
import React, { useEffect, useState } from "react";
import ImageDisplay from "./Components/ImageDisplay";
import { Button } from "react-bootstrap";
import Loader from "./Components/Loader";

const App = () => {
  const [image, setImage] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const fetchImage = () => {
    fetch("https://picsum.photos/500").then(
      (result) => {
        setLoading(true);
        setImage(result.url);
      },
      (err) => {
        setLoading(true);
        setError(err);
      }
    );
  };

  const getImage = (e) => {
    e.preventDefault();
    fetchImage();
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="App">
      {error ? (
        <h3>Failed to fetch</h3>
      ) : !loading ? (
        <Loader />
      ) : (
        <ImageDisplay image={image} />
      )}
      <br />
      <Button variant="outline-primary" className="mt-2" onClick={getImage}>
        Get Image
      </Button>
    </div>
  );
};

export default App;
