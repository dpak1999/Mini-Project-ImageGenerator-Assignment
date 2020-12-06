import "./css/App.css";
import React, { useEffect, useState } from "react";
import ImageDisplay from "./Components/ImageDisplay";
import { Button } from "react-bootstrap";
import Loader from "./Components/Loader";

const App = () => {
  const [image, setImage] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchImage = () => {
    fetch("https://picsum.photos/500").then(
      (result) => {
        setLoading(false);
        setImage(result.url);
      },
      (err) => {
        setLoading(false);
        setError(err);
      }
    );
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="App">
      {error ? (
        <h3>Failed to fetch</h3>
      ) : loading ? (
        <Loader />
      ) : (
        <ImageDisplay image={image} />
      )}
      <br />
      <Button variant="outline-primary" className="mt-2" onClick={fetchImage}>
        Get Image
      </Button>
    </div>
  );
};

export default App;
