import React from 'react'
import { Link } from 'react-router-dom'


function BillingDetails() {
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
          <Link to="javascript:;">checkout</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Billing Details
        </li>
      </ol>
    </nav>
  </div>
</div>


{/* // billing detials */}


<section className="section-padding">
  <div className="container">
    <div className="d-flex align-items-center px-3 py-2 border mb-4">
      <div className="text-start">
        <h4 className="mb-0 h4 fw-bold">Billing Details</h4>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-12 col-lg-8 col-xl-8">
        <h6 className="fw-bold mb-3 py-2 px-3 bg-light">Personal Details</h6>
        <div className="card rounded-0 mb-3">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingFirstName"
                    placeholder="First Name"
                  />
                  <label htmlFor="floatingFirstName">First Name</label>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingLastName"
                    placeholder="Last Name"
                  />
                  <label htmlFor="floatingLastName">Last Name</label>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingEmail"
                    placeholder="Email"
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingMobileNo"
                    placeholder="Mobile No"
                  />
                  <label htmlFor="floatingMobileNo">Mobile No</label>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
        <h6 className="fw-bold mb-3 py-2 px-3 bg-light">Shipping Details</h6>
        <div className="card rounded-0">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12 col-lg-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingStreetAddress"
                    placeholder="Street Address"
                  />
                  <label htmlFor="floatingStreetAddress">Street Address</label>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingZipCode"
                    placeholder="Zip Code"
                  />
                  <label htmlFor="floatingZipCode">Zip Code</label>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingCity"
                    placeholder="City"
                  />
                  <label htmlFor="floatingCity">City</label>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="floatingCountry"
                    placeholder="Country"
                  />
                  <label htmlFor="floatingCountry">Country</label>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 col-xl-4">
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
                Continue
              </button>
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

export default BillingDetails
