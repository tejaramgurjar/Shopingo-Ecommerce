import React from 'react'
import { Link } from 'react-router-dom'

function MyOrder() {
  return (
    <div>
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
          Shop With Grid
        </li>
      </ol>
    </nav>
  </div>
</div>

{/* next part */}
<section className="section-padding">
  <div className="container">
    <div className="d-flex align-items-center px-3 py-2 border mb-4">
      <div className="text-start">
        <h4 className="mb-0 h4 fw-bold">Account - Orders</h4>
      </div>
    </div>
    <div
      className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbarFilter"
    >
      <span>
        <i className="bi bi-person me-2" />
        Account
      </span>
    </div>
    <div className="row">
      <div className="col-12 col-xl-3 filter-column">
        <nav className="navbar navbar-expand-xl flex-wrap p-0">
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbarFilter"
            aria-labelledby="offcanvasNavbarFilterLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title mb-0 fw-bold text-uppercase"
                id="offcanvasNavbarFilterLabel"
              >
                Account
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body account-menu">
              <div className="list-group w-100 rounded-0">
                <Link to="account-dashboard.html" className="list-group-item">
                  <i className="bi bi-house-door me-2" />
                  Dashboard
                </Link>
                <Link
                  to="account-orders.html"
                  className="list-group-item active"
                >
                  <i className="bi bi-basket3 me-2" />
                  Orders
                </Link>
                <Link to="account-profile.html" className="list-group-item">
                  <i className="bi bi-person me-2" />
                  Profile
                </Link>
                <Link to="account-edit-profile.html" className="list-group-item">
                  <i className="bi bi-pencil me-2" />
                  Edit Profile
                </Link>
                <Link
                  to="account-saved-address.html"
                  className="list-group-item"
                >
                  <i className="bi bi-pin-map me-2" />
                  Saved Address
                </Link>
                <Link to="wishlist.html" className="list-group-item">
                  <i className="bi bi-suit-heart me-2" />
                  Wishlist
                </Link>
                <Link to="authentication-login.html" className="list-group-item">
                  <i className="bi bi-power me-2" />
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-xl-9">
        <div className="card rounded-0 mb-3 bg-light">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3 align-items-center">
              <div className="">
                <h5 className="mb-1 fw-bold">All Orders</h5>
                <p className="mb-0">for anytime</p>
              </div>
              <div className="order-search flex-grow-1">
                <form>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control ps-5 rounded-0"
                      placeholder="Search Product..."
                    />
                    <span className="position-absolute top-50 product-show translate-middle-y">
                      <i className="bi bi-search ms-3" />
                    </span>
                  </div>
                </form>
              </div>
              <div className="filter">
                <button
                  type="button"
                  className="btn btn-dark rounded-0"
                  data-bs-toggle="modal"
                  data-bs-target="#FilterOrders"
                >
                  <i className="bi bi-filter me-2" />
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-0 mb-3">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3">
              <div className="product-img">
                <img
                  src="assets/images/featured-products/05.webp"
                  width={120}
                  alt=""
                />
              </div>
              <div className="product-info flex-grow-1">
                <h5 className="fw-bold mb-1">AKS - Checked Straight Kurta</h5>
                <p className="mb-0">
                  {" "}
                  Women Pink &amp; White Printed Straight Kurta
                </p>
                <div className="mt-3 hstack gap-2">
                  <button type="button" className="btn btn-sm border rounded-0">
                    Size : XXL
                  </button>
                  <button type="button" className="btn btn-sm border rounded-0">
                    Qty : 2
                  </button>
                </div>
              </div>
              <div className="d-none d-xl-block vr" />
              <div className="d-grid align-self-start align-self-xl-center">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-ecomm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer rounded-0 bg-transparent">
            <div className="d-flex align-items-center gap-3">
              <p className="mb-1 fw-bold">Rate this Product</p>
              <div className="ratings">
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star h6" />
                <i className="bi bi-star h6" />
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-0 mb-3">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3">
              <div className="product-img">
                <img
                  src="assets/images/featured-products/02.webp"
                  width={120}
                  alt=""
                />
              </div>
              <div className="product-info flex-grow-1">
                <h5 className="fw-bold mb-1">AKS - Checked Straight Kurta</h5>
                <p className="mb-0">
                  {" "}
                  Women Pink &amp; White Printed Straight Kurta
                </p>
                <div className="mt-3 hstack gap-2">
                  <button type="button" className="btn btn-sm border rounded-0">
                    Size : XXL
                  </button>
                  <button type="button" className="btn btn-sm border rounded-0">
                    Qty : 2
                  </button>
                </div>
              </div>
              <div className="d-none d-xl-block vr" />
              <div className="d-grid align-self-start align-self-xl-center">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-ecomm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer rounded-0 bg-transparent">
            <div className="d-flex align-items-center gap-3">
              <p className="mb-1 fw-bold">Rate this Product</p>
              <div className="ratings">
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star h6" />
                <i className="bi bi-star h6" />
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-0">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3">
              <div className="product-img">
                <img
                  src="assets/images/featured-products/06.webp"
                  width={120}
                  alt=""
                />
              </div>
              <div className="product-info flex-grow-1">
                <h5 className="fw-bold mb-1">AKS - Checked Straight Kurta</h5>
                <p className="mb-0">
                  {" "}
                  Women Pink &amp; White Printed Straight Kurta
                </p>
                <div className="mt-3 hstack gap-2">
                  <button type="button" className="btn btn-sm border rounded-0">
                    Size : XXL
                  </button>
                  <button type="button" className="btn btn-sm border rounded-0">
                    Qty : 2
                  </button>
                </div>
              </div>
              <div className="d-none d-xl-block vr" />
              <div className="d-grid align-self-start align-self-xl-center">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-ecomm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer rounded-0 bg-transparent">
            <div className="d-flex align-items-center gap-3">
              <p className="mb-1 fw-bold">Rate this Product</p>
              <div className="ratings">
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star-fill text-warning h6" />
                <i className="bi bi-star h6" />
                <i className="bi bi-star h6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
  </div>
</section>


    </div>
  )
}

export default MyOrder
