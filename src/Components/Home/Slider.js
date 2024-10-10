import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Slider() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    // Fetch data from API
    axios.get('https://react-ecom.gharchahiye.in/api/get-slider')
      .then(response => {
        // Set the image path and data
        setImgPath(response.data.imgPath);
        setCarouselItems(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching the carousel data:', error);
      });
  }, []);

  return (
    <>
      <br />
      <br />

      {/* Start carousel */}
      <section className="slider-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {carouselItems.map((item, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                style={{ backgroundColor: item.bg_color || 'initial' }}
              >
                <div className="row d-flex align-items-center">
                  <div className="col d-none d-lg-flex justify-content-center">
                    <div className="">
                      <h3 className="h3 fw-light text-white fw-bold">{item.title}</h3>
                      <h1 className="h1 text-white fw-bold">{item.subtitle}</h1>
                      <p className="text-white fw-bold">
                        <i>{item.short_desc}</i>
                      </p>
                      {item.button_name && (
                        <div className="">
                          <Link className="btn btn-dark btn-ecomm" to={item.button_link || '#'}>
                            {item.button_name}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col">
                    <img
                      src={`${imgPath}${item.image}`}
                      className="img-fluid"
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* End carousel */}
    </>
  );
}

export default Slider;
