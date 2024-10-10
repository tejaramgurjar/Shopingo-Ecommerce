// import React from 'react'
// import { Link } from 'react-router-dom'

// function LatestBlog() {
//   return (
//     <>
//     {/*start blog*/}
//     <section className="section-padding">
//       <div className="container">
//         <div className="text-center pb-3">
//           <h3 className="mb-0 fw-bold">Latest Blog</h3>
//           <p className="mb-0 text-capitalize">Check our latest news</p>
//         </div>
//         <div className="blog-cards">
//           <div className="row row-cols-1 row-cols-lg-3 g-4">
//             <div className="col">
//               <div className="card">
//                 <img
//                   src="assets/images/blog/01.webp"
//                   className="card-img-top rounded-0"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="posted-by">
//                       <p className="mb-0">
//                         <i className="bi bi-person me-2" />
//                         Virendra
//                       </p>
//                     </div>
//                     <div className="posted-date">
//                       <p className="mb-0">
//                         <i className="bi bi-calendar me-2" />
//                         15 Aug, 2022
//                       </p>
//                     </div>
//                   </div>
//                   <h5 className="card-title fw-bold mt-3">Blog title here</h5>
//                   <p className="mb-0">
//                     Some quick example text to build on the card title and make.
//                   </p>
//                   <Link
//                     to="blog-read.html"
//                     className="btn btn-outline-dark btn-ecomm mt-3"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col">
//               <div className="card">
//                 <img
//                   src="assets/images/blog/02.webp"
//                   className="card-img-top rounded-0"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="posted-by">
//                       <p className="mb-0">
//                         <i className="bi bi-person me-2" />
//                         Virendra
//                       </p>
//                     </div>
//                     <div className="posted-date">
//                       <p className="mb-0">
//                         <i className="bi bi-calendar me-2" />
//                         15 Aug, 2022
//                       </p>
//                     </div>
//                   </div>
//                   <h5 className="card-title fw-bold mt-3">Blog title here</h5>
//                   <p className="mb-0">
//                     Some quick example text to build on the card title and make.
//                   </p>
//                   <Link
//                     to="blog-read.html"
//                     className="btn btn-outline-dark btn-ecomm mt-3"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="col">
//               <div className="card">
//                 <img
//                   src="assets/images/blog/03.webp"
//                   className="card-img-top rounded-0"
//                   alt="..."
//                 />
//                 <div className="card-body">
//                   <div className="d-flex align-items-center gap-4">
//                     <div className="posted-by">
//                       <p className="mb-0">
//                         <i className="bi bi-person me-2" />
//                         Virendra
//                       </p>
//                     </div>
//                     <div className="posted-date">
//                       <p className="mb-0">
//                         <i className="bi bi-calendar me-2" />
//                         15 Aug, 2022
//                       </p>
//                     </div>
//                   </div>
//                   <h5 className="card-title fw-bold mt-3">Blog title here</h5>
//                   <p className="mb-0">
//                     Some quick example text to build on the card title and make.
//                   </p>
//                   <Link
//                     to="blog-read.html"
//                     className="btn btn-outline-dark btn-ecomm mt-3"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/*end row*/}
//         </div>
//       </div>
//     </section>
//     {/*end blog*/}
//   </>
  
//   )
// }

// export default LatestBlog
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function LatestBlog() {
  const [TrendBlog, setTrendBlog] = useState([]);
  const [imgPath, setImgPath] = useState('');

  useEffect(() => {
    axios.get('https://react-ecom.gharchahiye.in/api/get-blog')
      .then((response) => {
        setTrendBlog(response.data.data);
        setImgPath(response.data.imgPath);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {/* Start blog */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center pb-3">
            <h3 className="mb-0 fw-bold">Latest Blog</h3>
            <p className="mb-0 text-capitalize">Check our latest news</p>
          </div>
          <div className="blog-cards">
            <div className="row row-cols-1 row-cols-lg-3 g-4">
              {TrendBlog.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card">
                    <img
                      src={`${imgPath}${item.image}`}
                      className="card-img-top rounded-0"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <div className="d-flex align-items-center gap-4">
                        <div className="posted-by">
                          <p className="mb-0">
                            <i className="bi bi-person me-2" />
                            {item.author_name}
                          </p>
                        </div>
                        <div className="posted-date">
                          <p className="mb-0">
                            <i className="bi bi-calendar me-2" />
                            {new Date(item.blog_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <h5 className="card-title fw-bold mt-3">{item.title}</h5>
                      <p className="mb-0">{item.subtitle}</p>
                      <Link
                        to="/BlogRead"
                        className="btn btn-outline-dark btn-ecomm mt-3"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* End row */}
          </div>
        </div>
      </section>
      {/* End blog */}
    </>
  );
}

export default LatestBlog;
