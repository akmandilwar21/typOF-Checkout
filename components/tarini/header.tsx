import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";

import ReactModal from "react-modal";

import { useState } from "react";
import Loginmodal from "../LoginModal";

import { getCookie } from "cookies-next";

import { useMediaQuery } from "react-responsive";

import CheckOutModal from "./CheckOutModal";
import CartModal from "./cartModal";
function Header(props: any) {
  const { push } = useRouter();
  let header = props.prop;

  let [checkoutDetails, setCheckoutDetails] = useState<any>("");
  let [showModal, setShowModal] = useState(false);
  let [showCheckOutModal, setShowCheckOutModal] = useState(false);

  let [isCartOpen, setIsCartOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const openModal = () => {
    setIsCartOpen(true);
    document.body.classList.add("modal-open");
  };

  const openLoginModal = () => {
    setShowModal(true);
    document.body.classList.add("modal-open");
  };

  const openCheckOutModal = async () => {
    setShowCheckOutModal(true);
    document.body.classList.add("modal-open");
  };

  const cartObj = checkoutDetails.carts;
  const cartList = cartObj
    ? Object.entries(cartObj).map(([key, value]) => value)
    : [];

  const closeModal = () => {
    setIsCartOpen(false);
    setShowModal(false);

    //  setShowCheckOutModal(false);
    document.body.classList.remove("modal-open");
  };

  const modalContent = (
    <div>
      <h2>Modal Title</h2>
      <p>Modal Content</p>
      <button onClick={closeModal}>Close Modal</button>
      <button onClick={openCheckOutModal}>Proceed to CheckOut</button>
    </div>
  );

  var today = new Date(),
    currDate =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
  const header_color = {
    backgroundColor: header.lpm.header_module.foot_bg ?? "#c02a2a",
  };

  function searchauto() {}
  function search(e: any) {}
  function convertUpperCase(data: any) {
    let words = data.split(" ");
    words
      .map((word: any) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    return words;
  }

  function closeNav(e: any) {}
  const openShowCartModal = () => {
    setShowCheckOutModal(true);
  };
  return (
    <>
      {showModal ? (
        !getCookie("customer_id") ? (
          <Loginmodal closeModal={closeModal} />
        ) : (
          push("/orders")
        )
      ) : (
        ""
      )}

      {header.cartNumber ? (
        <a href="#">
          <div
            className={header.cartNumber ? "" : "cart_box"}
            style={
              header.cartNumber
                ? {
                    position: "fixed",
                    bottom: "31%",
                    right: "17px",
                    zIndex: "9",
                    backgroundColor: "var(--primary-color)",
                    width: "50px",
                    height: "50px",
                    display: "block",
                    borderRadius: "50%",
                    textAlign: "center",
                  }
                : {
                    position: "fixed",
                    bottom: "31%",
                    right: "17px",
                    zIndex: "9",
                    backgroundColor: "var(--primary-color)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    textAlign: "center",
                    display: "none",
                  }
            }
          >
            <div style={{ position: "relative", backgroundImage: "" }}>
              <i
                className="icon-shopping-cart"
                style={{ fontSize: "2.7rem", color: "#fff" }}
              ></i>
              <span
                className="badge badge-warning cart-count1"
                style={{ position: "absolute", top: "0", left: "0" }}
              >
                {header.cartNumber ? header.cartNumber : ""}
              </span>
            </div>
          </div>
        </a>
      ) : (
        ""
      )}
      {header.flash_notification &&
        currDate >= header.flash_notification.from_date &&
        currDate <= header.flash_notification.to_date && (
          <div
            className="row flex justify-center bg-slate-200"
            style={{
              fontSize: "18px!important",
              color: "#fff!important",
              padding: "4px 0px!important",
              backgroundColor: "#222!important",
            }}
          >
            {header.flash_notification.notification.length > 25 ? (
              <div className="holder text-center">
                <div className="animated bg-slate-200 rounded py-4">
                  <p className="min">
                    {header.flash_notification.notification ?? ""}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-skin-base">
                {header.flash_notification.notification ?? ""}
              </p>
            )}
          </div>
        )}
      {
        <>
          <div className="header-middle" style={header_color}>
            <div className="header w-full flex justify-around">
              <div className="items-center flex">
                <a
                  className="search-toggle"
                  data-toggle="modal"
                  data-target="#searchModal"
                  onClick={searchauto}
                  style={{ cursor: "pointer" }}
                >
                  <i className="icon-search"></i>
                </a>
                {/* mobile view  start*/}
                <div
                  className="modal fade p-0 w-full"
                  id="searchModal"
                  aria-labelledby="searchModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered m-0"
                    style={{ width: "100%", maxWidth: "none", height: "100%" }}
                  >
                    <div
                      className="modal-content"
                      style={{ height: "100%", border: "0", borderRadius: "0" }}
                    >
                      <div
                        className="modal-header flex justify-around py-5"
                        style={
                          header.lpm.header_module.head_bg
                            ? {
                                alignItems: "center",
                                backgroundColor:
                                  header.lpm.header_module.head_bg,
                              }
                            : {
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "#fff",
                              }
                        }
                      >
                        <form action="#" method="get">
                          <div className="header-search-wrapper">
                            <i
                              className="fa-solid fa-magnifying-glass"
                              style={{ fontSize: "22px" }}
                            ></i>
                            <input
                              type="text"
                              onKeyUp={search}
                              className="form-control mb-0"
                              name="q"
                              id="q"
                              placeholder="Search products here..."
                              autoComplete="off"
                              style={{ borderRadius: "10px" }}
                              required
                              autoFocus
                            />
                          </div>
                        </form>
                        <Link href="/">
                          {header.store.logo ? (
                            <Image
                              src={header.store.logo}
                              alt="Logo"
                              id="top_logo"
                              style={{ maxHeight: "70px" }}
                              height="60"
                              width="60"
                            />
                          ) : (
                            <Image
                              src="https://d1yvcml1qpeqwy.cloudfront.net/logo.png"
                              alt="Logo"
                              height="100"
                              width="100"
                            />
                          )}
                        </Link>
                        <div
                          className="flex justify-around"
                          style={{ width: "4%" }}
                        >
                          <div className="relative">
                            <i
                              className="fa-solid fa-cart-shopping"
                              style={{ fontSize: "22px" }}
                            ></i>
                            <div className="absolute top-0 right-0 bg-white text-black rounded-full border-black border-solid flex items-start">
                              <span className="text-xs py-1">0</span>
                            </div>
                          </div>
                          <div>
                            <i
                              className="fa-regular fa-user"
                              style={{ fontSize: "22px" }}
                            ></i>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="close m-0"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true" style={{ fontSize: "30px" }}>
                            &times;
                          </span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="card card-custom card-stretch">
                          <div className="search-result"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
              </button>
              {/* mobile view end line 67 */}
              <div className="items-center flex">
                <Link href="/" className="logo">
                  {header.store.logo ? (
                    <Image
                      src={header.store.logo}
                      alt="logo"
                      id="top_logo"
                      style={{ maxHeight: "8rem" }}
                      height="60"
                      width="60"
                    />
                  ) : (
                    <Image
                      src="https://d1yvcml1qpeqwy.cloudfront.net/logo.png"
                      alt="logo"
                      width="60"
                      height="60"
                    />
                  )}
                </Link>
              </div>
              <div className="items-center flex">
                <div className="pl-10 flex self-stretch items-center">
                  <Link href="/wishlist" className="dropdown-toggle">
                    <i
                      className="icon-heart-o"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <span
                      className="wishlist-count text-center"
                      style={{ paddingTop: "4px" }}
                    >
                      0
                    </span>
                  </Link>
                </div>

                <>
                  <button onClick={openModal}>
                    {/* <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" /> */}
                    <i
                      className="icon-shopping-cart"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </button>
                  <div className="sm: w-full md:w-1/3 lg:w-1/3">
                    <CartModal
                      isCartOpen={isCartOpen}
                      closeModal={closeModal}
                      openCheckOutModal={openCheckOutModal}
                      showCheckOutModal={showCheckOutModal}
                      setShowCheckOutModal={setShowCheckOutModal}
                      setIsCartOpen={setIsCartOpen}
                      openLoginModal={openLoginModal}
                    />
                  </div>
                </>
                <div className="pl-10 flex self-stretch items-center">
                  {getCookie("customer_id") ? (
                    <Link href="/orders" className="dropdown-toggle">
                      <i className="icon-user" style={{ fontSize: "3rem" }}></i>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="inline-block"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={openLoginModal}
                    >
                      <i className="icon-user" style={{ fontSize: "3rem" }}></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-header">
            <hr className="my-0" />
            <div className="d-flex justify-content-center">
              <div className="">
                <nav className="block ml-8">
                  <ul className="leading-normal flex items-center m-0 p-0 list-non">
                    <li className="relative">
                      <Link
                        href="/"
                        className="block relative no-underline text-black font-medium text-2xl uppercase px-12 py-16 hover:text-black"
                      >
                        Home
                      </Link>
                    </li>
                    {header.category_group_navbar
                      ? header.category_group_navbar.map(
                          (value: any, index: any) => {
                            return (
                              <li className="relative">
                                <a
                                  href="#"
                                  className="peer hover:text-black block relative no-underline text-black font-medium text-2xl uppercase px-12 py-16"
                                >
                                  {value.name}
                                </a>

                                <div
                                  className="z-30 left-0 inset-y-auto top-10 hidden peer-hover:flex hover:flex bg-white mt-1 absolute "
                                  style={{
                                    width: "625px",
                                    top: "60px",
                                    boxShadow:
                                      "5px 10px 16px rgb(51 51 51 / 5%), -5px 10px 16px rgb(51 51 51 / 5%)",
                                  }}
                                >
                                  <div className="flex ml-0 mr-0 flex-wrap">
                                    <div className="grid grid-col-12">
                                      <div className="pl-6 pr-12 pb-8">
                                        <div
                                          className="grid grid-cols-4 gap-4"
                                          style={{
                                            marginLeft: "-10px",
                                            marginRight: "-10px",
                                          }}
                                        >
                                          {value.category.map(
                                            (scat: any, index: any) => {
                                              return (
                                                <div className="pr-3 pl-4">
                                                  <div className="text-black font-normal text-2xl uppercase mb-2.5 px-2 pt-3">
                                                    {scat.category_name.length >
                                                    30
                                                      ? convertUpperCase(
                                                          scat.category_name.substring(
                                                            0,
                                                            30
                                                          )
                                                        )
                                                      : convertUpperCase(
                                                          scat.category_name
                                                        )}
                                                  </div>
                                                  <hr
                                                    style={{
                                                      margin:
                                                        "0.6rem auto 0.6rem",
                                                    }}
                                                  />
                                                  <ul className="inset-auto block static mt-0 p-0 m-0">
                                                    {scat.sub_category
                                                      ? scat.checkproductbysubcategory.map(
                                                          (
                                                            sv: any,
                                                            index: any
                                                          ) => {
                                                            return (
                                                              <li className="relative py-2">
                                                                <a
                                                                  className="pr-0 pl-1 hover:text-black"
                                                                  href={
                                                                    "/sc/" +
                                                                    scat.slug +
                                                                    "/" +
                                                                    sv
                                                                  }
                                                                >
                                                                  {sv ? sv : ""}
                                                                </a>
                                                              </li>
                                                            );
                                                          }
                                                        )
                                                      : ""}
                                                  </ul>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          }
                        )
                      : ""}

                    {header.header_navbar
                      ? header.header_navbar.map(
                          (category: any, index: any) => {
                            return category.category_name != "Special" ? (
                              <li className="relative">
                                <Link
                                  href={"/sc/" + category.slug}
                                  className="peer hover:text-black hover:no-underline block relative no-underline text-black font-medium text-2xl uppercase px-12 py-16"
                                >
                                  {category.category_name}
                                </Link>

                                {category.checkproductbysubcategory ? (
                                  <div
                                    className="z-30 left-12 inset-y-auto top-10 hidden peer-hover:flex hover:flex bg-white mt-1 absolute"
                                    style={{
                                      width: "200px",
                                      top: "60px",
                                      boxShadow:
                                        "5px 10px 16px rgb(51 51 51 / 5%), -5px 10px 16px rgb(51 51 51 / 5%)",
                                    }}
                                  >
                                    <ul>
                                      {category.checkproductbysubcategory.map(
                                        (scat: any) => {
                                          return (
                                            <Link
                                              href={
                                                "/sc/" +
                                                category.slug +
                                                "/" +
                                                scat
                                              }
                                              className="text-2xl "
                                              style={{ color: "black" }}
                                            >
                                              {scat.length > 30
                                                ? convertUpperCase(
                                                    scat.substring(0, 30)
                                                  )
                                                : convertUpperCase(scat)}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </li>
                            ) : (
                              ""
                            );
                          }
                        )
                      : ""}
                    {header.ws ? (
                      header.ws > 0 ? (
                        <li>
                          <Link href="/store/workshops">Workshops</Link>
                        </li>
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {header.menu_pages.map((menu: any) => {
                      return (
                        menu.navigation == "Header" ||
                        (menu.navigation == "Both" && (
                          <li>
                            <a href={"/store/" + menu.page_slug}>
                              {menu.page_title}
                            </a>
                          </li>
                        ))
                      );
                    })}
                    {header.blg &&
                    header.blog_link_position.position == "top" ? (
                      <li>
                        <Link href="/store/blog">Blog</Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {header.live_events ? (
                      <li>
                        <Link href="/live_event">Live</Link>
                      </li>
                    ) : (
                      ""
                    )}
                    {header.custom_links
                      ? header.custom_links.map((value: any) => {
                          return value.naviagation == "Header" ||
                            value.naviagation == "Both" ? (
                            <li>
                              <a href={value.page_content} target="_blank">
                                {value.page_title}
                              </a>
                            </li>
                          ) : (
                            ""
                          );
                        })
                      : ""}
                    <li className="relative">
                      <a
                        className='block relative hover:text-black no-underline text-black font-medium text-2xl uppercase px-12 py-16"'
                        href="https://tarini.studio"
                        target="_blank"
                      >
                        Tarini Studio
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* <div id="myNav" className="overlay row" style={{zIndex: '99999',margin:'0px!important' }}>
                    <div className="col-md-8 d-none d-md-block" style={{padding: '0px!important'}}>
                        <div style={{width: '100%',height: '100%'}} onClick={closeNav}></div>
                    </div>
                    <div className="col-md-4" style={{padding: '0px!important',boxShadow: '-10px 0px 25px #00000015!important'}}>
                        <div className="overlay-content" style={{backgroundColor:'white'}}>
                            <div className="exclude_close">
                                <div className="mb-2 px-2" style={{borderBottom: '1px solid'}}>
                                    <div className="d-flex justify-content-between">
                                        <span style={{padding: '5px', fontSize: '20px', fontWeight: '400'}}>CART</span>
                                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav} title="close" style={{padding: '5px',fontSize: '20px', fontWeight: '400'}}><i className="icon-close"></i></a>
                                    </div>
                                </div>
                                <div className="dropdown-cart-products" id="cartajax" style={{overflowY: 'hidden'}}></div>
                        </div>
                        </div>
                    </div>       
                </div> */}
        </>
      }
    </>
  );
}

export default Header;
