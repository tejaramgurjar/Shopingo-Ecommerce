import React from 'react'
import { Link } from 'react-router-dom'

function ShopGrid5() {
  return (
    <div>
      
      <div className="py-4 border-bottom">
  <div className="container-fluid">
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

{/* grid 5 */}

<section className="py-4">
  <h5 className="mb-0 fw-bold d-none">Product Grid</h5>
  <div className="container-fluid">
    <div
      className="btn btn-dark btn-ecomm d-xl-none position-fixed top-50 start-0 translate-middle-y"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbarFilter"
    >
      <span>
        <i className="bi bi-funnel me-1" /> Filters
      </span>
    </div>
    <div className="row">
      <div className="col-12 col-xl-2 filter-column">
        <nav className="navbar navbar-expand-xl flex-wrap p-0">
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbarFilter"
            aria-labelledby="offcanvasNavbarFilterLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title mb-0 fw-bold"
                id="offcanvasNavbarFilterLabel"
              >
                Filters
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <div className="filter-sidebar">
                <div className="card rounded-0">
                  <div className="card-header d-none d-xl-block bg-transparent">
                    <h5 className="mb-0 fw-bold">Filters</h5>
                  </div>
                  <div className="card-body">
                    <h6 className="p-1 fw-bold bg-light">Categories</h6>
                    <div className="categories">
                      <div className="categories-wrapper height-1 p-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate1"
                          >
                            <span>Shirts</span>
                            <span className="product-number">(1548)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate2"
                          >
                            <span>Jeans</span>
                            <span className="product-number">(568)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate3"
                          >
                            <span>Kurtas</span>
                            <span className="product-number">(784)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate4"
                          >
                            <span>Makeup</span>
                            <span className="product-number">(1789)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate5"
                          >
                            <span>Shoes</span>
                            <span className="product-number">(358)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate6"
                          >
                            <span>Heels</span>
                            <span className="product-number">(572)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate7"
                          >
                            <span>Lehenga</span>
                            <span className="product-number">(754)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate8"
                          >
                            <span>Laptops</span>
                            <span className="product-number">(541)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate9"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate9"
                          >
                            <span>Jewellary</span>
                            <span className="product-number">(365)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate10"
                          >
                            <span>Sports</span>
                            <span className="product-number">(4512)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate11"
                          >
                            <span>Music</span>
                            <span className="product-number">(647)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate12"
                          >
                            <span>Headphones</span>
                            <span className="product-number">(9848)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate13"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate13"
                          >
                            <span>Sunglasses</span>
                            <span className="product-number">(751)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekCate14"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekCate14"
                          >
                            <span>Belts</span>
                            <span className="product-number">(4923)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="brands">
                      <h6 className="p-1 fw-bold bg-light">Brands</h6>
                      <div className="brands-wrapper height-1 p-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand1"
                          >
                            <span>Samsung</span>
                            <span className="product-number">(1548)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand2"
                          >
                            <span>Sony</span>
                            <span className="product-number">(478)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand3"
                          >
                            <span>Microsoft</span>
                            <span className="product-number">(689)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand4"
                          >
                            <span>Reebok</span>
                            <span className="product-number">(987)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand5"
                          >
                            <span>Adidas</span>
                            <span className="product-number">(358)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand6"
                          >
                            <span>Puma</span>
                            <span className="product-number">(5682)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand7"
                          >
                            <span>Ajio</span>
                            <span className="product-number">(5712)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand8"
                          >
                            <span>Motorola</span>
                            <span className="product-number">(657)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand9"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand9"
                          >
                            <span>amazon</span>
                            <span className="product-number">(984)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand10"
                          >
                            <span>Canon</span>
                            <span className="product-number">(524)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand11"
                          >
                            <span>Apple</span>
                            <span className="product-number">(168)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekBrand12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekBrand12"
                          >
                            <span>Philips</span>
                            <span className="product-number">(279)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="Price">
                      <h6 className="p-1 fw-bold bg-light">Price</h6>
                      <div className="Price-wrapper p-1">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="$10"
                          />
                          <span className="input-group-text bg-section-1 border-0">
                            -
                          </span>
                          <input
                            type="text"
                            className="form-control rounded-0"
                            placeholder="$10000"
                          />
                          <button
                            type="button"
                            className="btn btn-outline-dark rounded-0 ms-2"
                          >
                            <i className="bi bi-chevron-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="colors">
                      <h6 className="p-1 fw-bold bg-light">Colors</h6>
                      <div className="color-wrapper height-1 p-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor1"
                          >
                            <i className="bi bi-circle-fill me-1 text-danger" />
                            <span>Red</span>
                            <span className="product-number">(845)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor2"
                          >
                            <i className="bi bi-circle-fill me-1 text-primary" />
                            <span>Blue</span>
                            <span className="product-number">(257)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor3"
                          >
                            <i className="bi bi-circle-fill me-1 text-warning" />
                            <span>Yellow</span>
                            <span className="product-number">(968)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor4"
                          >
                            <i className="bi bi-circle-fill me-1 text-success" />
                            <span>Green</span>
                            <span className="product-number">(478)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor5"
                          >
                            <i className="bi bi-circle-fill me-1 text-info" />
                            <span>Skyblue</span>
                            <span className="product-number">(256)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor6"
                          >
                            <i className="bi bi-circle-fill me-1 text-dark" />
                            <span>Black</span>
                            <span className="product-number">(124)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor7"
                          >
                            <i className="bi bi-circle-fill me-1 text-purple" />
                            <span>Purple</span>
                            <span className="product-number">(897)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor8"
                          >
                            <i className="bi bi-circle-fill me-1 text-orange" />
                            <span>Orange</span>
                            <span className="product-number">(68)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor9"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor9"
                          >
                            <i className="bi bi-circle-fill me-1 text-cyane" />
                            <span>Cyane</span>
                            <span className="product-number">(784)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor10"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor10"
                          >
                            <i className="bi bi-circle-fill me-1 text-brown" />
                            <span>Brown</span>
                            <span className="product-number">(532)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor11"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor11"
                          >
                            <i className="bi bi-circle-fill me-1 text-ten" />
                            <span>Ten</span>
                            <span className="product-number">(532)</span>
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="chekColor12"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekColor12"
                          >
                            <i className="bi bi-circle-fill me-1 text-pink" />
                            <span>Pink</span>
                            <span className="product-number">(452)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="discount">
                      <h6 className="p-1 fw-bold bg-light">Discount Range</h6>
                      <div className="discount-wrapper p-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option1"
                            id="chekDisc1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc1"
                          >
                            10% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option2"
                            id="chekDisc2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc2"
                          >
                            20% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option3"
                            id="chekDisc3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc3"
                          >
                            30% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option4"
                            id="chekDisc4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc4"
                          >
                            40% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option5"
                            id="chekDisc5"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc5"
                          >
                            50% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option6"
                            id="chekDisc6"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc6"
                          >
                            60% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option7"
                            id="chekDisc7"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc7"
                          >
                            70% and Above
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            name="exampleRadios"
                            type="radio"
                            defaultValue="option8"
                            id="chekDisc8"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="chekDisc8"
                          >
                            80% and Above
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-12 col-xl-10">
        <div className="shop-right-sidebar">
          <div className="card rounded-0">
            <div className="card-body p-2">
              <div className="d-flex align-items-center justify-content-between bg-light p-2">
                <div className="product-count">657 Items Found</div>
                <div className="view-type hstack gap-2 d-none d-xl-flex">
                  <p className="mb-0">Grid</p>
                  <div>
                    <a
                      href="shop-grid.html"
                      className="grid-type-3 d-flex gap-1"
                    >
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                  <div>
                    <a
                      href="shop-grid-type-5.html"
                      className="grid-type-3 d-flex gap-1 active"
                    >
                      <span />
                      <span />
                      <span />
                      <span />
                      <span />
                    </a>
                  </div>
                </div>
                <form>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent rounded-0 border-0">
                      Sort By
                    </span>
                    <select className="form-select rounded-0">
                      <option selected="">Whats'New</option>
                      <option value={1}>Popularity</option>
                      <option value={2}>Better Discount</option>
                      <option value={3}>Price : Hight to Low</option>
                      <option value={4}>Price : Low to Hight</option>
                      <option value={5}>Custom Rating</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="product-grid mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/01.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/02.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/03.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/04.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/05.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/06.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/07.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/featured-products/08.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/01.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/02.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/05.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/04.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/06.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/07.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/new-arrival/08.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h5 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h5>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card border shadow-none">
                  <div className="position-relative overflow-hidden">
                    <div className="product-options d-flex align-items-center justify-content-center gap-2 mx-auto position-absolute bottom-0 start-0 end-0">
                      <a href="javascript:;">
                        <i className="bi bi-heart" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-basket3" />
                      </a>
                      <a href="javascript:;">
                        <i className="bi bi-zoom-in" />
                      </a>
                    </div>
                    <a href="javascript:;">
                      <img
                        src="assets/images/best-sellar/01.webp"
                        className="card-img-top"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="card-body border-top">
                    <h6 className="mb-0 fw-bold product-short-title">
                      Syndrona
                    </h6>
                    <p className="mb-0 product-short-name">
                      Color Printed Kurta
                    </p>
                    <div className="product-price d-flex align-items-center gap-2 mt-2">
                      <div className="h6 fw-bold">$458</div>
                      <div className="h6 fw-light text-muted text-decoration-line-through">
                        $2089
                      </div>
                      <div className="h6 fw-bold text-danger">(70% off)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end row*/}
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
  </div>
</section>


    </div>
  )
}

export default ShopGrid5
