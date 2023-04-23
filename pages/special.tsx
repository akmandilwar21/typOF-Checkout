import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpecialCategory() {
  const [props, setProps] = useState<any>({});

  const commonData = "";
  const primary_color = "";

  const special_category = "";
  const special_product = "";
  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_KEY,
      };
      const common = await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/home`,
          { store_id: 2616 },

          { headers }
        )
        .then((res) => {
          setProps(res.data.body.modules[2]);
        });
    })();
  }, []);

  return (
    <>
      <div className="mb-5"></div>
      <div className="container ">
        <ul
          className="flex flex-wrap justify-center mb-4 list-none nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          {Object.entries(special_product).map((value: any, index: any) => {
            const cslug = value[0].replace(/ /g, "-").toLowerCase();
            return (
              <li
                className="mx-4 text-base nav-item hover:text-gray-500"
                style={{ color: `${primary_color}` }}
                role="presentation"
                key={index}
              >
                <a
                  href={`#pills-` + cslug}
                  className={`font-medium text-base leading-tight uppercase rounded my-2 md:mr-2 ${
                    index == 0 ? "active" : ""
                  }`}
                  id={`pills-` + cslug + `-tab`}
                  data-bs-toggle="pill"
                  data-bs-target={`#pills-` + cslug}
                  role="tab"
                  aria-controls={`pills-` + cslug}
                  aria-selected={index == 0 ? "true" : "false"}
                >
                  {value[0]}
                </a>
              </li>
            );
          })}
        </ul>
        <div id="pills-tabContent" className="tab-content">
          {Object.entries(special_product).map((value: any, index: any) => {
            const cslug = value[0].replace(/ /g, "-").toLowerCase();
            return (
              <div
                className={`tab-pane flex flex-row fade p-card ${
                  index == 0 ? "show active active-category-box" : ""
                }`}
                id={`pills-` + cslug}
                role="tabpanel"
                aria-labelledby={`pills-` + cslug + `-tab`}
                key={index}
              >
                {value[1].map((product: any, index: any) => {
                  const discount = () => {
                    let disc = 0;
                    if (product.vpc.length == 0) {
                      if (product.mrp != null) {
                        if (product.mrp > product.price) {
                          return (disc = Math.round(
                            ((product.mrp - product.price) / product.mrp) * 100
                          ));
                        } else {
                          disc = 0;
                        }
                      }
                    }
                  };
                  return (
                    <div className="flex flex-row">
                      <div className="mx-10 my-3 ">
                        {product.available == 0 ? (
                          <span className="product-label label-out">
                            Out of Stock
                          </span>
                        ) : (
                          ""
                        )}
                        <Link href={`/p/${product.slug}`} rel="noopner">
                          <img
                            className="object-cover object-center rounded-t-lg hover:opacity-75 product-image "
                            src={product.images[0]}
                          />
                        </Link>
                        <div className="product-action-vertical">
                          <a
                            href="javascript:void(0)"
                            className="btn-product-icon btn-wishlist"
                            id={`wish_btn_${product.product_id}`}
                            title="Add to wishlist"
                          ></a>
                        </div>
                        {/* {
                            product.is_saleable == "yes" && product.available > 0 ?
                              <div className="p-2 buy-cart-button-container" style={{backgroundColor:`${primary_color}`}}>
                                <button className="w-1/2 text-center text-white "><a href="javascript:void(0)" > Add to cart</a></button>
                                <button className="w-1/2 text-center text-white "><a href={`/buynow/${product.product_id}`} >Buy Now</a></button>
                              </div> : ""
                          } */}
                        <div
                          className="ml-2 text-center product-body"
                          style={{ backgroundColor: "inherit" }}
                        >
                          <h3
                            className="my-2 font-bold"
                            style={{ color: `${primary_color}` }}
                          >
                            <Link
                              href={`/p/${product.slug}`}
                              rel="noopener"
                            >{`${product.product_name}`}</Link>
                          </h3>
                          {product.mrp != null && discount() != undefined ? (
                            <div className="row">
                              <div className="col-12">
                                <span className="discount text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
                                  {discount()}% off
                                </span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="product-price">
                            <span
                              className="text-sm"
                              style={{ color: `${primary_color}` }}
                            >
                              ₹
                            </span>
                            <span
                              className="text-sm "
                              style={{ color: `${primary_color}` }}
                            >
                              {product.price}{" "}
                            </span>
                            {product.mrp != "" &&
                            product.mrp > product.price ? (
                              <>
                                <span
                                  className="old-price"
                                  style={{ color: `${primary_color}` }}
                                >
                                  ₹
                                </span>
                                <span
                                  className="line-through old-price"
                                  style={{ color: `${primary_color}` }}
                                >
                                  {product.mrp}{" "}
                                </span>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

{
  /* <div className="tab-content tab-content-carousel">
            {
              Object.entries(special_product).map((value:any, index:any) => {
                
                return (
                  <>
                  <div key={index} className={`p-0 tab-pane fade ${index == 0?'active':''}`} id={"#cslug"+value[1].product_id} role="tabpanel" aria-labelledby="products-link">
                  
                    
                        {
                          value[1].map((val:any, ind:any) => {
                            return (<>
                              <div key={ind} className="product product-2 col-md-4">
                                <figure className="product-media"> 
                                  {
                                    val.available == 0??<span className="product-label label-out">Out of Stock</span>
                                  }
                                    <Link href={"/p/"+val.slug} rel="noopener" >
                                        {
                                          val.images?
                                          <Image src={val.images[0]} alt={val.product_name} className="product-image" width={100} height={100}></Image>
                                          :''
                                        }
                                    </Link>
                                    <div className="product-action-vertical">
                                        <Link href="javascript:void(0)" className="btn-product-icon btn-wishlist" id={"wish_btn_"+val.product_id}  title="Add to wishlist"></Link>
                                    </div>
                                    {
                                      val.is_saleable == 'yes' && val.available > 0 ?
                                        <div className="product-action ">
                                          <Link href="javascript:void()" className="btn-product btn-cart"><span>Add To Cart</span></Link>
                                        </div>
                                        :''
                                    }
                                </figure>

                                <div className="product-body">
                                    <h3 className="product-title"><a href={"/p/"+val.slug} rel="noopener" target="_blank">{val.product_name}</a></h3>
                                    
                                    <div><b>Material:</b> </div>

                                    <div className="mt-1 product-price">
                                        <span className="new-price">{val.price}</span>
                                        {
                                          val.mrp != null && val.mrp > val.price ?
                                          <span className="old-price">{val.mrp}</span>
                                          :''
                                        }
                                    </div>
                                </div>
                            </div>
                            </>
                            )
                          })
                        }
                </div>
                </>
                )
              })
            }
            
          </div> */
}

// onClick={addToCart('workdi')}
{
  /* <div className={`tab-pane fade ${index == 0?'show active active-category-box':''}`} id={`pills-`+slug} role="tabpanel" aria-labelledby={`pills-`+slug+`-tab`} key={index}>   */
}
