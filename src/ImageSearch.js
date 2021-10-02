import React, { useState } from 'react';

export default function ImageSearch() {
  const [text, setText] = useState();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label for="inputPassword6" className="col-form-label">
                <input type="password" className="form-control" />
              </label>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
