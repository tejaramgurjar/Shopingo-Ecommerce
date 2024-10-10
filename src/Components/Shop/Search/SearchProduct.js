import React from 'react'

function SearchProduct() {
  return (
    <div>
        <br></br>
        <br></br>
        <br></br>
      <section className="section-padding bg-section-2">
  <div className="container">
    <div className="d-flex align-items-center">
      <div className="">
        <h3 className="mb-0 fw-bold">Search Products</h3>
      </div>
      <div className="ms-auto">
        <button
          type="button"
          className="btn-close"
          onclick="history.back()"
          aria-label="Close"
        />
      </div>
    </div>
    <div className="search-box position-relative mt-4">
      <div className="position-absolute position-absolute top-50 start-0 translate-middle ms-4 fs-5">
        <i className="bi bi-search" />
      </div>
      <input
        className="form-control form-control-lg ps-5 rounded-0"
        type="text"
        placeholder="Type here to search"
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default SearchProduct
