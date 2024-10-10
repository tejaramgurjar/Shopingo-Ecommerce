import React from 'react'
import { Link } from 'react-router-dom'

function Brand() {
  return (
    <>
    {/*start Brands*/}
    <section className="section-padding">
      <div className="container">
        <div className="text-center pb-3">
          <h3 className="mb-0 h3 fw-bold">Shop By Brands</h3>
          <p className="mb-0 text-capitalize">
            Select your favorite brands and purchase
          </p>
        </div>
        <div className="brands">
          <div className="row row-cols-2 row-cols-lg-5 g-4">
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/01.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/02.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/03.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/04.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/05.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/06.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/07.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/08.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/09.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-3 border rounded brand-box">
                <div className="d-flex align-items-center">
                  <Link to="javascript:;">
                    <img
                      src="assets/images/brands/10.webp"
                      className="img-fluid"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/*end row*/}
        </div>
      </div>
    </section>
    {/*end Brands*/}
  </>
  
  )
}

export default Brand
