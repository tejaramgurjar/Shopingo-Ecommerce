import React from 'react'
import { Link } from 'react-router-dom'


function Addresss() {
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
          Address
        </li>
      </ol>
    </nav>
  </div>
</div>

{/* // address */}


<section className="section-padding">
  <div className="container">
    <div className="d-flex align-items-center px-3 py-2 border mb-4">
      <div className="text-start">
        <h4 className="mb-0 h4 fw-bold">Select Delivery Address</h4>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-12 col-lg-8 col-xl-8">
        <h6 className="fw-bold mb-3 py-2 px-3 bg-light">Default Address</h6>
        <div className="card rounded-0 mb-3">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3">
              <div className="address-info form-check flex-grow-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked=""
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <span className="fw-bold mb-0 h5">Jhon Maxwell</span>
                  <br />
                  47-A, US Road, New York <br />
                  United Kingdom, 201001
                  <br />
                  Mobile:{" "}
                  <span className="text-dark fw-bold">+91-xxxxxxxxxx</span>
                </label>
              </div>
              <div className="d-none d-xl-block vr" />
              <div className="d-grid gap-2 align-self-start align-self-xl-center">
                <button
                  type="button"
                  className="btn btn-outline-dark px-5 btn-ecomm"
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-5 btn-ecomm"
                  data-bs-toggle="modal"
                  data-bs-target="#EditAddress"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <h6 className="fw-bold mb-3 py-2 px-3 bg-light">Other Address</h6>
        <div className="card rounded-0 mb-3">
          <div className="card-body">
            <div className="d-flex flex-column flex-xl-row gap-3">
              <div className="address-info form-check flex-grow-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  <span className="fw-bold mb-0 h5">Andrew Clark</span>
                  <br />
                  85-B, UAE Road, Dubai <br />
                  Saudi Arabia, 201001
                  <br />
                  Mobile:{" "}
                  <span className="text-dark fw-bold">+99-xxxxxxxxxx</span>
                </label>
              </div>
              <div className="d-none d-xl-block vr" />
              <div className="d-grid gap-2 align-self-start align-self-xl-center">
                <button
                  type="button"
                  className="btn btn-outline-dark px-5 btn-ecomm"
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark px-5 btn-ecomm"
                  data-bs-toggle="modal"
                  data-bs-target="#EditAddress"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-0">
          <div className="card-body">
            <button
              type="button"
              className="btn btn-outline-dark btn-ecomm"
              data-bs-toggle="modal"
              data-bs-target="#NewAddress"
            >
              Add New Address
            </button>
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

export default Addresss
