import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className="page-content">
    {/*start breadcrumb*/}
    <div className="py-4 border-bottom">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="javascript:;">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="javascript:;">Account</Link>
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
            <h4 className="mb-0 h4 fw-bold">Account - Edit Profile</h4>
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
                    <Link to="account-orders.html" className="list-group-item">
                      <i className="bi bi-basket3 me-2" />
                      Orders
                    </Link>
                    <Link to="account-profile.html" className="list-group-item">
                      <i className="bi bi-person me-2" />
                      Profile
                    </Link>
                    <Link
                      to="account-edit-profile.html"
                      className="list-group-item active"
                    >
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
                    <Link
                      to="authentication-login.html"
                      className="list-group-item"
                    >
                      <i className="bi bi-power me-2" />
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 col-xl-7">
            <div className="card rounded-0">
              <div className="card-body p-lg-5">
                <h5 className="mb-0 fw-bold">Edit Details</h5>
                <hr />
                <form>
                  <div className="row row-cols-1 g-3">
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingInputName"
                          placeholder="Name"
                          defaultValue="jhon Deo"
                        />
                        <label htmlFor="floatingInputName">Name</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingInputNumber"
                          placeholder="Name"
                          defaultValue="+99-85XXXXXXXX"
                        />
                        <label htmlFor="floatingInputNumber">Mobile Number</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingInputEmail"
                          placeholder="Email"
                          defaultValue="name@example.com"
                        />
                        <label htmlFor="floatingInputEmail">Email</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          defaultValue="option1"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          defaultValue="option2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Female
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control rounded-0"
                          id="floatingInputDOB"
                          defaultValue=""
                        />
                        <label htmlFor="floatingInputDOB">Date of Birth</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingInputLocation"
                          placeholder="Location"
                          defaultValue="United Kingdom"
                        />
                        <label htmlFor="floatingInputLocation">Location</label>
                      </div>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-dark py-3 btn-ecomm w-100"
                      >
                        Save Details
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-outline-dark py-3 btn-ecomm w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#ChangePasswordModal"
                      >
                        Change Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*start product details*/}
    {/* Change Password Modal */}
    <div className="modal" id="ChangePasswordModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content rounded-0">
          <div className="modal-body">
            <h5 className="fw-bold mb-3">Change Password</h5>
            <hr />
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="floatingInputOldPass"
                  placeholder="Old Password"
                />
                <label htmlFor="floatingInputOldPass">Old Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="floatingInputNewPass"
                  placeholder="New Password"
                />
                <label htmlFor="floatingInputNewPass">New Password</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="floatingInputConPass"
                  placeholder="Confirm Password"
                />
                <label htmlFor="floatingInputConPass">Confirm Password</label>
              </div>
              <div className="d-grid gap-3 w-100">
                <button type="button" className="btn btn-dark py-3 btn-ecomm">
                  Change
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark py-3 btn-ecomm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* end Change Password Modal */}
  </div>
  
  )
}

export default EditProfile
