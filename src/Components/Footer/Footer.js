import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    



    {/*start footer*/}
    <section className="footer-section bg-section-2 section-padding">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-4 g-4">
          <div className="col">
            <div className="footer-widget-6">
              <img
                src="assets/images/logo.webp"
                className="logo-img mb-3"
                alt=""
              />
              <h5 className="mb-3 fw-bold">About Us</h5>
              <p className="mb-2">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <Link className="link-dark" to="javascript:;">
                Read More
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="footer-widget-7">
              <h5 className="mb-3 fw-bold">Explore</h5>
              <ul className="widget-link list-unstyled">
                <li>
                  <Link to="javascript:;">Fashion</Link>
                </li>
                <li>
                  <Link to="javascript:;">Women</Link>
                </li>
                <li>
                  <Link to="javascript:;">Furniture</Link>
                </li>
                <li>
                  <Link to="javascript:;">Shoes</Link>
                </li>
                <li>
                  <Link to="javascript:;">Topwear</Link>
                </li>
                <li>
                  <Link to="javascript:;">Brands</Link>
                </li>
                <li>
                  <Link to="javascript:;">Kids</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-widget-8">
              <h5 className="mb-3 fw-bold">Company</h5>
              <ul className="widget-link list-unstyled">
                <li>
                  <Link to="javascript:;">About Us</Link>
                </li>
                <li>
                  <Link to="javascript:;">Contact Us</Link>
                </li>
                <li>
                  <Link to="faq">FAQ</Link>
                </li>
                <li>
                  <Link to="privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="Complaints">Terms</Link>
                </li>
                <li>
                  <Link to="Complaints">Complaints</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="footer-widget-9">
              <h5 className="mb-3 fw-bold">Follow Us</h5>
              <div className="social-link d-flex align-items-center gap-2">
                <Link to="javascript:;">
                  <i className="bi bi-facebook" />
                </Link>
                <Link to="javascript:;">
                  <i className="bi bi-twitter" />
                </Link>
                <Link to="javascript:;">
                  <i className="bi bi-linkedin" />
                </Link>
                <Link to="javascript:;">
                  <i className="bi bi-youtube" />
                </Link>
                <Link to="javascript:;">
                  <i className="bi bi-instagram" />
                </Link>
              </div>
              <div className="mb-3 mt-3">
                <h5 className="mb-0 fw-bold">Support</h5>
                <p className="mb-0 text-muted">support@example.com</p>
              </div>
              <div className="">
                <h5 className="mb-0 fw-bold">Toll Free</h5>
                <p className="mb-0 text-muted">1800- 8xx 2xx</p>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
        <div className="my-5" />
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h5 className="fw-bold mb-3">Download Mobile App</h5>
            </div>
            <div className="app-icon d-flex flex-column flex-sm-row align-items-center justify-content-center gap-2">
              <div>
                <Link to="javascript:;">
                  <img src="assets/images/play-store.webp" width={160} alt="" />
                </Link>
              </div>
              <div>
                <Link to="javascript:;">
                  <img src="assets/images/apple-store.webp" width={160} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
      </div>
    </section>
    {/*end footer*/}
    <footer className="footer-strip text-center py-3 bg-section-2 border-top positon-absolute bottom-0">
      <p className="mb-0 text-muted">
        © 2022. www.example.com | All rights reserved.
      </p>
    </footer>
  </>
  
  )
}

export default Footer
