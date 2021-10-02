import React from 'react';

export default function ImageCard(image) {
  const photo = image.image.webformatURL;
  const user = image.image.user;
  const downloads = image.image.downloads;
  const [t1, t2, t3] = image.image.tags.split(','); // ARRAY Destruture in 3 tags & Split Data in ARRAY

  return (
    <>
      {/* {console.log(image.image.tags.split(','), 'ss')} */}

      <div className="col-lg-3">
        <div className="card" style={{ width: '18rem' }}>
          <img src={photo} className="card-img-top" alt="data" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">User : {user}</p>
            <p className="card-text">Downloads : {downloads}</p>
            <span className="badge bg-secondary">{t1}</span> &nbsp;
            <span className="badge bg-secondary">{t2}</span> &nbsp;
            <span className="badge bg-secondary">{t3}</span>
          </div>
        </div>
      </div>
    </>
  );
}
