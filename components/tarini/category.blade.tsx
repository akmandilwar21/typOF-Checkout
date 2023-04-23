import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { selectScan } from "../../store/scanSlice";

function CategoryPage(props: any) {
  let scan = useSelector(selectScan);
  let commonData = scan.common_data;

  var categoriesArray = Object.values(commonData.categories);

  let categoryData = props.fetchedData.data1.body;
  let productData = props.fetchedData.data2.body;
  let arrowButton = {
    "SAREES-OF-INDIA": true,
    "Cotton-Sarees": true,
    "Silk-Saree": true,
    Men: true,
    Dupattas: true,
    "Add-on": true,
    Yardages: true,
  };
  let [value, setValue] = useState("");

  // for(let i=0;i<categoriesArray.length;i++){
  //   arrowButton.categoriesArray[i].slug=true;
  // }

  // const [data, setData] = useState<any>(null);
  const [isData, setIsData] = useState(false);
  const [productsData, setProductsData] = useState<any>(null);
  const { query } = useRouter();

  // const slugName = query.slug[0];

  // const categoryName = slugName.replace(/-/g, " "); //for category products
  // const body = {
  //   store_id: 2811,
  //   category: categoryName,
  // };
  if (query.slug.length > 1) {
    var subSlugName = query.slug[1].replace(/-/g, " ");
    //body["sub_category"] = subSlugName;
  }
  // if (query.slug.length > 2) return (window.location.href = "/");

  //   useeffect for category
  // useEffect(() => {
  //   (async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_KEY,
  //     };
  //     const common = await axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_URL}/category`,
  //         {
  //           store_id: 2811,
  //           slug: slugName,
  //         },
  //         { headers }
  //       )
  //       .then((res) => {
  //         setData(res.data.body);
  //         setIsData(true);
  //       });
  //   })();
  // }, [query]);
  //   useeffect for category and subcat products
  // useEffect(() => {
  //   (async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_KEY,
  //     };
  //     const common = await axios
  //       .post(`${process.env.NEXT_PUBLIC_URL}/products`, body, { headers })
  //       .then((res) => {
  //         setProductsData(res.data.body);
  //         //    setIsData(true);
  //       });
  //   })();
  // }, [query]);

  // if (productsData === null) {
  //   return <p>Loading...</p>;
  // }
  // if (!isData) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;
  // useEffect(() => {
  //   (async () => {
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-api-key": process.env.NEXT_PUBLIC_KEY,
  //     };
  //     const common = await axios
  //       .post(
  //         `${process.env.NEXT_PUBLIC_URL}/category`,
  //         { store_id: scan.store_id, slug: query.slug },

  //         { headers }
  //       )
  //       .then((res) => {
  //         setData(res.data.body);
  //         setIsData(true);
  //         return res.data.body;
  //       });
  //   })();
  // }, [query]);
  function addToWishlist(product_id: any) {
    return;
  }
  function addToCart(product_id: any) {
    return;
  }

  return (
    //<h1>Category Page</h1>

    <>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb" id="bread">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {categoryData.category_name ? categoryData.category_name : ""}
            </li>
            {subSlugName !== "not" && (
              <li className="breadcrumb-item active" aria-current="page">
                {subSlugName ? subSlugName : ""}
              </li>
            )}
          </ol>
        </div>
      </nav>
      <div className="flex-col flex flex-column-fluid  content" id="kt_content">
        <div className="flex flex-column-fluid">
          <div className="container max-w-[1200px] w-[1180px] pl-2.5 pr-2.5 mr-auto ml-auto mx-auto sm:px-4 mt-2">
            <div className="row -ml-2.5 -mr-2.5 flex flex-wrap ">
              <div className="lg:w-3/4 pr-4 pl-4">
                {/* {cat && (
                  <div className="row">
                    <div
                      className="col-md-12 mb-4"
                      style={{
                        height: "250px",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundImage: cat ? cat : "",
                      }}
                    ></div>
                  </div>
                )} */}
                <div className="products mb-5">
                  <div
                    className="-ml-2.5 -mr-2.5 flex flex-wrap"
                    id="cat-page-loader"
                  >
                    {productData.length !== 0
                      ? productData.map((product: any) => {
                          return (
                            <div className="md:w-1/3 pr-4 pl-4">
                              <div
                                className=" w-full overflow-hidden relative mb-4 bg-white"
                                style={{ transition: "box-shadow .35s ease;" }}
                              >
                                <figure className="relative block bg-[#d7d7d7] mb-0 overflow-hidden m-0 ">
                                  {product.available == 0 && (
                                    <span className="text-white bg-[#ccc] absolute z-10 top-8 left-12 font-normal text-xl tracking-tighter pt-[0.5rem] px-4 min-w-[45px] text-center">
                                      Sold Out
                                    </span>
                                  )}
                                  <a
                                    href={"/p/" + product.slug}
                                    rel="noopener"
                                    target="_blank"
                                    className="block "
                                  >
                                    <img
                                      src={product.images[0]}
                                      alt={product.product_name}
                                      className=" block w-full h-auto max-w-full align-middle border-none"
                                    />
                                  </a>
                                  <div
                                    className=" flex flex-col absolute right-8 top-8 z-20 invisible opacity-0 "
                                    style={{
                                      transition: "all .35s ease",
                                      transform: "translateX(-15px)",
                                    }}
                                  >
                                    <a
                                      href="javascript:void(0)"
                                      onClick={() =>
                                        addToWishlist(product.product_id)
                                      }
                                      className=" text-2xl relative flex items-cenetr justuify-center  w-12n h-12 p-0"
                                      style={{
                                        transition: "all .35s ease,",
                                        padding: 0,
                                        borderRadius: "50%",
                                        color: "#e95488",
                                        backgroundColor: "#fff",
                                      }}
                                      id={"wish_btn_" + product.product_id}
                                      title="Add to wishlist"
                                    ></a>
                                  </div>
                                  {product.is_saleable == "yes" &&
                                    product.available > 0 && (
                                      <div className="product-action">
                                        <a
                                          href="javascript:void()"
                                          onClick={() =>
                                            addToCart(product.product_id)
                                          }
                                          className="btn-product btn-cart"
                                        >
                                          <span>add to cart</span>
                                        </a>
                                      </div>
                                    )}
                                </figure>
                                <div
                                  className="relative py-[1.6rem] px-8"
                                  style={{
                                    transition: "all .35s ease",
                                    backgroundColor: "#fff",
                                  }}
                                >
                                  <h3 className="text-normal text-2xl tracking-tighter text-black mb-[0.2rem]">
                                    <a
                                      className="text-inherit"
                                      href={"/p/" + product.slug}
                                      rel="noopener"
                                      target="_blank"
                                    >
                                      {product.product_name}
                                    </a>
                                  </h3>
                                  {product.material ? (
                                    <div>
                                      <b>Material:</b>
                                      {product.material}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div className="mt-2 flex items-center flex-wrap flex-row text-2xl text-normal mb-[1.3rem]">
                                    {Array.isArray(product.price_range) ? (
                                      <span className="mr-[0.8rem]">
                                        ₹{product.price_range[0].toFixed(2)}
                                      </span>
                                    ) : (
                                      <span className="mr-[0.8rem]">
                                        ₹{product.price.toFixed(2)}
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                  <div
                    className="ajax-load d-flex justify-content-center"
                    style={{ display: "none!important" }}
                  >
                    <p>
                      <img
                        src="{{env('S3_URL')}}imageloader.gif"
                        height="100"
                        width="100"
                        style={{ height: "100px" }}
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
              <aside className="col-lg-3 order-lg-first">
                <div className="row mb-1 ml-2" style={{ width: "75%" }}>
                  <p className="mr-3" id="min_val_slider">
                    ₹ 2408
                  </p>
                  -
                  <p className="ml-3" id="max_val_slider">
                    ₹ 26750
                  </p>
                </div>
                <div
                  id="price-slider"
                  style={{ maxWidth: "80%", marginBottom: "2rem" }}
                ></div>
                <form
                  method="get"
                  // action={
                  //   data.sub_category == ""
                  //     ? "/sc/" + data.slug
                  //     : "/sc/" + data.slug + "/" + data.sub_category
                  // }
                  action=""
                  id="frmprice"
                >
                  <input
                    type="hidden"
                    name="range_price_from"
                    id="range_price_from"
                  />
                  <input
                    type="hidden"
                    name="range_price_to"
                    id="range_price_to"
                  />
                  <div className="d-flex mb-3 justify-content-end">
                    <input
                      type="button"
                      id="filter"
                      className="btn btn-primary btn-sm w-25 pricebtn"
                      style={{
                        padding: "3px",
                        minWidth: "0px",
                        marginRight: "61px",
                      }}
                      value="APPLY"
                    />
                  </div>
                </form>
                <div className="sidebar sidebar-shop mt-3">
                  {/* <input
                    className="range relative flex w-full"
                    aria-valuemin={0}
                    type="range"
                    min="2408"
                    max="26750"
                    id="slider"
                    onChange={({ target: { value: radius } }) => {
                      setValue(radius);
                    }}
                  /> */}
                  {categoriesArray.map((value: any, index) => {
                    return (
                      value.count && (
                        <div
                          className="widget widget-collapsible text-black mb-8"
                          style={{ borderBottom: "0.1rem solid #ebebeb" }}
                        >
                          <label
                            htmlFor={"btn" + index}
                            className="button w-full"
                          >
                            <span className="flex justify-between">
                              <div>
                                <h3 className="widget-title flex justify-between text-black text-normal text-2xl tracking-tighter mb-[0.7rem]">
                                  {value.category_name}
                                  {"(" + value.count + ")"}{" "}
                                </h3>
                              </div>
                              <div className="arrowButton">
                                {index > 0 ? <IoIosArrowDown /> : ""}
                              </div>
                            </span>
                            <input
                              type="checkbox"
                              className="hidden"
                              id={"btn" + index}
                            />
                            <ul>
                              {value.sub_category.length
                                ? value.sub_category.map((n: any) => {
                                    return (
                                      <li>
                                        <a href={"/sc/" + value.slug + "/" + n}>
                                          {n}
                                        </a>
                                      </li>
                                    );
                                  })
                                : ""}
                            </ul>
                          </label>

                          {/* line 125 */}
                        </div>
                      )
                    );
                  })}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryPage;

// export async function getServerSideProps(context: any) {
//   const headers = {
//     "Content-Type": "application/json",
//     "x-api-key": "6fcIyoO6Ql5xUnafYZOtsauUPIXjY5xkazDVllyS",
//   };
//   let scan = useSelector(selectScan);
//   const { query } = useRouter();

//   // const common = await axios
//   //   .post(
//   //     `${process.env.NEXT_PUBLIC_URL}/category`,
//   //     { store_id: 2811, slug: "Tarini-Luxury" },

//   //     { headers }
//   //   )
//   //   .then((res) => {

//   //     return res.data.body;
//   //   });

//   return {
//     props: { context, scan, query },
//   };
//}
//line 183 image src not defined confidently
//line 78-91 value of cat is mot defined
