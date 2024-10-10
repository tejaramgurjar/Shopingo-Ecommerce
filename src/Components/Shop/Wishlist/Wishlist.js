import React from 'react'
import { Link } from 'react-router-dom'


function Wishlist() {
  return (
 
    <>
    <br></br>
    <br></br>
    <br></br>
  {/*start breadcrumb*/}
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
            Wishlist{" "}
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/*end breadcrumb*/}
  {/*start product wishlist*/}
  <section className="section-padding">
    <div className="container">
      <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 h4 fw-bold">Wishlist (10 Items)</h4>
        </div>
        <div className="ms-auto">
          <button type="button" className="btn btn-light btn-ecomm">
            Continue Shopping
          </button>
        </div>
      </div>
      <div className="similar-products">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/best-sellar/01.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/new-arrival/01.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/trending-product/01.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/best-sellar/02.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/new-arrival/02.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/featured-products/05.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/special-offer/03.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/new-arrival/05.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/trending-product/04.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-0">
              <div className="btn-close wishlist-close position-absolute end-0 top-0" />
              <Link to="javascript:;">
                <img
                  src="assets/images/special-offer/04.webp"
                  alt=""
                  className="card-img-top rounded-0"
                />
              </Link>
              <div className="card-body border-top text-center">
                <p className="mb-0 product-short-name">Color Printed Kurta</p>
                <div className="product-price d-flex align-items-center gap-2 mt-2 justify-content-center">
                  <div className="h6 fw-bold">$458</div>
                  <div className="h6 fw-light text-muted text-decoration-line-through">
                    $2089
                  </div>
                  <div className="h6 fw-bold text-danger">(70% off)</div>
                </div>
              </div>
              <div className="card-footer bg-transparent text-center">
                <Link to="javascript:;" className="btn btn-ecomm w-100">
                  Move to Bag
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
  </section>
  {/*start product details*/}
</>





  )
}

export default Wishlist
