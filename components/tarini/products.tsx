import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useStorage from "../../pages/useStorage";
import axios from "axios";
import router, { useRouter } from "next/router";
function Products({ fetchedData }: any) {
  const { getItem } = useStorage();
  let product = fetchedData;
  //let [product, setProduct] = useState<any>([]);

  const { query } = useRouter();
  const slugName = query.slug;

  // useEffect(() => {
  //   (async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_KEY,
  //     };
  //     const common = await axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_URL}/product`,
  //         {
  //           store_id: "2811",
  //           slug: slugName,
  //         },
  //         { headers }
  //       )
  //       .then((res) => {
  //         setProduct(res.data.body);
  //       });
  //   })();
  // }, [query]);
  // useEffect(() => {
  //   (async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_KEY,
  //     };
  //     const common = await axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_URL}/product`,
  //         {
  //           store_id: 2811,
  //           slug: `${slugName}`,
  //         },
  //         { headers }
  //       )
  //       .then((res) => {
  //         setProduct(res.data.body);
  //         //setIsData(true);
  //       });
  //   })();
  // }, [query]);
  const addToWishlist = (data: any) => {
    return <></>;
  };
  const addToCart = (id: any) => {
    return <></>;
  };
  const loadCaptcha = () => {};
  const pinCheck = () => {};
  const addToCartCombo = (id: any) => {};
  const calculateCombo = (data: any) => {};
  const get_combo_variant = (data: any) => {};
  function capitalizeFirstLetter(str: any) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
  }
  function toCommas(value: any) {
    let formated_number = value.toLocaleString("en-US", {
      style: "currency",
      currency: "INR",
    });

    return formated_number;
  }
  return (
    //<h1>p</h1>
    <>
      <nav
        aria-label="w-full rounded-md bg-grey-light"
        className="breadcrumb-nav mb-2"
      >
        <div className="w-[1188px] max-w-[1200px] pl-2.5 pr-2.5 mr-auto ml-auto">
          <ol className="flex flex-wrap bg-transparent rounded-none m-0 p-0">
            <li className="font-light text-2xl tracking-normal capitalize">
              <Link href="/" style={{ color: "#777" }}>
                Home{"  >"}
              </Link>
            </li>
            <li
              className="font-light text-2xl tracking-normal capitalize text-black ml-2"
              aria-current="page"
            >
              {"  " + product.product_name}
            </li>
          </ol>
        </div>
      </nav>
      <div className=" flex flex-col flex-column-fluid" id="kt_content">
        <div className="flex flex-column-fluid">
          <div className="w-[1188px] max-w-[1200px] pl-2.5 pr-2.5 mr-auto ml-auto">
            <div className="-ml-2.5 -mr-2.5 flex flex-wrap  pt-2">
              <div className="lg:w-3/4 pr-4 pl-4">
                <div className="mb-4">
                  <div className="-ml-2.5 -mr-2.5 flex flex-wrap">
                    <div className="md:w-1/2 pr-4 pl-4 lg:w-3/5 pr-4 pl-4">
                      <div className="mb-8">
                        <figure className="relative mb-4 mt-0 ml-0 mr-0">
                          <div className=""></div>
                          <a
                            href="javascript:void(0)"
                            onClick={() => addToWishlist(product.product_id)}
                            className="wish"
                            id="wish_btn_{{$product->product_id}}"
                            title="Add to wishlist"
                          >
                            <i className="icon-heart-o"></i>
                          </a>
                          <img
                            className="max-w-none w-full block h-auto align-middle border-none"
                            id="product-zoom"
                            src={product.images[0]}
                            data-zoom-image={product.images[0]}
                            alt={product.product_name}
                          />
                          <a
                            href="#"
                            id="btn-product-gallery"
                            className="btn-product-gallery absolute right-8 bottom-8 z-40 flex items-center justify-center text-center w-16 h-16 font-normal text-4xl bg-white "
                            style={{
                              color: "#777",
                              boxShadow: "2px 6px 16px rgb(51 51 51 / 5%)",
                              transition: "all .35s ease",
                            }}
                          >
                            <i className="icon-arrows"></i>
                          </a>
                        </figure>
                        <div
                          id="product-zoom-gallery"
                          className="flex flex-wrap flex-row -ml-2 -mr-2 max-col-6"
                        >
                          {product.images.map((img: any) => {
                            return (
                              <Link
                                className="product-gallery-item relative block pl-2 pr-2 mb-4"
                                href="#"
                                data-image={img}
                                data-zoom-image={img}
                                style={{
                                  flex: "0 0 16.66%",
                                  maxWidth: "16.66%",
                                }}
                              >
                                <Image
                                  src={img}
                                  className="max-w-none w-full block h-auto "
                                  alt={product.product_name}
                                  width="100"
                                  height="100"
                                />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 pr-4 pl-4 lg:w-2/5 pr-4 pl-4">
                      <div className="mb-8">
                        <h1 className="font-normal text-4xl tracking-tight mb-[1.2rem] -mt-2 pr-4">
                          {product.product_name}
                        </h1>
                        <div className=" flex items-center text-xl mb-[1.3rem] whitespace-nowrap">
                          <Link
                            className="ml-[0.8rem] tracking-tighter"
                            href="#"
                            id="review-link"
                            style={{ color: "#ccc" }}
                          >
                            Made By: {product.store_name}
                          </Link>
                        </div>
                        <div className="text-4xl flex items-center flex-wrap flex-row font-normal">
                          <span className="mr-4">
                            {toCommas(product.price)}
                          </span>
                          {product.mrp != "" && product.mrp > product.price && (
                            <>
                              <span className="ml-4">
                                {toCommas(product.mrp)}
                              </span>
                            </>
                          )}
                        </div>
                        {/* {product.custom_fields.extra_msg ? (
                          <div className="product-price">
                            <span
                              className="new-price"
                              style={{ fontSize: "16px" }}
                            >
                              {product.custom_field.extra_msg}
                            </span>
                          </div>
                        ) : (
                          ""
                        )} */}
                        {/* {product.formatedvariants &&
                          product.formatedvariants.map((key: any) => {
                            return (
                              <div className="d-flex flex-column">
                                <div>
                                  {capitalizeFirstLetter(key)
                                    ? "Weight(gram)"
                                    : capitalizeFirstLetter(key)}
                                </div>
                                <div className="d-flex flex-wrap">
                                  <select
                                    name={key}
                                    id={key}
                                    className="variants form-control"
                                    data-voption={key}
                                  >
                                    {value.map((v: any) => {
                                      return (
                                        <option
                                          value={v}
                                          selected={
                                            product.variants.key === v
                                              ? true
                                              : false
                                          }
                                        >
                                          {v}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>
                            );
                          })} */}
                        {product.free_shipping_tag &&
                        product.free_shipping_tag["status"] ? (
                          <div className="d-flex my-4">
                            <i className="icon-truck mr-1"></i>
                            <p>
                              <b>Free Shipping</b>
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        {product.custom_field &&
                          product.custom_field.services && (
                            <>
                              <p>
                                <b>Select Services</b>
                              </p>
                              {product.custom_field.services.map(
                                (service: any) => {
                                  return (
                                    <div className="custom-control custom-checkbox mt-0 mb-0">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={"service" + service.id}
                                        name="services"
                                        value={service.id}
                                        checked={
                                          getItem("success") ==
                                          "Measurement Saved !"
                                            ? true
                                            : false
                                        }
                                      />
                                      <input
                                        type="hidden"
                                        id="measurment_id"
                                        value={getItem("measurement_id") ?? ""}
                                      />
                                      <label className="custom-control-label text-capitalize">
                                        {service.service_name ?? ""}{" "}
                                        <span className="text-primary">
                                          {" "}
                                          : + ₹{service.price}
                                        </span>
                                      </label>
                                    </div>
                                  );
                                }
                              )}
                            </>
                          )}
                        <div className="product-content">
                          {product.size_chart && (
                            <Link href="#sizechart" data-toggle="modal">
                              <span>Size Chart</span>
                            </Link>
                          )}
                        </div>
                        {product.delivery_pin &&
                          product.delivery_pin.data.length && (
                            <div className="product-content">
                              <div id="delivery_check"></div>
                              <div className="form-group d-flex align-items-center">
                                <p className="mr-4">Check for Delivery Area</p>
                                <input
                                  type="text"
                                  className="form-control w-50"
                                  maxLength={6}
                                  placeholder="Enter pincode"
                                  id="delivery_pin"
                                  onKeyUp={pinCheck}
                                />
                              </div>
                            </div>
                          )}
                        {product.is_saleable == "yes" &&
                        product.available > 0 ? (
                          <>
                            <div className="flex items-center flex-wrap flex-row mb-4 ">
                              <div className="flex mr-1 mt-2">
                                <a
                                  href="javascript:void()"
                                  onClick={() => addToCart(product.product_id)}
                                  className=" bg-black text-white inline-flex p-2 items-center justify-center whitespace-normal text-center p-[0.85rem 1.5rem] font-normal text-2xl tracking-tighter min-w-[170px]"
                                  style={{
                                    boxShadow: "none",
                                    borderRadius: "none",
                                    transition: "all .3s",
                                  }}
                                >
                                  <span>Add to cart</span>
                                </a>
                                <div style={{ width: "1px" }}></div>
                                <a
                                  href={"/buynow/" + product.product_id}
                                  className="bg-black text-white inline-flex p- items-center justify-center whitespace-normal text-center p-[0.85rem 1.5rem] font-normal text-2xl tracking-tighter min-w-[170px]"
                                  style={{
                                    boxShadow: "none",
                                    borderRadius: "none",
                                    transition: "all .3s",
                                  }}
                                >
                                  <span>Buy Now</span>
                                </a>
                              </div>
                            </div>
                            {product.customizable == 1 && (
                              <div className="product-details-action mt-2">
                                <p className="text-center b-text f-size-13 text-500">
                                  <b>Want to customize this product?</b>
                                </p>
                                <a
                                  href="#enquiry-modal"
                                  data-toggle="modal"
                                  className="btn btn-success"
                                >
                                  <span>Get a quote now!</span>
                                </a>
                              </div>
                            )}
                          </>
                        ) : product.available == 1 ? (
                          <>
                            <div className="product-details-action mb-1">
                              <a href="#" className="btn btn-primary">
                                <span style={{ fontSize: "18px" }}>
                                  Sold Out
                                </span>
                              </a>
                            </div>
                            <div className="product-details-action">
                              <a
                                href="https://api.whatsapp.com/send?phone=91{{(!empty($store->mobile)?$store->mobile:'')}}&text=I%20want%20to%20Pre-Book%20this%20product%2C%20Please%20confirm%20the%20same.%0A{{Request::url()}}"
                                className="btn btn-primary"
                                target="_blank"
                              >
                                <span style={{ fontSize: "18px" }}>
                                  Call to Pre-Book
                                </span>
                              </a>
                            </div>
                            {product.customizable == 1 && (
                              <div className="product-details-action mt-2">
                                <p className="text-center b-text f-size-13 text-500">
                                  <b>Want to customize this product?</b>
                                </p>
                                <a
                                  href="#enquiry-modal"
                                  data-toggle="modal"
                                  className="btn btn-success"
                                >
                                  <span>Get a quote now!</span>
                                </a>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="product-details-action">
                            <a
                              href="https://api.whatsapp.com/send?phone=91{{(!empty($store->mobile)?$store->mobile:'')}}&text=I%20want%20to%20Pre-Book%20this%20product%2C%20Please%20confirm%20the%20same.%0A{{Request::url()}}"
                              className="btn btn-primary"
                              target="_blank"
                            >
                              <span>Call to Pre-Book</span>
                            </a>
                          </div>
                        )}
                        <div
                          className="flex font-normal items-center flex-wrap py-[1.7rem] "
                          style={{
                            color: "#777",
                            borderTop: "0.1rem solid #ebebeb",
                          }}
                        >
                          <div
                            className="social-icons social-icons-sm"
                            style={{
                              marginLeft: "0px!important",
                              marginTop: "5px",
                            }}
                          >
                            <span className="social-label">Share:</span>
                            <a
                              href="https://api.whatsapp.com/send?text={{$text}} {{$url}}"
                              className="social-icon social-whatsapp"
                              title="Whatsapp"
                              target="_blank"
                            >
                              <i className="icon-whatsapp"></i>
                            </a>
                            <a
                              href="https://www.facebook.com/sharer/sharer.php?u={{$url}}"
                              className="social-icon social-facebook"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f"></i>
                            </a>
                            <a
                              href="https://twitter.com/share?url={{$url}}&text={{$text}}"
                              className="social-icon social-twitter"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </a>
                            <a
                              href="https://www.linkedin.com/cws/share?url={{$url}}"
                              className="social-icon social-linkedin"
                              title="Linkedin"
                              target="_blank"
                            >
                              <i className="icon-linkedin"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    {product.description ||
                      product.info ||
                      (product.review && (
                        <div className="container">
                          <div className="product-details-tab">
                            <ul
                              className="nav nav-pills justify-content-center"
                              role="tablist"
                            >
                              {product.description && (
                                <li className="nav-item">
                                  <a
                                    className="nav-link active"
                                    id="product-desc-link"
                                    data-toggle="tab"
                                    href="#product-desc-tab"
                                    role="tab"
                                    aria-controls="product-desc-tab"
                                    aria-selected="true"
                                  >
                                    Description
                                  </a>
                                </li>
                              )}
                              {product.info.dimensions ||
                              product.info.weight ||
                              product.info.color ||
                              product.info.material ||
                              product.info.style ||
                              product.info.care_instructions ? (
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    id="product-info-link"
                                    data-toggle="tab"
                                    href="#product-info-tab"
                                    role="tab"
                                    aria-controls="product-info-tab"
                                    aria-selected="false"
                                  >
                                    Additional information
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                              {product.info.shipping_info ||
                              product.info.return_info ? (
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    id="product-shipping-link"
                                    data-toggle="tab"
                                    href="#product-shipping-tab"
                                    role="tab"
                                    aria-controls="product-shipping-tab"
                                    aria-selected="false"
                                  >
                                    Shipping & Returns
                                  </a>
                                </li>
                              ) : (
                                ""
                              )}
                              {feedback.count > 1 && (
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    id="product-review-link"
                                    data-toggle="tab"
                                    href="#product-review-tab"
                                    role="tab"
                                    aria-controls="product-review-tab"
                                    aria-selected="false"
                                  >
                                    Reviews
                                  </a>
                                </li>
                              )}
                            </ul>
                            <div className="tab-content">
                              <div
                                className="tab-pane fade show active"
                                id="product-desc-tab"
                                role="tabpanel"
                                aria-labelledby="product-desc-link"
                              >
                                <div className="product-desc-content">
                                  <p>{product.description}</p>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="product-info-tab"
                                role="tabpanel"
                                aria-labelledby="product-info-link"
                              >
                                <div className="product-desc-content">
                                  <div className="row">
                                    {product.info &&
                                      product.info.map((k: any) => {
                                        return (
                                          <div className="col-md-4">
                                            <h3>
                                              <u>
                                                {capitalizeFirstLetter(
                                                  k.replace("_", " ")
                                                )}
                                              </u>
                                            </h3>
                                            <p>{k}</p>
                                          </div>
                                        );
                                      })}
                                  </div>
                                  <div className="row">
                                    {info.care_instructions && (
                                      <div className="col-md-12">
                                        <h3>
                                          <u>Care Instructions</u>
                                        </h3>
                                        <p>{info.care_instructions}</p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="product-shipping-tab"
                                role="tabpanel"
                                aria-labelledby="product-shipping-link"
                              >
                                <div className="product-desc-content">
                                  {product.info.shipping_info && (
                                    <>
                                      <h3>
                                        <u>Shipping Info</u>
                                      </h3>
                                      <p>{product.info.shipping_info}</p>
                                    </>
                                  )}
                                  {product.info.return_info && (
                                    <>
                                      <h3>
                                        <u>Return Info</u>
                                      </h3>
                                      <p>{product.info.return_info}</p>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div
                                className="tab-pane fade"
                                id="product-review-tab"
                                role="tabpanel"
                                aria-labelledby="product-review-link"
                              >
                                <div className="reviews">
                                  <div className="review">
                                    {product.feedback.legth > 0 &&
                                      product.feedback.map((fd: any) => {
                                        return (
                                          <div className="row no-gutters">
                                            <div className="col-auto">
                                              <h4>
                                                <a href="#">
                                                  {fd.customer.customer_name}
                                                </a>
                                              </h4>
                                              <div className="ratings-container">
                                                <div className="ratings">
                                                  <div
                                                    className="ratings-val"
                                                    style={{
                                                      width: `${
                                                        (fd.rating * 100) / 5
                                                      }%`,
                                                    }}
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col">
                                              <div className="review-content">
                                                <p>{fd.review}</p>
                                              </div>
                                            </div>
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div> */}
                  <div className="mt-2 accordion" id="accordionExample">
                    {product.description ? (
                      <div className="bg-white border border-gray-200 accordion-item">
                        <h2 className="mb-0 accordion-header" id="headingOne">
                          <button
                            className="relative flex items-center w-full px-5 py-3 text-base text-left text-gray-800 transition bg-white border-0 rounded-none accordion-button focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Description
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="px-5 text-black py-4 accordion-body">
                            {product.description ? (
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: product.description,
                                }}
                              ></p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {product.info != null ? (
                      <div className="bg-white border border-gray-200 accordion-item">
                        <h2 className="mb-0 accordion-header" id="headingTwo">
                          <button
                            className="relative flex items-center w-full px-5 py-3 text-base text-left text-gray-800 transition bg-white border-0 rounded-none accordion-button collapsed focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Additional Information
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="px-5 py-4 accordion-body">
                            {product.info != null ? (
                              <>
                                {product.info != "" ? (
                                  <>
                                    {product.info.map(
                                      (value: any, index: any) => {
                                        return (
                                          <>
                                            {index != "" && value != "size" ? (
                                              <>
                                                <h3>
                                                  {value.replace("_", " ")}
                                                </h3>
                                              </>
                                            ) : (
                                              ""
                                            )}
                                          </>
                                        );
                                      }
                                    )}
                                  </>
                                ) : (
                                  ""
                                )}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {product.feedback.length != 0 ? (
                      <div className="bg-white border border-gray-200 accordion-item">
                        <h2 className="mb-0 accordion-header" id="headingThree">
                          <button
                            className="relative flex items-center w-full px-5 py-3 text-base text-left text-gray-800 transition bg-white border-0 rounded-none accordion-button collapsed focus:outline-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Reviews
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="px-5 py-4 accordion-body">
                            {product.feedback.map((value: any) => {
                              return (
                                <div className="review">
                                  <div className="review">
                                    <div className="col-auto">
                                      <h4>
                                        <Link href="#">
                                          {value.customer.customer_name ?? ""}
                                        </Link>
                                      </h4>
                                      <div className="ratings-container">
                                        <div className="ratings">
                                          <div
                                            className="ratings-val"
                                            style={{
                                              width: (value.rating * 100) / 5,
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <span className="review-date"></span>
                                    </div>
                                    <div className="col">
                                      <div className="review-content">
                                        {!!value.review ?? ""!!}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {product.combo &&
                    product.combo.formated_combo &&
                    product.available > 0 &&
                    product.combo.formated_combo["status"] && (
                      <div
                        className="d-flex flex-column"
                        id="combo_product"
                        data-dis-type={product.combo.discount_type ?? ""}
                        data-dis={product.combo.discount ?? ""}
                        data-combo-count={
                          product.combo.formated_combo["products"].length
                        }
                      >
                        <h5>Frequently Bought Together</h5>
                        <div className="row justify-content-start mx-0 mb-2">
                          {product.combo.formated_combo["products"].map(
                            (key: any, index: any) => {
                              return (
                                <div
                                  className="d-flex"
                                  id={"combo-image-" + key.product_id}
                                >
                                  <Image
                                    src={key.images[0]}
                                    alt=""
                                    width="70"
                                    height="100"
                                  />
                                  {product.combo.formated_combo["products"]
                                    .length -
                                    1 !=
                                    index && (
                                    <p
                                      className="mt-3 mx-2"
                                      style={{ fontSize: "2rem" }}
                                    >
                                      +
                                    </p>
                                  )}
                                  {/* + @if(count($product->combo->formated_combo['products'])-1 != $key) */}
                                </div>
                              );
                            }
                          )}
                          <div className="ml-5">
                            <p id="discounted-price">
                              Total Price: ₹
                              {product.combo.formated_combo.tp ?? 0}
                              {product.combo.formated_combo.tp !=
                                product.combo.formated_combo.tpd && (
                                <del>
                                  ₹{product.combo.formated_combo["tpd"] ?? 0}
                                </del>
                              )}
                            </p>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-
                              onClick={() => addToCartCombo(product.combo.id)}
                            >
                              {" "}
                              Add To Cart
                            </button>
                          </div>
                        </div>
                        <ul>
                          {product.combo.formated_combo.products.map(
                            (value: any) => {
                              return (
                                <li
                                  className="d-flex flex-row"
                                  id={"prod_id_" + value.product_id}
                                >
                                  {value.fbt_optons ? (
                                    <input
                                      type="checkbox"
                                      name="combo[]"
                                      checked
                                      value={
                                        value.variant_product(value.store_id)
                                          .product_id
                                      }
                                      className="mr-3"
                                      data-price={
                                        value.variant_product(value.store_id)
                                          .price
                                      }
                                      onClick={() => calculateCombo("this")}
                                    />
                                  ) : (
                                    <input
                                      type="checkbox"
                                      name="combo[]"
                                      checked
                                      value={value.product_id}
                                      className="mr-3"
                                      data-price={value.price}
                                      onClick={() => calculateCombo("this")}
                                    />
                                  )}
                                  <span className="float-left">
                                    {value.product_name}
                                    {value.fbt_optons ? (
                                      value.fbt_optons.map((val: any) => {
                                        return (
                                          <>
                                            {/* <select
                                              name=""
                                              id=""
                                              onChange={() =>
                                                get_combo_variant("this")
                                              }
                                              data-prod-id={value.product_id}
                                              data-variant-type="{{$k}}"
                                            >
                                              {val.map((fv: any) => {
                                                <option
                                                  value={fv}
                                                  selected={
                                                    value.variant_product(
                                                      value.store_id
                                                    ).variants.val == fv
                                                      ? true
                                                      : false
                                                  }
                                                >
                                                  {fv}
                                                </option>;
                                              })}
                                            </select> */}
                                            <b>
                                              ₹
                                              <span
                                                id={"price_" + value.product_id}
                                              >
                                                {
                                                  value.variant_product.value
                                                    .store_id.price
                                                }
                                              </span>
                                            </b>
                                          </>
                                        );
                                      })
                                    ) : (
                                      <b>
                                        ₹
                                        <span id={"price_" + value.product_id}>
                                          {value.price}
                                        </span>
                                      </b>
                                    )}
                                  </span>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
              <aside className="col-lg-3 d-md-none d-xl-block">
                {product.video && (
                  <div className="sidebar sidebar-product mb-5">
                    <div className="widget widget-products m-0">
                      <h4 className="widget-title">Product Video</h4>
                    </div>
                    <div className="d-flex">
                      <div
                        style={{
                          width: "100%",
                          height: "180px",
                          backgroundImage: `URL('https://i.ytimg.com/vi/{{$yt}}/mqdefault.jpg')`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                        }}
                        data-toggle="modal"
                        data-target="#video"
                      ></div>
                    </div>
                  </div>
                )}
                {product.rproduct.length && (
                  <div className=" -mt-[0.3rem] max-w-[280px] ml-auto mr-auto">
                    <div className="mb-2">
                      <h4 className="text-4xl tracking-tight mb-4 text-black font-normal ">
                        Related Product
                      </h4>

                      <div className="mb-1">
                        {product.rproduct.map((rp: any) => {
                          return (
                            <div
                              className=" w-full flex items-start mb-8 relative bg-white overflow-hidden"
                              style={{ transition: "box-shadow .35s ease" }}
                            >
                              <figure
                                className="relative block mb-0 overflow-hidden "
                                style={{
                                  flex: "0 0 80px",
                                  maxWidth: "80px",
                                  background: "#d7d7d7",
                                }}
                              >
                                <Link className="block" href={"/p/" + rp.slug}>
                                  <img
                                    src={rp.images[0]}
                                    alt={rp.product_name}
                                    className="block w-full h-auto max-w-full align-middle border-none"
                                  />
                                </Link>
                              </figure>
                              <div
                                className="pr-0 pb-0 pl-8 relative bg-white"
                                style={{
                                  flex: "1 1 auto",
                                  transition: "all .35s ease",
                                }}
                              >
                                <h5 className="font-normal mb-[0.2rem] text-2xl tracking-tighter text-black">
                                  <Link href={"/p/" + rp.slug}>
                                    {rp.product_name}
                                  </Link>
                                </h5>
                                <div className="mb-0 text-2xl flex items-center flex-wrap flex-row font-normal ">
                                  <span className=" mr-[0.8rem]">₹</span>
                                  <span className="mr-[0.8rem]">
                                    {rp.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* <Link href={"/sc/"+categories[rp.category].slug} className="btn btn-outline-dark-3"><span>View More Products</span><i className="icon-long-arrow-right"></i></Link> */}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>
      {product.size_chart && (
        <div
          className="modal fade"
          id="sizechart"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="icon-close"></i>
                  </span>
                </button>
                <Image
                  src="https://d1yvcml1qpeqwy.cloudfront.net/blog/{{$product->size_chart}}"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="enquiry-modal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="icon-close"></i>
                </span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill" role="tablist">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        id="signin-tab"
                        data-toggle="tab"
                        href="#signin"
                        role="tab"
                        aria-controls="signin"
                        aria-selected="true"
                      >
                        Request Form
                      </Link>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div
                      className="tab-pane fade show active"
                      id="signin"
                      role="tabpanel"
                      aria-labelledby="signin-tab"
                    >
                      <form action="/stores-request" method="post">
                        <input
                          type="hidden"
                          name="pid"
                          value={product.product_id}
                        />
                        <input
                          type="hidden"
                          name="store_id"
                          value={product.store_id}
                        />
                        <input type="hidden" name="slug" value={product.slug} />
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name *"
                            id="name"
                            name="name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email *"
                            id="singin-email"
                            name="email"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile *"
                            id="mobile"
                            name="mobile"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            required
                            placeholder="Shipping Address*"
                            name="address"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            id="message"
                            placeholder="Message"
                            name="message"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <div className="captcha">
                            {/* <span className="float-left">{ captcha_img()}</span> */}
                            <a href="#" className="btn" onClick={loadCaptcha}>
                              <i className="icon-refresh"></i>
                            </a>
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            id="captcha"
                            type="text"
                            required
                            className="form-control"
                            placeholder="Captcha *"
                            name="captcha"
                          />
                        </div>
                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>REQUEST</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {getItem("success") && (
        <div
          className="modal fade"
          id="msgWindow"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="alert alert-success alert-block">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="icon-close"></i>
                    </span>
                  </button>
                  <strong>{getItem("message")}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {getItem("error") && (
        <div
          className="modal fade"
          id="msgWindow"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="alert alert-danger alert-block">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="icon-close"></i>
                    </span>
                  </button>
                  <strong>{getItem("message")}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {"$yt" && (
        <div
          className="modal fade"
          id="video"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <iframe
                src="https://www.youtube.com/embed/{{$yt}}"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  minWidth: "300px",
                  maxWidth: "600px",
                  height: "320px",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Products;

// where is value array is coming? line 92 line 126
// where is the value of array free_shipping_tag.status is coming? line 104  line 135 <done>
//line 119 session storage <not clear>
// line 131 delivery_pin line 158 <done>
//line 172 value of url <not done>
//line 189 to 192 value of url line 212-215<not done>
//line 239 value of $v $k  line 267 268 <not done>
// line 277 feedback array<done>
//line 316,315 value k jgah key rkha hu line 340-346 <done>
//line 343,345 value of this in onClick function parameter line  364  <not done>
//line 354 issue with $k  <not done>
//line 702 $k in conditional statement line 375
//line 362,356 issue with  variant_product line 375,382
//line 386 value of $yt line 404-413
//line 419 value of categoreis,rp is not defined line 445
//line 486 captch_img()
//line 542,546 $yt line  line 576
