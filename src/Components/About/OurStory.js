import React from 'react'
import { Link } from 'react-router-dom'

function OurStory() {
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
          <Link to="javascript:;">Pages</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          About Us
        </li>
      </ol>
    </nav>
  </div>
</div>

    <div className='container'>
      <div className="row g-4">
  <div className="col-12 col-xl-6">
    <h3 className="fw-bold">Our Story</h3>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged.
    </p>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure.
    </p>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College.
    </p>
  </div>
  <div className="col-12 col-xl-6">
    <img
      src="../../../../images.pexels.com/photos/7679877/pexels-photo-76798777874.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      className="img-fluid"
      alt=""
    />
  </div>
</div>


    </div>
    </>
  )
}

export default OurStory
