import React from 'react'

function MyProfile() {
  return (
    <div>
      <div className="page-content">
  {/*start breadcrumb*/}
  <div className="py-4 border-bottom">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="javascript:;">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:;">Account</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Profile
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/*end breadcrumb*/}
  {/*start product details*/}
  <section className="section-padding">
    <div className="container">
      <div className="d-flex align-items-center px-3 py-2 border mb-4">
        <div className="text-start">
          <h4 className="mb-0 h4 fw-bold">Account - Profile</h4>
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
                  <a href="account-dashboard.html" className="list-group-item">
                    <i className="bi bi-house-door me-2" />
                    Dashboard
                  </a>
                  <a href="account-orders.html" className="list-group-item">
                    <i className="bi bi-basket3 me-2" />
                    Orders
                  </a>
                  <a
                    href="account-profile.html"
                    className="list-group-item active"
                  >
                    <i className="bi bi-person me-2" />
                    Profile
                  </a>
                  <a
                    href="account-edit-profile.html"
                    className="list-group-item"
                  >
                    <i className="bi bi-pencil me-2" />
                    Edit Profile
                  </a>
                  <a
                    href="account-saved-address.html"
                    className="list-group-item"
                  >
                    <i className="bi bi-pin-map me-2" />
                    Saved Address
                  </a>
                  <a href="wishlist.html" className="list-group-item">
                    <i className="bi bi-suit-heart me-2" />
                    Wishlist
                  </a>
                  <a
                    href="authentication-login.html"
                    className="list-group-item"
                  >
                    <i className="bi bi-power me-2" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-12 col-xl-9">
          <div className="card rounded-0">
            <div className="card-body p-lg-5">
              <h5 className="mb-0 fw-bold">Profile Details</h5>
              <hr />
              <div className="table-responsive">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Full Name</td>
                      <td>Jhon Deo</td>
                    </tr>
                    <tr>
                      <td>Mobile Number</td>
                      <td>+99-85XXXXXXXX</td>
                    </tr>
                    <tr>
                      <td>Email ID</td>
                      <td>name@example.com</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>Male</td>
                    </tr>
                    <tr>
                      <td>DOB</td>
                      <td>10/03/1993</td>
                    </tr>
                    <tr>
                      <td>Location</td>
                      <td>United Kingdom</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-outline-dark btn-ecomm px-5"
                >
                  <i className="bi bi-pencil me-2" />
                  Edit
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
  {/* filter Modal */}
  <div className="modal" id="FilterOrders" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title fw-bold">Filter Orders</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <h6 className="mb-3 fw-bold">Status</h6>
          <div className="status-radio d-flex flex-column gap-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                All
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                On the way
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Delivered
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Cancelled
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Returned
              </label>
            </div>
          </div>
          <hr />
          <h6 className="mb-3 fw-bold">Time</h6>
          <div className="status-radio d-flex flex-column gap-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioTime"
                id="flexRadioDefault6"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault6">
                Anytime
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioTime"
                id="flexRadioDefault7"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault7">
                Last 30 days
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioTime"
                id="flexRadioDefault8"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault8">
                Last 6 months
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioTime"
                id="flexRadioDefault9"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault9">
                Last year
              </label>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center gap-3 w-100">
            <button
              type="button"
              className="btn btn-outline-dark btn-ecomm w-50"
            >
              Clear Filters
            </button>
            <button type="button" className="btn btn-dark btn-ecomm w-50">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end Filters Modal */}
</div>

    </div>
  )
}

export default MyProfile
