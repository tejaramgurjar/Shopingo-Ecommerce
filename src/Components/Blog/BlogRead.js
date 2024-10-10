import React from 'react'
import { Link } from 'react-router-dom'

function BlogRead() {
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
              <Link to="javascript:;">Blog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Post
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/*end breadcrumb*/}
    {/*start product details*/}
    <section className="section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-xl-8">
            <div className="d-flex flex-column gap-4">
              <div className="card rounded-0 border">
                <img
                  src="assets/images/blog/01.webp"
                  className="card-img-top rounded-0 mb-3"
                  alt="..."
                />
                <div className="card-body">
                  <div className="d-flex align-items-center gap-4">
                    <div className="posted-by">
                      <p className="mb-0">
                        <i className="bi bi-person me-2" />
                        Virendra
                      </p>
                    </div>
                    <div className="posted-by">
                      <p className="mb-0">
                        <i className="bi bi-chat me-2" />
                        18 Comments
                      </p>
                    </div>
                    <div className="posted-date">
                      <p className="mb-0">
                        <i className="bi bi-calendar me-2" />
                        15 Aug, 2022
                      </p>
                    </div>
                    <div className="posted-like">
                      <p className="mb-0">
                      <i className="bi bi-hand-thumbs-up me-2" />
                            Likes
                      
                      </p>
                    </div>
                  </div>
                  <h4 className="card-title fw-bold mt-3">Blog title here</h4>
                  <p className="mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                  <br />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't look
                    even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text.
                  </p>
                  <p>
                    Nullam non felis odio. Praesent aliquam magna est, nec
                    volutpat quam aliquet non. Cras ut lobortis massa, a fringilla
                    dolor. Quisque ornare est at felis consectetur mollis. Aliquam
                    vitae metus et enim posuere ornare. Praesent sapien erat,
                    pellentesque quis sollicitudin eget, imperdiet bibendum magna.
                    Aenean sit amet odio est.
                  </p>
                  <div className="d-flex align-items-center gap-3 py-3 border-top border-bottom">
                    <div className="">
                      <h5 className="mb-0 fw-bold">Share This Post</h5>
                    </div>
                    <div className="footer-widget-9">
                      <div className="social-link d-flex flex-wrap align-items-center gap-2">
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
                    </div>
                  </div>
                  <div className="author d-flex align-items-start gap-3 my-3">
                    <img
                      src="assets/images/avatars/01.html"
                      className=""
                      alt=""
                      width={80}
                    />
                    <div className="">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <p className="mb-0">
                        Donec egestas metus non vehicula accumsan. Pellentesque
                        sit amet tempor nibh. Mauris in risus lorem. Cras
                        malesuada gravida massa eget viverra.
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="reply-form p-4 border">
                    <h5 className="mb-0 fw-bold">Leave a Reply</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Comment</label>
                        <textarea
                          className="form-control rounded-0"
                          rows={4}
                          defaultValue={""}
                        />
                      </div>
                      {/* <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control rounded-0"
                          placeholder=""
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control rounded-0" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Website</label>
                        <input type="text" className="form-control rounded-0" />
                      </div> */}
                      <div className="mb-0">
                        <button type="button" className="btn btn-dark btn-ecomm">
                          Post Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="blog-left-sidebar border p-4">
              <form>
                <div className="position-relative mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg ps-5 rounded-0"
                    placeholder="Search Product..."
                  />
                  <span className="position-absolute top-50 product-show translate-middle-y">
                    <i className="bi bi-search ms-3" />
                  </span>
                </div>
                <div className="blog-categories mb-4">
                  {/* <h5 className="mb-3 fw-bold">Blog Categories</h5>
                  <div className="list-group list-group-flush">
                    {" "}
                    <Link
                      to="javascript:;"
                      className="list-group-item bg-transparent"
                    >
                      <i className="bi bi-chevron-right me-1" /> Fashion
                    </Link>
                    <Link
                      to="javascript:;"
                      className="list-group-item bg-transparent"
                    >
                      <i className="bi bi-chevron-right me-1" /> Electronis
                    </Link>
                    <Link
                      to="javascript:;"
                      className="list-group-item bg-transparent"
                    >
                      <i className="bi bi-chevron-right me-1" /> Accessories
                    </Link>
                    <Link
                      to="javascript:;"
                      className="list-group-item bg-transparent"
                    >
                      <i className="bi bi-chevron-right me-1" /> Kitchen &amp;
                      Table
                    </Link>
                    <Link
                      to="javascript:;"
                      className="list-group-item bg-transparent"
                    >
                      <i className="bi bi-chevron-right me-1" /> Furniture
                    </Link>
                  </div> */}
                </div>
                <div className="blog-categories recent-post mb-4">
                  <h5 className="mb-4 fw-bold">Recent Posts</h5>
                  <div className="d-flex align-items-start">
                    <img src="assets/images/blog/01.webp" width={100} alt="" />
                    <div className="ms-3">
                      {" "}
                      <Link
                        to="javascript:;"
                        className="fs-6 fw-bold text-content"
                      >
                        Post title here
                      </Link>
                      <p className="mb-0">March 15, 2021</p>
                    </div>
                  </div>
                  <div className="my-3 border-bottom" />
                  <div className="d-flex align-items-start">
                    <img src="assets/images/blog/02.webp" width={100} alt="" />
                    <div className="ms-3">
                      {" "}
                      <Link
                        to="javascript:;"
                        className="fs-6 fw-bold text-content"
                      >
                        Post title here
                      </Link>
                      <p className="mb-0">March 15, 2021</p>
                    </div>
                  </div>
                  <div className="my-3 border-bottom" />
                  <div className="d-flex align-items-start">
                    <img src="assets/images/blog/03.webp" width={100} alt="" />
                    <div className="ms-3">
                      {" "}
                      <Link
                        to="javascript:;"
                        className="fs-6 fw-bold text-content"
                      >
                        Post title here
                      </Link>
                      <p className="mb-0">March 15, 2021</p>
                    </div>
                  </div>
                </div>
                <div className="blog-categories">
                  {/* <h5 className="mb-4 fw-bold">Popular Tags</h5>
                  <div className="tags-box d-flex flex-wrap gap-3">
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Cloths
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Electronis
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Furniture
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Laptops
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Men Wear
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Shoes
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Topwear
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Formal Shirts
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Headphones
                      </Link>
                    </div>
                    <div>
                      <Link
                        to="javascript:;"
                        className="btn btn-outline-dark rounded-0 btn-ecomm"
                      >
                        Bottom Wear
                      </Link>
                    </div>
                  </div> */}
                </div>
              </form>
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

export default BlogRead
