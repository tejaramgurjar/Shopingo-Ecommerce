import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    
  {/*start top header*/}
  <header className="top-header">
    <nav className="navbar navbar-expand-xl w-100 navbar-dark container gap-3">
      <Link className="navbar-brand d-none d-xl-inline" to="index.html">
        <img src="assets/images/logo.webp" className="logo-img" alt="" />
      </Link>
      <Link
        className="mobile-menu-btn d-inline d-xl-none"
        to="javascript:;"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
      >
        <i className="bi bi-list" />
      </Link>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasNavbar"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-logo">
            <img src="assets/images/logo.webp" className="logo-img" alt="" />
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body primary-menu">
          <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                to="tv-shows.html"
                data-bs-toggle="dropdown"
              >
                Categories
              </Link>
              <div className="dropdown-menu dropdown-large-menu">
                <div className="row">
                  <div className="col-12 col-xl-4">
                    <h6 className="large-menu-title">Fashion</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="javascript:;">Casual T-Shirts</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Formal Shirts</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Jackets</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Jeans</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Dresses</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Sneakers</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Belts</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Sports Shoes</Link>
                      </li>
                    </ul>
                  </div>
                  {/* end col-3 */}
                  <div className="col-12 col-xl-4">
                    <h6 className="large-menu-title">Electronics</h6>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="javascript:;">Mobiles</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Laptops</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Macbook</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Televisions</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Lighting</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Smart Watch</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">Galaxy Phones</Link>
                      </li>
                      <li>
                        <Link to="javascript:;">PC Monitors</Link>
                      </li>
                    </ul>
                  </div>
                  {/* end col-3 */}
                  <div className="col-12 col-xl-4 d-none d-xl-block">
                    <div className="pramotion-banner1">
                      <img
                        src="assets/images/menu-img.webp"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* end col-3 */}
                </div>
                {/* end row */}
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                to="javascript:;"
                data-bs-toggle="dropdown"
              >
                Shop
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="cart">
                    Shop Cart
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="wishlist">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="productdetails">
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="payment">
                    Payment Method
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="billingdetails">
                    Billing Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="addresss">
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="shopgrid">
                    Shop Grid
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="shopgrid4">
                    Shop Grid 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="shopgrid5">
                    Shop Grid 5
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="search">
                    Search
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                to="javascript:;"
                data-bs-toggle="dropdown"
              >
                Account
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="order">
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="Editprofile">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="address"
                  >
                    Addresses
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="registration"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="resetpassword"
                  >
                    Password
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul className="navbar-nav secondary-menu flex-row">
        {/* <li className="nav-item">
          <Link className="nav-link dark-mode-icon" to="javascript:;">
            <div className="mode-icon">
              <i className="bi bi-moon" />
            </div>
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="search">
            <i className="bi bi-search" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="wishlist">
            <i className="bi bi-suit-heart" />
          </Link>
        </li>
        <li
          className="nav-item"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
        >
          <Link className="nav-link position-relative" to="cart">
            <div className="cart-badge">8</div>
            <i className="bi bi-basket2" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">
            <i className="bi bi-person-circle" />
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  {/*end top header*/}
</>

  )
}

export default Header
