import React from 'react'
import { Link } from 'react-router-dom'


function Cart() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>

   <>
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
            Cart
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/*end breadcrumb*/}
</>


  {/*start product details*/}
  <section className="section-padding">
    <div className="container">
      <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 h4 fw-bold">My Bag (8 items)</h4>
        </div>
        <div className="ms-auto">
          <button type="button" className="btn btn-light btn-ecomm">
            Continue Shopping
          </button>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="product-img">
                  <img
                    src="assets/images/featured-products/01.webp"
                    width={150}
                    alt=""
                  />
                </div>
                <div className="product-info flex-grow-1">
                  <h5 className="fw-bold mb-0">AKS - Checked Straight Kurta</h5>
                  <div className="product-price d-flex align-items-center gap-2 mt-3">
                    <div className="h6 fw-bold">$458</div>
                    <div className="h6 fw-light text-muted text-decoration-line-through">
                      $2089
                    </div>
                    <div className="h6 fw-bold text-danger">(70% off)</div>
                  </div>
                  <div className="mt-3 hstack gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#SizeModal"
                    >
                      Size : M
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#QtyModal"
                    >
                      Qty : 1
                    </button>
                  </div>
                </div>
                <div className="d-none d-lg-block vr" />
                <div className="d-grid gap-2 align-self-start align-self-lg-center">
                  <button type="button" className="btn btn-ecomm">
                    <i className="bi bi-x-lg me-2" />
                    Remove
                  </button>
                  <button type="button" className="btn dark btn-ecomm">
                    <i className="bi bi-suit-heart me-2" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="product-img">
                  <img
                    src="assets/images/featured-products/02.webp"
                    width={150}
                    alt=""
                  />
                </div>
                <div className="product-info flex-grow-1">
                  <h5 className="fw-bold mb-0">AKS - Checked Straight Kurta</h5>
                  <div className="product-price d-flex align-items-center gap-2 mt-3">
                    <div className="h6 fw-bold">$458</div>
                    <div className="h6 fw-light text-muted text-decoration-line-through">
                      $2089
                    </div>
                    <div className="h6 fw-bold text-danger">(70% off)</div>
                  </div>
                  <div className="mt-3 hstack gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#SizeModal"
                    >
                      Size : M
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#QtyModal"
                    >
                      Qty : 1
                    </button>
                  </div>
                </div>
                <div className="d-none d-lg-block vr" />
                <div className="d-grid gap-2 align-self-start align-self-lg-center">
                  <button type="button" className="btn btn-ecomm">
                    <i className="bi bi-x-lg me-2" />
                    Remove
                  </button>
                  <button type="button" className="btn dark btn-ecomm">
                    <i className="bi bi-suit-heart me-2" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="product-img">
                  <img
                    src="assets/images/featured-products/03.webp"
                    width={150}
                    alt=""
                  />
                </div>
                <div className="product-info flex-grow-1">
                  <h5 className="fw-bold mb-0">AKS - Checked Straight Kurta</h5>
                  <div className="product-price d-flex align-items-center gap-2 mt-3">
                    <div className="h6 fw-bold">$458</div>
                    <div className="h6 fw-light text-muted text-decoration-line-through">
                      $2089
                    </div>
                    <div className="h6 fw-bold text-danger">(70% off)</div>
                  </div>
                  <div className="mt-3 hstack gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#SizeModal"
                    >
                      Size : M
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#QtyModal"
                    >
                      Qty : 1
                    </button>
                  </div>
                </div>
                <div className="d-none d-lg-block vr" />
                <div className="d-grid gap-2 align-self-start align-self-lg-center">
                  <button type="button" className="btn btn-ecomm">
                    <i className="bi bi-x-lg me-2" />
                    Remove
                  </button>
                  <button type="button" className="btn dark btn-ecomm">
                    <i className="bi bi-suit-heart me-2" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="product-img">
                  <img
                    src="assets/images/featured-products/07.webp"
                    width={150}
                    alt=""
                  />
                </div>
                <div className="product-info flex-grow-1">
                  <h5 className="fw-bold mb-0">AKS - Checked Straight Kurta</h5>
                  <div className="product-price d-flex align-items-center gap-2 mt-3">
                    <div className="h6 fw-bold">$458</div>
                    <div className="h6 fw-light text-muted text-decoration-line-through">
                      $2089
                    </div>
                    <div className="h6 fw-bold text-danger">(70% off)</div>
                  </div>
                  <div className="mt-3 hstack gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#SizeModal"
                    >
                      Size : M
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#QtyModal"
                    >
                      Qty : 1
                    </button>
                  </div>
                </div>
                <div className="d-none d-lg-block vr" />
                <div className="d-grid gap-2 align-self-start align-self-lg-center">
                  <button type="button" className="btn btn-ecomm">
                    <i className="bi bi-x-lg me-2" />
                    Remove
                  </button>
                  <button type="button" className="btn dark btn-ecomm">
                    <i className="bi bi-suit-heart me-2" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="card rounded-0 mb-0">
            <div className="card-body">
              <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="product-img">
                  <img
                    src="assets/images/featured-products/05.webp"
                    width={150}
                    alt=""
                  />
                </div>
                <div className="product-info flex-grow-1">
                  <h5 className="fw-bold mb-0">AKS - Checked Straight Kurta</h5>
                  <div className="product-price d-flex align-items-center gap-2 mt-3">
                    <div className="h6 fw-bold">$458</div>
                    <div className="h6 fw-light text-muted text-decoration-line-through">
                      $2089
                    </div>
                    <div className="h6 fw-bold text-danger">(70% off)</div>
                  </div>
                  <div className="mt-3 hstack gap-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#SizeModal"
                    >
                      Size : M
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-light border rounded-0"
                      data-bs-toggle="modal"
                      data-bs-target="#QtyModal"
                    >
                      Qty : 1
                    </button>
                  </div>
                </div>
                <div className="d-none d-lg-block vr" />
                <div className="d-grid gap-2 align-self-start align-self-lg-center">
                  <button type="button" className="btn btn-ecomm">
                    <i className="bi bi-x-lg me-2" />
                    Remove
                  </button>
                  <button type="button" className="btn dark btn-ecomm">
                    <i className="bi bi-suit-heart me-2" />
                    Move to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4">
          <div className="card rounded-0 mb-3">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="hstack align-items-center justify-content-between">
                <p className="mb-0">Bag Total</p>
                <p className="mb-0">$599.00</p>
              </div>
              <hr />
              <div className="hstack align-items-center justify-content-between">
                <p className="mb-0">Bag discount</p>
                <p className="mb-0 text-success">- $178.00</p>
              </div>
              <hr />
              <div className="hstack align-items-center justify-content-between">
                <p className="mb-0">Delivery</p>
                <p className="mb-0">$29.00</p>
              </div>
              <hr />
              <div className="hstack align-items-center justify-content-between fw-bold text-content">
                <p className="mb-0">Total Amount</p>
                <p className="mb-0">$393.00</p>
              </div>
              <div className="d-grid mt-4">
                <button
                  type="button"
                  className="btn btn-dark btn-ecomm py-3 px-5"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-0">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Apply Coupon</h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Enter coupon code"
                />
                <button
                  className="btn btn-dark btn-ecomm rounded-0"
                  type="button"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*end row*/}
    </div>
  </section>
  {/*start product details*/}
</>

  )
}

export default Cart
