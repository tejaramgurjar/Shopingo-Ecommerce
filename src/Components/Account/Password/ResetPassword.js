import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
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
              <Link to="javascript:;">Authentication</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Reset Password
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/*end breadcrumb*/}
    {/*start product details*/}
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 col-xxl-4 mx-auto">
            <div className="card rounded-0">
              <div className="card-body p-4">
                <h4 className="mb-4 fw-bold text-center">Reset Password</h4>
                <form>
                  <div className="row g-4">
                    <div className="col-12">
                      <label htmlFor="exampleNewPassword" className="form-label">
                        New Password
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="exampleNewPassword"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="examplePassword" className="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="examplePassword"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-dark rounded-0 btn-ecomm w-100"
                      >
                        Change Password
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <Link to="/login"><p className="mb-0 rounded-0 w-100 btn  btn-ecomm border border-dark">
                        <i className="bi bi-arrow-left me-2" />
                        Return to Login
                      </p></Link>
                    </div>
                  </div>
                  {/*-end row*/}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*start product details*/}
  </div>
  
  )
}

export default ResetPassword
