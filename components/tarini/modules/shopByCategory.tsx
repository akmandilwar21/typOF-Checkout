import Link from "next/link";
import Image from "next/image";
function ShopByCategory(props: any) {
  const categories = props.props;

  const category = categories.categories;

  function addToCart(data: any) {}
  function toCommas(value: any) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      {categories.data.layout == "horizontal" ? (
        <div className="container">
          <div className="heading heading-center mb-3">
            <h2 className="title-lg">Shop By Category</h2>
            <ul className="nav nav-pills justify-content-center" role="tablist">
              {category.map((value: any, index: any) => {
                return (
                  <li key={index} className="nav-item">
                    <Link
                      className={index == 0 ? "nav-link active" : "nav-link"}
                      id={"products-" + value.slug + "link"}
                      data-toggle="tab"
                      href={"#" + value.slug}
                      role="tab"
                      aria-controls=""
                    >
                      {" "}
                      {value.category_name}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="tab-content tab-content-carousel">
            {category.map((value: any, index: any) => {
              return (
                <div
                  className="tab-pane p-0 fade active"
                  id={"#cslug" + value.product[index].product_id}
                  role="tabpanel"
                  aria-labelledby="products-link"
                >
                  <div className="container">
                    <div className="row">
                      {value.product.map((val: any) => {
                        return (
                          <div className="product product-2 col-md-4">
                            <figure className="product-media">
                              {val.available == 0 ?? (
                                <span className="product-label label-out">
                                  Out of Stock
                                </span>
                              )}
                              <Link
                                href={"/p/" + val.slug}
                                rel="noopener"
                                target="_blank"
                              >
                                {val.images ? (
                                  <Image
                                    src={val.images[0]}
                                    alt={val.product_name}
                                    className="product-image"
                                    width="100"
                                    height="100"
                                  />
                                ) : (
                                  ""
                                )}
                              </Link>
                              <div className="product-action-vertical">
                                <Link
                                  href="javascript:void(0)"
                                  className="btn-product-icon btn-wishlist"
                                  id={"wish_btn_" + val.product_id}
                                  title="Add to wishlist"
                                ></Link>
                              </div>
                              {val.is_saleable == "yes" && val.available > 0 ? (
                                <div className="product-action ">
                                  <Link
                                    href="javascript:void()"
                                    onClick={() => addToCart(val.product_id)}
                                    className="btn-product btn-cart"
                                  >
                                    <span>Add To Cart</span>
                                  </Link>
                                  <Link
                                    href={"/buynow/" + val.product_id}
                                    className="btn-product btn-cart"
                                  >
                                    <span>Buy Now</span>
                                  </Link>
                                </div>
                              ) : (
                                ""
                              )}
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <Link
                                  href={"/p/" + val.slug}
                                  rel="noopener"
                                  target="_blank"
                                >
                                  {val.product_name}
                                </Link>
                              </h3>
                              <div className="product-price">
                                <span className="new-price">
                                  ₹{toCommas(val.price)}
                                </span>
                                {val.mrp != null && val.mrp > val.price ? (
                                  <span className="old-price">
                                    ₹{toCommas(val.mrp)}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="col-12 text-center">
                        <Link
                          href={"/sc/" + value.slug}
                          style={{ fontSize: "2vw" }}
                          className="title-link"
                        >
                          View all<i className="icon-long-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : props.props.data.layout === "vertical" ? (
        category.length &&
        category.map((value: any, index: any) => {
          return (
            <>
              <div className="mb-5"></div>
              <div className="container for-you">
                <div className="heading heading-flex mb-3">
                  <div className="heading-left">
                    <h2 className="title">{value.category_name}</h2>
                  </div>
                  <div className="heading-right">
                    <Link href={"/sc/" + value.slug} className="title-link">
                      View all<i className="icon-long-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="product">
                  <div className="row justify-content-center">
                    {value.product
                      ? value.product.map((product: any, index: any) => {
                          return (
                            <div className="col-6 col-md-4 col-lg-12">
                              <div className="product product-2">
                                <figure className="product-media">
                                  {product.available == 0 ? (
                                    <span className="product-label label-out">
                                      Out of Stock
                                    </span>
                                  ) : (
                                    ""
                                  )}
                                  <Link
                                    href={"/p/" + product.slug}
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <img
                                      src={product.media_collection}
                                      alt={product.product_name}
                                      className="product-image"
                                    />
                                  </Link>
                                  <div className="product-action-vertical">
                                    <Link
                                      href="javascript:void(0)"
                                      className="btn-product-icon btn-wishlist"
                                      id={"wish_btn_" + product.product_id}
                                      title="Add to wishlist"
                                    ></Link>
                                  </div>
                                  {product.is_saleable == "yes" &&
                                  product.available > 0 ? (
                                    <div className="product-action ">
                                      <Link
                                        href="javascript:void()"
                                        onClick={() =>
                                          addToCart(product.product_id)
                                        }
                                        className="btn-product btn-cart"
                                      >
                                        <span>Add To Cart</span>
                                      </Link>
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </figure>
                                <div className="product-body px-0">
                                  <h3 className="product-title">
                                    <Link
                                      href={"/p/" + product.slug}
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      {product.product_name}
                                    </Link>
                                  </h3>
                                  {product.vpc.length == 0 ? (
                                    <div className="product-price">
                                      <span className="new-price">
                                        ₹{toCommas(product.price)}
                                      </span>
                                      {product.mrp != "" &&
                                      product.mrp > product.price ? (
                                        <span className="old-price">
                                          ₹{toCommas(product.mrp)}
                                        </span>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  ) : (
                                    <div className="product-price">
                                      {Array.isArray(product.price_range) ? (
                                        <>
                                          <span className="new-price">₹</span>
                                          <span className="new-price">
                                            {toCommas(product.price_range[0])}-{" "}
                                          </span>
                                          <span className="new-price">₹</span>
                                          <span className="new-price">
                                            {" "}
                                            {toCommas(
                                              product.price_range[1]
                                            )}{" "}
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <span className="new-price">₹</span>
                                          <span className="new-price">
                                            {" "}
                                            {toCommas(product.price_range)}{" "}
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        ""
      )}
    </>
  );
}
export default ShopByCategory;
