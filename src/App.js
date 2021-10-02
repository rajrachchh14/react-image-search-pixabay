import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

export default function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const key = '23664585-b63ea49e0412f4d30e9b28cc8';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}+flowers&image_type=photo&pretty=true`;
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          setImage(result.hits); // HERE IS ARRAY OF DATA STORE && Chk Also Console
          setIsLoading(false);
        },

        (error) => {
          // setIsLoading(true);
          // setError(error);
        }
      );
  }, [term]);

  return (
    <>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {isLoading ? (
        <h1> Load...</h1>
      ) : (
        <div className="container">
          <div className="row">
            {image.map((data) => (
              <ImageCard key={data.id} image={data} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
