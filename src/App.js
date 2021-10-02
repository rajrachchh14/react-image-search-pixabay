import React from 'react';
import ImageCard from './ImageCard';
// REACT_API_PIXAL_KEY
export default function App() {
  const [img, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

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
