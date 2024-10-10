import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';  // it is used for displaying the Error message
import 'react-toastify/dist/ReactToastify.css';

function Registration() {
  const [name,setName]= useState("");
  const [mobile,setMobile]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");

  const [nameError,setNameError]= useState("");
  const [mobileError,setMobileError]= useState("");
  const [emailError,setEmailError]= useState("");
  const [passwordError,setPasswordError]= useState("");

  const handleError = (e) =>{
    const {name,value}=e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/;
 
    if (name === 'name') {
      if (value.trim() === '') {
        setNameError('Please enter your name');
      } else {
        setNameError('');
      }
      setName(value);
    } else if (name === 'email') {
      if (value.trim() === '') {
        setEmailError('Please enter your email');
      } else if (!emailRegex.test(value)) {
        setEmailError('Please enter a valid email');
      } else {
        setEmailError('');
      }
      setEmail(value);
    } else if (name === 'password') {
      if (value.trim() === '') {
        setPasswordError('Please enter your password');
      } else if (!passwordRegex.test(value)) {
        setPasswordError('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character');
      } else {
        setPasswordError('');
      }
      setPassword(value);
    } else if (name === 'mobile') {
      if (value.trim() === '') {
        setMobileError('Please enter your mobile number');
      } else if (value.trim().length < 10) {
        setMobileError('Please enter a valid mobile number');
      } else {
        setMobileError('');
      }
      setMobile(value);
    }
  };

  async function Registration(event){
    event.preventDefault();

    try{
        const response = await axios.post(
            "https://react-ecom.gharchahiye.in/api/register",
            {
                username: name,
                mobile: mobile,
                email:email,
                password:password
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        // Display success message using toast

        // console.log(response.data)
        if(response.data.message ===  "successfully Added"){
            toast.success(`${response.data.message}`, {})
            //reset form Fields

            setName("");
            setMobile("");
            setEmail("");
            setPassword("");

            
        }else{
            toast.error(`${response.data.message}`,{});
        }
            
    } catch(error){
        // Display error message using toast
        toast.error(`Error: ${error.message}`, {
        // position: toast.POSITION.TOP_RIGHT
    }); 
    }
  }




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
              <Link to="javascript:;">Authentication</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Register
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/*end breadcrumb*/}
    {/*start product details*/}
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 col-xxl-5 mx-auto">
            <div className="card rounded-0">
              <div className="card-body p-4">
                <h4 className="mb-0 fw-bold text-center">Registration</h4>
                <hr />
                <p className="mb-2">Join / Sign Up using</p>
                <div className="social-login mb-4">
                  <div className="row g-4">
                    <div className="col-xl-6">
                      <Link to= "https://www.facebook.com/"><button
                        type="button"
                        className="btn bg-facebook btn-ecomm w-100 text-white"
                      >
                        <i className="bi bi-facebook me-2" />
                        Facebook
                      </button>
                      </Link>
                    </div>
                    <div className="col-xl-6">
                      <Link to="https://www.google.com/"><button
                        type="button"
                        className="btn bg-pinterest btn-ecomm w-100 text-white"
                      >
                        <i className="bi bi-google me-2" />
                        Google
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="separator mb-4">
                  <div className="line" />
                  <p className="mb-0 fw-bold">Or</p>
                  <div className="line" />
                </div>
                <form>
                  <div className="row g-4">
                    <div className="col-12">
                      <label htmlFor="exampleName" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="exampleName"
                        name='name'
                        value={name}
                        onChange={handleError}
                      />

                      <div style={{ height: '20px' }}>
                            {nameError && (
                            <p style={{ color: 'red' }}>{nameError}</p>
                         )}
        </div>


                      
                    </div>
                    <div className="col-12">
                      <label htmlFor="exampleMobile" className="form-label">
                        Mobile
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="exampleMobile"
                        name='mobile'
                        value={mobile}
                        onChange={handleError}
                      />
                      <div style={{ height: '20px' }}>
                            {mobileError && (
                            <p style={{ color: 'red' }}>{mobileError}</p>
                         )}
                        </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="exampleEmail" className="form-label">
                        Email ID
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="exampleEmail"
                        name='email'
                        value={email}
                        onChange={handleError}
                      />
                      <div style={{ height: '20px' }}>
                            {emailError && (
                            <p style={{ color: 'red' }}>{emailError}</p>
                         )}
                        </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="examplePassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="text"
                        className="form-control rounded-0"
                        id="examplePassword"
                        name='password'
                        value={password}
                        onChange={handleError}
                      />
                      <div style={{ height: '20px' }}>
                            {passwordError && (
                            <p style={{ color: 'red' }}>{passwordError}</p>
                         )}
                        </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          I agree to Terms and Conditions
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <hr className="my-0" />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-dark rounded-0 btn-ecomm w-100"
                        onClick={Registration}
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0 rounded-0 w-100">
                        Already have an account?{" "}
                        <Link to="/login" className="text-danger">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                  {/*-end row*/}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*end row*/}
        <ToastContainer position="top-right"
autoClose={5000} />
      </div>
    </section>
    {/*start product details*/}
  </div>
  
  )
}

export default Registration
