import React from 'react'
import { Link } from 'react-router-dom'

function FeaturedProducts() {
  return (
    
    <>
  {/*start Featured Products slider*/}
  <section className="section-padding">
    <div className="container">
      <div className="text-center pb-3">
        <h3 className="mb-0 h3 fw-bold">Featured Products</h3>
        <p className="mb-0 text-capitalize">The purpose of lorem ipsum</p>
      </div>
      <div className="product-thumbs">
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/01.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/02.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/03.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/04.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/05.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/06.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/07.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="position-relative overflow-hidden">
            <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
              <Link to="javascript:;">
                <i className="bi bi-heart" />
              </Link>
              <Link to="javascript:;">
                <i className="bi bi-basket3" />
              </Link>
              <Link
                to="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#QuickViewModal"
              >
                <i className="bi bi-zoom-in" />
              </Link>
            </div>
            <Link to="product-details.html">
              <img
                src="assets/images/featured-products/08.webp"
                className="card-img-top"
                alt="..."
              />
            </Link>
          </div>
          <div className="card-body">
            <div className="product-info text-center">
              <h6 className="mb-1 fw-bold product-name">Product Name</h6>
              <div className="ratings mb-1 h6">
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
                <i className="bi bi-star-fill text-warning" />
              </div>
              <p className="mb-0 h6 fw-bold product-price">$49</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*end Featured Products slider*/}
</>

  )
}

export default FeaturedProducts
