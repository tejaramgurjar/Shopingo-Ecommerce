import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div>
      <div className="container">
  <h5 className="mb-0 fw-bold">Explore by categories</h5>
  <div className="search-categories mt-4">
    <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-5 g-4">
      <div className="col">
        <div className="card border-0 rounded-0 shadow bg-green">
          <div className="card-body p-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-white">Men Fashion</h5>
              </div>
              <div className="ms-auto fs-1 text-white">
                <i className="bi bi-cast" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0 shadow bg-pink">
          <div className="card-body p-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-white">Kids Wear</h5>
              </div>
              <div className="ms-auto fs-1 text-white">
                <i className="bi bi-boombox" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0 shadow bg-skyblue">
          <div className="card-body p-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-white">Electronics</h5>
              </div>
              <div className="ms-auto fs-1 text-white">
                <i className="bi bi-film" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0 shadow bg-purple">
          <div className="card-body p-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-white">Furniture</h5>
              </div>
              <div className="ms-auto fs-1 text-white">
                <i className="bi bi-music-note-beamed" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card border-0 rounded-0 shadow bg-yellow">
          <div className="card-body p-4">
            <div className="d-flex align-items-center">
              <div>
                <h5 className="mb-0 fw-bold text-white">Sports</h5>
              </div>
              <div className="ms-auto fs-1 text-white">
                <i className="bi bi-person-lines-fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*end row*/}
    <h5 className="fw-bold mb-3 mt-5">Trending Searches</h5>
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
      <div className="col">
        <div className="list-group list-group-flush search-categories">
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Women Topwear Fashion
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Kids School Dresses
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Best Mobile in Samsung
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Top Selling Brands
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Men'sports Watches
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Formal Shirts for Women
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Casual Pants for Men
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="list-group list-group-flush search-categories">
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Women Topwear Fashion
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Kids School Dresses
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Best Mobile in Samsung
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Top Selling Brands
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Men'sports Watches
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Formal Shirts for Women
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Casual Pants for Men
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="list-group list-group-flush search-categories">
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Women Topwear Fashion
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Kids School Dresses
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Best Mobile in Samsung
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Top Selling Brands
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Men'sports Watches
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Formal Shirts for Women
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Casual Pants for Men
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="list-group list-group-flush search-categories">
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Women Topwear Fashion
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Kids School Dresses
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Best Mobile in Samsung
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Top Selling Brands
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Men'sports Watches
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Formal Shirts for Women
          </Link>
          <Link
            to="javascript:;"
            className="list-group-item list-group-item-action py-3"
          >
            <i className="bi bi-arrow-up-right me-2" />
            Casual Pants for Men
          </Link>
        </div>
      </div>
    </div>
    {/*end row*/}
  </div>
</div>

    </div>
  )
}

export default Categories
