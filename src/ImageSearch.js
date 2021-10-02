import React, { useState } from 'react';

export default function ImageSearch(para) {
  const [search, setSearch] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    para(search);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="container d-flex justify-content-center p-3">
          <div className="row align-items-center">
            <div className="col-auto">
              <label className="col-form-label">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Image"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
