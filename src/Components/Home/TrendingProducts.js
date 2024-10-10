import axios from 'axios';
import React, { useEffect, useState } from 'react';

function TrendingProducts() {
  const [TrendItem, setTrendItem] = useState([]);
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    axios.get('https://react-ecom.gharchahiye.in/api/get-trending-products')
      .then(response => {
        setTrendItem(response.data.data);
        setImgPath(response.data.imgPath);
      })
      .catch(error => {
        console.error('Error fetching the trending data:', error);
      });
  }, []);

  return (
    <>
      {/* Start special product */}
      <section className="section-padding bg-section-2">
        <div className="container">
          {TrendItem.map((item, index) => (
            <div key={index} className="card border-0 rounded-0 p-3 depth mb-4">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                  <img
                    src={`${imgPath}${item.image}`}
                    className="img-fluid rounded-0"
                    alt={item.title}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="card-body">
                    <h3 className="fw-bold">{item.title}</h3>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-transparent px-0">
                        {item.description1}
                      </li>
                      <li className="list-group-item bg-transparent px-0">
                        {item.description2}
                      </li>
                      <li className="list-group-item bg-transparent px-0">
                        {item.description3}
                      </li>
                      <li className="list-group-item bg-transparent px-0">
                        {item.description4}
                      </li>
                    </ul>
                    <div className="buttons mt-4 d-flex flex-column flex-lg-row gap-3">
                      <a
                        href={item.button1link}
                        className="btn btn-lg btn-dark btn-ecomm px-5 py-3"
                      >
                        {item.button1name}
                      </a>
                      <a
                        href={item.button2link}
                        className="btn btn-lg btn-outline-dark btn-ecomm px-5 py-3"
                      >
                        {item.button2name}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* End special product */}
    </>
  );
}

export default TrendingProducts;
