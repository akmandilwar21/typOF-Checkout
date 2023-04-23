// import { useState } from "react";

// function Testinomial(props: any) {
//   let data = props.props.data;

//   return (
//     <>
//       <div className="pt-7 pb-6 testimonials">
//         <div className="container">
//           <h2
//             className="title text-center mb-2"
//             style={{ fontFamily: "molla" }}
//           >
//             TESTIMONIAL
//           </h2>
//           <div
//             className="owl-carousel owl-simple owl-testimonials"
//             data-toggle="owl"
//             data-owl-options='{
//                     "nav": false,
//                     "dots": true,
//                     "margin": 20,
//                     "loop": false,
//                     "responsive": {
//                         "1200": {
//                             "nav": true
//                         }
//                     }
//                 }'
//           >
//             {data.map((testimonial: any) => {
//               return (
//                 <blockquote className="testimonial text-center">
//                   {testimonial.image && (
//                     <div className="row justify-content-center mb-2">
//                       <div
//                         style={{
//                           borderRadius: "50%",
//                           height: "75px",
//                           width: "75px",
//                           backgroundImage: testimonial.image ?? "",
//                           backgroundPosition: "center center",
//                           backgroundSize: "cover",
//                         }}
//                       ></div>
//                     </div>
//                   )}
//                   <h3 className="mb-2">{testimonial.customer}</h3>
//                   <p style={{ color: "black" }}> {testimonial.description} </p>
//                   <p className="lead mt-2">{testimonial.title}</p>)
//                 </blockquote>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//       <div className="mb-5"></div>
//     </>
//   );
// }
// export default Testinomial;
export default function TestiMonial(props: any) {
  const testimonial = props.props;
  const testimonialModule = testimonial.data;
  return (
    <>
      {testimonialModule != "" ? (
        <div>
          <h1 className="mt-10 text-center testimonial-heading">
            See what our customers have to say about the products!
          </h1>
          <div
            id="carouselExampleCaption"
            className="relative pt-4 pb-4 m-4 rounded-md shadow-xl carousel slide carousel-dark testimonial"
            data-bs-ride="carousel"
            style={{ backgroundColor: "rgb(165,150,117)" }}
          >
            <div className="relative w-full overflow-hidden carousel-inner">
              {testimonialModule.map((data: any, index: any) => {
                return (
                  <>
                    <div
                      className={`relative float-left w-full text-center carousel-item ${
                        index === 0 ? "active" : ""
                      }`}
                    >
                      {data.image != "" ? (
                        <div className="flex justify-center mt-12 mb-6">
                          <img
                            src={data.image}
                            className="w-24 h-24 rounded-full shadow-lg customer-image"
                            alt="customer"
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      <p className="max-w-4xl px-3 mx-auto mb-2 text-2xl italic text-white description">
                        {`"${data.description}"`}
                      </p>
                      <p className="text-white text-white">{data.customer}</p>
                    </div>
                  </>
                );
              })}
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
              type="button"
              data-bs-target="#carouselExampleCaption"
              data-bs-slide="prev"
            >
              <span
                className="inline-block bg-no-repeat carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="hidden">Previous</span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
              type="button"
              data-bs-target="#carouselExampleCaption"
              data-bs-slide="next"
            >
              <span
                className="inline-block bg-no-repeat carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="mb-6"></div>
    </>
  );
}
