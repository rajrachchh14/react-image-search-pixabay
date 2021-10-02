import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
// REACT_API_PIXAL_KEY
export default function App() {
  const [img, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=REACT_API_PIXAL_KEY&q=yellow+flowers&image_type=photo&pretty=true`;

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          // setItems(result);
        },

        (error) => {
          // setIsLoaded(true);
          //   setError(error);
        }
      );
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <ImageCard />
        </div>
      </div>
    </>
  );
}
