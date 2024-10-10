import React from 'react'
import { Link } from 'react-router-dom'

function ShowProduct() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <div className="py-4 border-bottom">
  <div className="container">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link to="javascript:;">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="javascript:;">Shop</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Page Details
        </li>
      </ol>
    </nav>
  </div>
</div>

    
    
   
    
    <section className="py-4">
    <div className="container">
      <div className="row g-4">
        <div className="col-12 col-xl-7">
          <div className="product-images">
            <div className="product-zoom-images">
              <div className="row row-cols-2 g-3">
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/01.jpg"
                  >
                    <img
                      src="assets/images/product-images/01.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/02.jpg"
                  >
                    <img
                      src="assets/images/product-images/02.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/03.jpg"
                  >
                    <img
                      src="assets/images/product-images/03.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/04.jpg"
                  >
                    <img
                      src="assets/images/product-images/04.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/05.jpg"
                  >
                    <img
                      src="assets/images/product-images/05.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/06.jpg"
                  >
                    <img
                      src="assets/images/product-images/06.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/07.jpg"
                  >
                    <img
                      src="assets/images/product-images/07.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col">
                  <div
                    className="img-thumb-container overflow-hidden position-relative"
                    data-fancybox="gallery"
                    data-src="assets/images/product-images/08.jpg"
                  >
                    <img
                      src="assets/images/product-images/08.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/*end row*/}
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-5">
          <div className="product-info">
            <h4 className="product-title fw-bold mb-1">Check Pink Kurta</h4>
            <p className="mb-0">
              Women Pink &amp; Off-White Printed Kurta with Palazzos
            </p>
            <div className="product-rating">
              <div className="hstack gap-2 border p-1 mt-3 width-content">
                <div>
                  <span className="rating-number">4.8</span>
                  <i className="bi bi-star-fill ms-1 text-warning" />
                </div>
                <div className="vr" />
                <div>162 Ratings</div>
              </div>
            </div>
            <hr />
            <div className="product-price d-flex align-items-center gap-3">
              <div className="h4 fw-bold">$458</div>
              <div className="h5 fw-light text-muted text-decoration-line-through">
                $2089
              </div>
              <div className="h4 fw-bold text-danger">(70% off)</div>
            </div>
            <p className="fw-bold mb-0 mt-1 text-success">
              inclusive of all taxes
            </p>
            <div className="more-colors mt-4">
              <h6 className="fw-bold mb-3">More Colors</h6>
              <div className="d-flex align-items-center gap-3">
                <div className="">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/featured-products/01.webp"
                      width={65}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/featured-products/02.webp"
                      width={65}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/featured-products/03.webp"
                      width={65}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/featured-products/04.webp"
                      width={65}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="size-chart mt-4">
              <h6 className="fw-bold mb-3">Select Size</h6>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <div className="">
                  <button type="button">XS</button>
                </div>
                <div className="">
                  <button type="button">S</button>
                </div>
                <div className="">
                  <button type="button">M</button>
                </div>
                <div className="">
                  <button type="button">L</button>
                </div>
                <div className="">
                  <button type="button">XL</button>
                </div>
                <div className="">
                  <button type="button">XXL</button>
                </div>
              </div>
            </div>
            <div className="cart-buttons mt-3">
              <div className="buttons d-flex flex-column flex-lg-row gap-3 mt-4">
                <Link
                  to="javascript:;"
                  className="btn btn-lg btn-dark btn-ecomm px-5 py-3 col-lg-6"
                >
                  <i className="bi bi-basket2 me-2" />
                  Add to Bag
                </Link>
                <Link
                  to="javascript:;"
                  className="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3"
                >
                  <i className="bi bi-suit-heart me-2" />
                  Wishlist
                </Link>
              </div>
            </div>
            <hr className="my-3" />
            <div className="product-info">
              <h6 className="fw-bold mb-3">Product Details</h6>
              <p className="mb-1">
                There are many variations of passages of Lorem Ipsum
              </p>
              <p className="mb-1">
                All the Lorem Ipsum generators on the Internet tend to repeat
              </p>
              <p className="mb-1">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
                It has roots in a piece
              </p>
              <p className="mb-1">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested.
              </p>
            </div>
            <hr className="my-3" />
            <div className="customer-ratings">
              <h6 className="fw-bold mb-3">Customer Ratings</h6>
              <div className="d-flex align-items-center gap-4 gap-lg-5 flex-wrap flex-lg-nowrap">
                <div className="">
                  <h1 className="mb-2 fw-bold">
                    4.8
                    <span className="fs-5 ms-2 text-warning">
                      <i className="bi bi-star-fill" />
                    </span>
                  </h1>
                  <p className="mb-0">3.8k Verified Buyers</p>
                </div>
                <div className="vr d-none d-lg-block" />
                <div className="w-100">
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">5</p>
                    <div className="">
                      <i className="bi bi-star" />
                    </div>
                    <div
                      className="progress flex-grow-1 mb-0 rounded-0"
                      style={{ height: 4 }}
                    >
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <p className="mb-0">1528</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">4</p>
                    <div className="">
                      <i className="bi bi-star" />
                    </div>
                    <div
                      className="progress flex-grow-1 mb-0 rounded-0"
                      style={{ height: 4 }}
                    >
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <p className="mb-0">253</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">3</p>
                    <div className="">
                      <i className="bi bi-star" />
                    </div>
                    <div
                      className="progress flex-grow-1 mb-0 rounded-0"
                      style={{ height: 4 }}
                    >
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "45%" }}
                      />
                    </div>
                    <p className="mb-0">258</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">2</p>
                    <div className="">
                      <i className="bi bi-star" />
                    </div>
                    <div
                      className="progress flex-grow-1 mb-0 rounded-0"
                      style={{ height: 4 }}
                    >
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "35%" }}
                      />
                    </div>
                    <p className="mb-0">78</p>
                  </div>
                  <div className="rating-wrrap hstack gap-2 align-items-center">
                    <p className="mb-0">1</p>
                    <div className="">
                      <i className="bi bi-star" />
                    </div>
                    <div
                      className="progress flex-grow-1 mb-0 rounded-0"
                      style={{ height: 4 }}
                    >
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <p className="mb-0">27</p>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-3" />
            <div className="customer-reviews">
              <h6 className="fw-bold mb-3">Customer Reviews (875)</h6>
              <div className="reviews-wrapper">
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <div className="">
                    <span className="badge bg-green rounded-0">
                      5<i className="bi bi-star-fill ms-1" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-2">
                      This is some content from a media component. You can replace
                      this with any content and adjust it as needed. Some quick
                      example text to build on the card title and make.
                    </p>
                    <div className="review-img">
                      <img
                        src="assets/images/featured-products/05.webp"
                        alt=""
                        width={70}
                      />
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
                      <div className="hstack flex-grow-1 gap-3">
                        <p className="mb-0">Jhon Deo</p>
                        <div className="vr" />
                        <div className="date-posted">12 June 2020</div>
                      </div>
                      <div className="hstack">
                        <div className="">
                          <i className="bi bi-hand-thumbs-up me-2" />
                          68
                        </div>
                        <div className="mx-3" />
                        <div className="">
                          <i className="bi bi-hand-thumbs-down me-2" />
                          24
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <div className="">
                    <span className="badge bg-green rounded-0">
                      4<i className="bi bi-star-fill ms-1" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-2">
                      This is some content from a media component. You can replace
                      this with any content.
                    </p>
                    <div className="review-img">
                      <img
                        src="assets/images/featured-products/02.webp"
                        alt=""
                        width={70}
                      />
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
                      <div className="hstack flex-grow-1 gap-3">
                        <p className="mb-0">Jhon Deo</p>
                        <div className="vr" />
                        <div className="date-posted">15 June 2020</div>
                      </div>
                      <div className="hstack">
                        <div className="">
                          <i className="bi bi-hand-thumbs-up me-2" />
                          58
                        </div>
                        <div className="mx-3" />
                        <div className="">
                          <i className="bi bi-hand-thumbs-down me-2" />
                          34
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <div className="">
                    <span className="badge bg-warning rounded-0 text-dark">
                      3<i className="bi bi-star-fill ms-1" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-2">
                      This is some content from a media component. You can replace
                      this with any content and adjust it as needed.
                    </p>
                    <div className="review-img">
                      <img
                        src="assets/images/featured-products/04.webp"
                        alt=""
                        width={70}
                      />
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
                      <div className="hstack flex-grow-1 gap-3">
                        <p className="mb-0">Jhon Deo</p>
                        <div className="vr" />
                        <div className="date-posted">22 June 2022</div>
                      </div>
                      <div className="hstack">
                        <div className="">
                          <i className="bi bi-hand-thumbs-up me-2" />
                          98
                        </div>
                        <div className="mx-3" />
                        <div className="">
                          <i className="bi bi-hand-thumbs-down me-2" />
                          41
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="d-flex flex-column flex-lg-row gap-3">
                  <div className="">
                    <span className="badge bg-danger rounded-0">
                      2<i className="bi bi-star-fill ms-1" />
                    </span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-2">
                      You can replace this with any content and adjust it as
                      needed. Some quick example text to build on the card title
                      and make.
                    </p>
                    <div className="review-img">
                      <img
                        src="assets/images/featured-products/01.webp"
                        alt=""
                        width={70}
                      />
                    </div>
                    <div className="d-flex flex-column flex-sm-row gap-3 mt-3">
                      <div className="hstack flex-grow-1 gap-3">
                        <p className="mb-0">Jhon Deo</p>
                        <div className="vr" />
                        <div className="date-posted">22 June 2022</div>
                      </div>
                      <div className="hstack">
                        <div className="">
                          <i className="bi bi-hand-thumbs-up me-2" />
                          26
                        </div>
                        <div className="mx-3" />
                        <div className="">
                          <i className="bi bi-hand-thumbs-down me-2" />
                          89
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-center">
                  <Link
                    to="javascript:;"
                    className="btn btn-ecomm btn-outline-dark"
                  >
                    View All Reviws
                    <i className="bi bi-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
    </div>
  </section>
  </>

  )
}

export default ShowProduct
