import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
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
          Shop With Grid
        </li>
      </ol>
    </nav>
  </div>
</div>

{/* next */}
<section className="section-padding">
  <div className="container">
    <div className="d-flex align-items-center px-3 py-2 border mb-4">
      <div className="text-start">
        <h4 className="mb-0 h4 fw-bold">Account - Dashboard</h4>
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
                <Link
                  to="account-dashboard.html"
                  className="list-group-item active"
                >
                  <i className="bi bi-house-door me-2" />
                  Dashboard
                </Link>
                <Link to="order" className="list-group-item">
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
        <div className="card rounded-0 bg-light">
          <div className="card-body">
            <div className="d-flex flex-wrap flex-row align-items-center gap-3">
              <div className="profile-pic">
                <img src="assets/images/avatars/01.html" width={140} alt="" />
              </div>
              <div className="profile-email flex-grow-1">
                <p className="mb-0 fw-bold text-content">michel@example.com</p>
              </div>
              <div className="edit-button align-self-start">
                <Link
                  to="account-edit-profile.html"
                  className="btn btn-outline-dark btn-ecomm"
                >
                  <i className="bi bi-pencil-fill me-2" />
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-4 pt-4">
          <div className="col">
            <Link to="account-orders.html">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-box-seam" />
                    </div>
                    <h6 className="mb-0">Orders</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="wishlist.html">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-suit-heart" />
                    </div>
                    <h6 className="mb-0">Wishlist</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="account-orders.html">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-arrow-clockwise" />
                    </div>
                    <h6 className="mb-0">Returns</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="account-saved-address.html">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <h6 className="mb-0">Addresses</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="javascript:;">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-bookmarks" />
                    </div>
                    <h6 className="mb-0">Coupons</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="account-profile.html">
              <div className="card rounded-0">
                <div className="card-body p-5">
                  <div className="text-center">
                    <div className="fs-2 mb-3 text-content">
                      <i className="bi bi-person" />
                    </div>
                    <h6 className="mb-0">Profile Details</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/*end row*/}
      </div>
    </div>
    {/*end row*/}
  </div>
</section>

   
   </>
  )
}

export default Dashboard
