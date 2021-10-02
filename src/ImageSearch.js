import React, { useState } from 'react';

export default function ImageSearch() {
  const [text, setText] = useState();
  return (
    <>
      <div className="container d-flex justify-content-center p-3">
        <div className="row align-items-center">
          <div className="col-auto">
            <label className="col-form-label">
              <input
                type="text"
                className="form-control"
                placeholder="Search Image"
              />
            </label>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}
