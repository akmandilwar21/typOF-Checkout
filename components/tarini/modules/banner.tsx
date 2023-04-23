import { url } from "inspector";
import { useState } from "react";

function Banner(props: any) {
  let banner = props.props;
  return (
    <>
      {banner.data != "" ? (
        <>
          <div
            id="carouselExampleCaptions"
            className="relative carousel slide"
            data-bs-ride="carousel"
          >
            <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div
              className="relative w-full overflow-hidden carousel-inner"
              data-te-interval="4000"
              data-te-carousel-item
              data-te-carousel-active
            >
              {banner.data.map((lists: any, index: any) => {
                return (
                  <div
                    className={`float-left w-full carousel-item  ${
                      index == 0 ? "active" : ""
                    }`}
                    style={{ height: "80vh" }}
                  >
                    <img
                      src={lists.image}
                      className="block w-full banner-image"
                      alt="banner"
                      style={{ height: "auto" }}
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="inline-block bg-no-repeat carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="hidden">Previous</span>
            </button>
            <button
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="inline-block bg-no-repeat carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="hidden">Next</span>
            </button>
          </div>
          <div className="mb-3"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default Banner;

//Banner API (banner and link btn come from API)required
