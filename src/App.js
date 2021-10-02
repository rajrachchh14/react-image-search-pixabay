import React, { useEffect } from 'react';
import ImageCard from './ImageCard';
// REACT_API_PIXAL_KEY
export default function App() {
  const [img, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

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
