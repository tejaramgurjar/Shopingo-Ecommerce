import React from 'react'

function WhyChoose() {
  return (
    <div>


<div className="separator section-padding">
  <div className="line" />
  <h3 className="mb-0 h3 fw-bold">Why Choose Us</h3>
  <div className="line" />
</div>
<div className='container'>
<div className="row row-cols-1 row-cols-xl-3 g-4 why-choose">
  <div className="col d-flex">
    <div className="card rounded-0 shadow-none w-100">
      <div className="card-body">
        <img src="assets/images/icons/delivery.webp" width={60} alt="" />
        <h5 className="my-3 fw-bold">Free Shipping</h5>
        <p className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr in some form.
        </p>
      </div>
    </div>
  </div>
  <div className="col d-flex">
    <div className="card rounded-0 shadow-none w-100">
      <div className="card-body">
        <img src="assets/images/icons/money-bag.webp" width={60} alt="" />
        <h5 className="my-3 fw-bold">100% Back Gaurantee</h5>
        <p className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr in some form.
        </p>
      </div>
    </div>
  </div>
  <div className="col d-flex">
    <div className="card rounded-0 shadow-none w-100">
      <div className="card-body">
        <img src="assets/images/icons/support.webp" width={60} alt="" />
        <h5 className="my-3 fw-bold">Online Support 24/7</h5>
        <p className="mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industr in some form.
        </p>
      </div>
    </div>
  </div>
</div>
</div>
      
    </div>
  )
}

export default WhyChoose
