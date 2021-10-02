import React from 'react';

export default function ImageCard() {
  return (
    <>
      {console.log('ss')}

      <div className="col-lg-3">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="https://www.w3schools.com/css/img_chania.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <span className="badge bg-secondary">New</span>
          </div>
        </div>
      </div>
    </>
  );
}
