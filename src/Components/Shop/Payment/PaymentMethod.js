import React from 'react'
import { Link } from 'react-router-dom'

function PaymentMethod() {
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
          <Link to="javascript:;">Checkout</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Payment Method
        </li>
      </ol>
    </nav>
  </div>
</div>


{/* method */}

<section className="section-padding">
  <div className="container">
    <div className="d-flex align-items-center px-3 py-2 border mb-4">
      <div className="text-start">
        <h4 className="mb-0 h4 fw-bold">Select Payment Method</h4>
      </div>
    </div>
    <div className="row g-4">
      <div className="col-12 col-lg-8 col-xl-8">
        <div className="card rounded-0 payment-method">
          <div className="row g-0">
            <div className="col-12 col-lg-4 bg-light">
              <div className="nav flex-column nav-pills" role="tablist">
                <button
                  className="nav-link rounded-0"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  <i className="bi bi-cash-stack me-2" />
                  Cash On Delivery
                </button>
                <button
                  className="nav-link rounded-0"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  <i className="bi bi-paypal me-2" />
                  Paypal
                </button>
                <button
                  className="nav-link active rounded-0"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="bi bi-credit-card-2-back me-2" />
                  Credit/Debit Card
                </button>
                <button
                  className="nav-link rounded-0 border-bottom-0"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  aria-selected="false"
                  tabIndex={-1}
                  role="tab"
                >
                  <i className="bi bi-bank2 me-2" />
                  Net Banking
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div className="tab-content p-3">
                <div
                  className="tab-pane fade"
                  id="v-pills-home"
                  role="tabpanel"
                >
                  <h5 className="mb-3 fw-bold">
                    I would like to pay after product delivery
                  </h5>
                  <button
                    type="button"
                    className="btn btn-ecomm btn-dark w-100 py-3 px-5"
                  >
                    Place Order
                  </button>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                >
                  <div className="mb-3">
                    <p>Select your Paypal Account type</p>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Domestic
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
                        International
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="d-block">
                      {" "}
                      <Link
                        to="javscript:;"
                        className="btn btn-outline-dark btn-ecomm rounded-0"
                      >
                        <i className="bi bi-paypal me-2" />
                        Login to my Paypal
                      </Link>
                    </div>
                  </div>
                  <div className="mb-3">
                    <p className="mb-0">
                      Note: After clicking on the button, you will be directed
                      to a secure gateway for payment. After completing the
                      payment process, you will be redirected back to the
                      website to view details of your order.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ecomm btn-dark w-100 py-3 px-5"
                  >
                    Pay Now
                  </button>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="v-pills-messages"
                  role="tabpanel"
                >
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingCardNumber"
                          placeholder="Card Number"
                        />
                        <label htmlFor="floatingCardNumber">Card Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingNameonCard"
                          placeholder="Name on Card"
                        />
                        <label htmlFor="floatingNameonCard">Name on Card</label>
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingValidity"
                          placeholder="Validity (MM/YY)"
                        />
                        <label htmlFor="floatingValidity">
                          Validity (MM/YY)
                        </label>
                      </div>
                    </div>
                    <div className="col-12 col-lg-4">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control rounded-0"
                          id="floatingCCV"
                          placeholder="CCV"
                        />
                        <label htmlFor="floatingCCV">CCV</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-ecomm btn-dark w-100 py-3 px-5"
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                  {/*end row*/}
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="#v-pills-settings-tab"
                >
                  <div className="mb-3">
                    <p>Select your Bank</p>
                    <select
                      className="form-select form-select-lg rounded-0"
                      aria-label="Default select example"
                    >
                      <option selected="">--Please Select Your Bank--</option>
                      <option value={1}>Bank Name 1</option>
                      <option value={2}>Bank Name 2</option>
                      <option value={3}>Bank Name 3</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ecomm btn-dark w-100 py-3 px-5 mb-3"
                  >
                    Pay Now
                  </button>
                  <div className="">
                    <p className="mb-0">
                      Note: After clicking on the button, you will be directed
                      to a secure gateway for payment. After completing the
                      payment process, you will be redirected back to the
                      website to view details of your order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
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

export default PaymentMethod
