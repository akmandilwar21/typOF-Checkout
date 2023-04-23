import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Category(props: any) {
  let data = props.props.data;

  return (
    <>
      <div className="text-center mb-3 mt-5">
        <h3>HANDLOOM VOYAGE</h3>
      </div>
      {data.layout == "slider" ? (
        <div className="container">
          <div
            className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                            "nav": true, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":1,
                                                    "nav": false
                                                },
                                                "480": {
                                                    "items":1,
                                                    "nav": false
                                                },
                                                "768": {
                                                    "items":3,
                                                    "nav": false
                                                },
                                                "992": {
                                                    "items":3,
                                                    "nav": false
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": false,
                                                    "dots": true
                                                }
                                            }
                                        }'
          >
            {data.categories.map((value: any) => {
              return (
                <div className="product product-2">
                  <figure
                    className="product-media"
                    style={{ backgroundColor: "white" }}
                  >
                    <div className="banner bann er-display banner-link-anim">
                      <a href={"/sc/" + value.category[2] ?? ""}>
                        <img
                          src={value.image ?? ""}
                          alt="Banner"
                          style={{ borderRadius: "9px" }}
                        />
                      </a>
                      <div className="banner-content">
                        <h3 className="banner-title text-white">
                          <a
                            href={"/sc/" + value.category[2] ?? ""}
                            style={{ fontFamily: "molla" }}
                          >
                            {value.getCustomProperty.name == "Cotton Sarees"
                              ? "Women"
                              : value.category[1] ?? ""}
                          </a>
                        </h3>
                        <a
                          href={"/sc/" + value.category[2] ?? ""}
                          className="btn btn-primary"
                        >
                          Shop Now<i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      ) : data.layout == "thumbnails" ? (
        <div className="container">
          <h3 className="text-center">OUR COLLECTION</h3>
          <div className="row justify-content-around align-items-center text-center">
            {data.categories.map((value: any) => {
              return (
                <div
                  className="d-flex text-center"
                  style={{ flexDirection: "column" }}
                >
                  <a
                    href={"/sc/" + value.category[2] ?? ""}
                    title=""
                    style={{ textAlign: "center" }}
                  >
                    <div
                      style={{
                        backgroundImage: value.image ?? "",
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        paddingRight: "3rem",
                        paddingLeft: "3rem",
                      }}
                    ></div>
                  </a>
                  <h6
                    className="text-primary mt-2"
                    style={{ fontSize: "14px" }}
                  >
                    <a href={"/sc/" + value.category[2] ?? ""}>
                      {value.category[1] ?? ""}
                    </a>
                  </h6>
                </div>
              );
            })}
          </div>
        </div>
      ) : data.layout == "big_tiles" ? (
        <div className="max-w-[1200px] w-[1188px] pl-2.5 pr-2.5 mr-auto ml-auto">
          <div className="justify-content-between -ml-2.5 -mr-2.5 justify-between flex flex-wrap">
            {data.categories.map((value: any) => {
              return (
                <Link href={"/sc/" + value.category[2] ?? ""}>
                  <div
                    className=" bg-white overflow-hidden relative mb-4"
                    style={{ transition: "box-shadow .35s ease" }}
                  >
                    <figure className="bg-white relative block mb-0 overflow-hidden">
                      <div className="banner bann er-display banner-link-anim bg-transparent block relative mb-8">
                        <Link
                          className="relative block outline-0"
                          href={"/sc/" + value.category[2] ?? ""}
                        >
                          <img
                            className="rounded-lg h-[50rem] block max-w-none w-full "
                            src={value.image ?? ""}
                            alt="Banner"
                            style={{ borderRadius: "9px", height: "50rem" }}
                          />
                        </Link>
                        <div
                          className="hover:scale-110 pt-14 left-16 inline-block  absolute top-1/2 z-20"
                          style={{
                            transition: "all .3s ease",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <h3 className="banner-title text-4xl mb-0 hover:text-white font-light leading-6 uppercase tracking-tighter text-white">
                            <Link
                              href={"/sc/" + value.category[2] ?? ""}
                              style={{
                                fontFamily: "molla",
                                transition: "all .3s",
                              }}
                              className=" inline-flex items-center justify-center text-center py-3.5 px-6 font-normal text-2xl min-w-[170px] rounded-none whitespace-normal"
                            >
                              {value.category[1] == "Cotton Sarees"
                                ? "Women"
                                : value.category[1] ?? ""}
                            </Link>
                          </h3>
                          <a
                            href={"/sc/" + value.category[2] ?? ""}
                            className="btn btn-primary hover:bg-gray-700 hover:text-white"
                          >
                            Shop Now<i className="icon-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </figure>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="container">
            <div className="heading mb-3" style={{ textAlign: "center" }}>
              <h2 className="title title-lg">Our Collections</h2>
            </div>
            <div className="row justify-content-around">
              {data.categories.map((value: any) => {
                return (
                  <div className="col-sm-3 col-5">
                    <div className="banner banner-overlay mb-0 ">
                      <a href={"/sc/" + value.category[2]}>
                        <img src={value.image ?? ""} alt="Banner" />
                      </a>
                    </div>
                    <h3 className="banner-title text-primary text-center mt-0 mb-0">
                      <a href={"/sc/" + value.category[2]}>
                        <strong>{value.category[1] ?? ""}</strong>
                      </a>
                    </h3>
                    <div className="text-center mb-2">
                      <a
                        href={"/sc/" + value.category[2] ?? ""}
                        className="btn btn-primary w-75"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Category;

//API
