import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';

export default function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const key = '23664585-b63ea49e0412f4d30e9b28cc8';
    const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&pretty=true&safesearch=false&per_page=10`;
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
  }, [search]);

  return (
    <>
      <ImageSearch searchHook={(text) => setSearch(text)} />

      {!isLoading && image.length === 0 && (
        <h1 className="text-center">No Data Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-center"> Loading...</h1>
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
