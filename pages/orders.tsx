import Link from "next/link";
import { BsArrowReturnRight, BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectScan } from "../store/scanSlice";
import { SlNote } from "react-icons/sl";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import cookie from "cookie";
import { deleteCookie, getCookie } from "cookies-next";

export default function Orders({ user }: any) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [selectedItem, setSelectedItem] = useState("Orders");
  const [selectedMobileItem, setSelectedMobileItem] = useState("");
  const [mail, setMail] = useState("");

  const [mobile, setMobile] = useState("");

  const [street, setStreet] = useState("");

  const [pin, setPin] = useState("");

  const [state, setState] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const scan = useSelector(selectScan);

  if (!user) {
    router.push("/login");
    return null;
  }
  if (!scan) {
    return <div>Loading...</div>;
  }

  const commonData = scan.common_data;
  if (!commonData) {
    return <div>Loading...</div>;
  }

  // const primary_color = commonData.default_theme.primary_color;

  return window.innerWidth > 700 ? (
    <div className="py-8 mx-8">
      <div className="flex justify-between mb-2 px-20">
        <Link href="/">
          <img
            src="https://d1yvcml1qpeqwy.cloudfront.net/stores/2811/dc15160b-0eb2-47c0-b87a-aab7e9c3292c.jpg"
            className="w-24"
            alt="logo"
          />
        </Link>
        <h2>Hello, User</h2>
      </div>
      <hr className="py-2" style={{ margin: "0" }} />
      <nav className="w-full  bg-grey-light">
        <ol className="flex list-reset" style={{ marginLeft: "18%" }}>
          <li>
            <Link
              href="/"
              className="transition text-2xl duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
            >
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2 text-2xl text-neutral-500 ">{">"}</span>
          </li>
          <li>
            <a
              href="#"
              className="transition text-2xl duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
            >
              My Account
            </a>
          </li>
        </ol>
      </nav>
      <hr style={{ margin: "0" }} />
      <div
        className="flex mt-6 flex-col my-6 md:flex-row"
        style={{ marginLeft: "18%" }}
      >
        <div className="w-full  md:w-1/5">
          <ul
            className="flex flex-col flex-wrap pl-0 mr-4 list-none"
            role="tablist"
            data-te-nav-ref
          >
            <li role="presentation" className="pb-1 flex">
              <a
                onClick={() => setSelectedItem("Orders")}
                href="#pills-order03"
                className="text-3xl  flex  items-center  text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                // style={{ color: `${primary_color}` }}
                id="pills-order-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-order03"
                data-te-nav-active
                role="tab"
                aria-controls="pills-order03"
                aria-selected="true"
              >
                {selectedItem == "Orders" ? <BsArrowReturnRight /> : ""}
                <span className={selectedItem == "Orders" ? "ml-4" : ""}>
                  Orders
                </span>
              </a>
            </li>
            <hr style={{ margin: "0" }} />
            <li role="profile" className="py-3 flex">
              <a
                onClick={() => setSelectedItem("Address")}
                href="#pills-address03"
                className="text-3xl flex my-3 text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                id="pills-profile-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-address03"
                role="tab"
                aria-controls="pills-address03"
                aria-selected="false"
              >
                {selectedItem == "Address" ? <BsArrowReturnRight /> : ""}
                <span className={selectedItem == "Address" ? "ml-4" : ""}>
                  Address
                </span>
              </a>
            </li>
            <hr style={{ margin: "0" }} />
            <li role="contact" className="py-3">
              <a
                onClick={() => setSelectedItem("AccountDetails")}
                href="#pills-account03"
                className="text-3xl my-3 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                id="pills-contact-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-account03"
                role="tab"
                aria-controls="pills-account03"
                aria-selected="false"
              >
                {selectedItem == "AccountDetails" ? <BsArrowReturnRight /> : ""}
                <span
                  className={selectedItem == "AccountDetails" ? "ml-4" : ""}
                >
                  Account Details
                </span>
              </a>
            </li>
            <hr style={{ margin: "0" }} />
            <li role="contact" className="py-3">
              <a
                onClick={() => setSelectedItem("BusinessDetails")}
                href="#pills-business03"
                className="text-3xl my-3 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                id="pills-contact-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-business03"
                role="tab"
                aria-controls="pills-business03"
                aria-selected="false"
              >
                {selectedItem == "BusinessDetails" ? (
                  <BsArrowReturnRight />
                ) : (
                  ""
                )}
                <span
                  className={selectedItem == "BusinessDetails" ? "ml-4" : ""}
                >
                  Business Details
                </span>
              </a>
            </li>
            <hr style={{ margin: "0" }} />

            <li role="reward" className="py-3">
              <a
                onClick={() => setSelectedItem("RewardHistory")}
                href="#pills-contact03"
                className="text-3xl my-3 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                id="pills-reward-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-reward03"
                role="tab"
                aria-controls="pills-reward03"
                aria-selected="false"
              >
                {selectedItem == "RewardHistory" ? <BsArrowReturnRight /> : ""}
                <span className={selectedItem == "RewardHistory" ? "ml-4" : ""}>
                  Reward History
                </span>
              </a>
            </li>
            <hr style={{ margin: "0" }} />
            <li
              className="py-3"
              role="signout"
              onClick={() => {
                deleteCookie("customer_id");
                router.push("/");
              }}
            >
              <a
                onClick={() => setSelectedItem("SignOut")}
                href="/"
                className="text-3xl my-3 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                id="pills-signout-tab03"
                data-te-toggle="pill"
                data-te-target="#pills-signout03"
                role="tab"
                aria-controls="pills-signout03"
                aria-selected="false"
              >
                SignOut
              </a>
            </li>
            <hr style={{ margin: "0" }} />
          </ul>
        </div>
        <div className="w-full my-2 md:w-4/5">
          <div
            className="hidden text-2xl text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-order03"
            role="tabpanel"
            aria-labelledby="pills-order-tab03"
            data-te-tab-active
          >
            <h3> Your Orders</h3>
          </div>
          <div
            className="hidden text-2xl text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-address03"
            role="tabpanel"
            aria-labelledby="pills-address-tab03"
          >
            The following addresses will be used on the checkout page by
            default.
            <div className="flex h-[100px] mt-2 w-2/5 flex-col justify-center pl-6 rounded-lg bg-gray-100 shadow-sm shadow-black/10 ">
              <div className="font-medium text-4xl text-gray-800">
                Shipping Address
              </div>

              <button
                type="button"
                data-te-toggle="modal"
                data-te-target="#exampleModalScrollable"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="text-xl mt-1  text-black flex cursor-pointer hover:text-green pointer"
              >
                Add new address <SlNote className="ml-1" />
              </button>

              <div
                data-te-modal-init
                className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-visible  overflow-x-hidden outline-none"
                id="exampleModalScrollable"
                aria-labelledby="exampleModalScrollableLabel"
                aria-hidden="true"
              >
                <div
                  data-te-modal-dialog-ref
                  className="pointer-events-none relative h-[calc(100%-1rem)] overflow-y-auto w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
                >
                  <div className="address-modal pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
                    <div className="flex items-center justify-end flex-shrink-0 p-4 border-opacity-100 rounded-t-md  ">
                      <button
                        type="button"
                        className="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4">
                      <div style={{ borderBottom: "2px solid" }}>
                        <h4
                          className="leading-normal text-center text-neutral-800 "
                          id="exampleModalScrollableLabel"
                        >
                          Add Address
                        </h4>
                      </div>
                    </div>
                    <div className="text-black px-4 pt-4 text-2xl">
                      Shipping Details
                    </div>
                    <div className="relative px-4 overflow-y-auto">
                      <div className="formAddressDetail w-full mt-3">
                        <input
                          type="text"
                          required
                          name="name"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <span>FULL NAME *</span>
                      </div>
                      <div className="formAddressDetail w-full mt-3">
                        <input
                          type="text"
                          required
                          name="mobile"
                          id="mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <span>MOBILE *</span>
                      </div>
                      <div className="formAddressDetail w-full mt-3">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          required
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <span>STREET ADDRESS *</span>
                      </div>
                      <div className="flex">
                        <div className="formAddressDetail w-1/2 mt-3">
                          <input
                            type="text"
                            id="Postcode"
                            name="Postcode"
                            required
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            style={{ width: "100%" }}
                          />
                          <span>POSTCODE/ZIP *</span>
                        </div>
                        <div
                          className="w-1/2 mt-2 "
                          style={{ marginLeft: "5%" }}
                        >
                          <span className="text-[1em] leading-7 text-gray-600">
                            Country
                          </span>

                          <br />
                          <select value={country} className="w-full border p-2">
                            <option>Select Country</option>
                            <option value="India">India</option>
                            <option value="United State">United State</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="Singapore">Singapore</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Europe">Europe</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="formAddressDetail w-1/2 mt-3">
                          <input
                            type="text"
                            id="State"
                            name="State"
                            value={state}
                            required
                            onChange={(e) => setState(e.target.value)}
                            style={{ width: "100%" }}
                          />
                          <span>STATE *</span>
                        </div>
                        <div
                          className="formAddressDetail w-1/2 mt-2 "
                          style={{ marginLeft: "5%" }}
                        >
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                            style={{ width: "100%" }}
                          />
                          <span>CITY *</span>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          className="flex pointer w-full justify-center items-center my-6 px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                          style={{
                            border: "1px solid grey",
                            borderRadius: "7px",
                          }}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden text-[11px] text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-business03"
            role="tabpanel"
            aria-labelledby="pills-business-tab03"
          >
            <div className="form-accountDetail">
              <input
                type="text"
                required
                name="company_name"
                id="company_name"
              />
              <span>Company Name</span>
            </div>
            <div className="form-accountDetail mt-3">
              <input type="text" required name="gst" id="gst" />
              <span>GST NO.</span>
            </div>

            <div className="mt-6 w-2/5">
              <button
                type="button"
                className="flex pointer justify-center items-center m-2 px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                style={{
                  // color: `${primary_color}`,
                  border: "1px solid",

                  // borderColor: `${primary_color}`,
                }}
                data-te-ripple-init
              >
                SAVE CHANGES <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div
            className="hidden text-[11px] text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-account03"
            role="tabpanel"
            aria-labelledby="pills-account-tab03"
          >
            <div className="form-accountDetail">
              <input type="text" required name="full_name" id="full_name" />
              <span>Full Name</span>
            </div>
            <div className="form-accountDetail mt-3">
              <input type="text" required name="mobile" id="mobile" />
              <span>Mobile</span>
            </div>
            <div className="form-accountDetail mt-3">
              <input
                type="text"
                required
                name="email_address"
                id="email_address"
              />
              <span>Email Address</span>
            </div>

            <div className="mt-6 w-2/5">
              <button
                type="button"
                className="flex pointer justify-center items-center m-2 px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                style={{
                  // color: `${primary_color}`,
                  border: "1px solid",

                  // borderColor: `${primary_color}`,
                }}
                data-te-ripple-init
              >
                SAVE CHANGES <BsArrowRightShort />
              </button>
            </div>
          </div>
          <div
            className="hidden text-[11px] text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-reward03"
            role="tabpanel"
            aria-labelledby="pills-reward-tab03"
          >
            Reward Content
          </div>
          <div
            className="hidden text-[11px] text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-signout03"
            role="tabpanel"
            aria-labelledby="pills-signout-tab03"
          >
            SignOut
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="py-8 mx-4">
      {selectedMobileItem == "" ? (
        <div>
          <div className="flex justify-between mb-1">
            <Link href="/">
              <img
                src="https://d1yvcml1qpeqwy.cloudfront.net/stores/2811/dc15160b-0eb2-47c0-b87a-aab7e9c3292c.jpg"
                className="w-24"
                alt="logo"
              />
            </Link>
            <h5 className="flex items-end">Hello, User</h5>
          </div>
          <hr className="py-2" style={{ margin: "0" }} />
          <nav className="w-full  bg-grey-light">
            <ol className="flex list-reset">
              <li>
                <Link
                  href="/"
                  className="transition text-2xl duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 text-2xl text-neutral-500 ">{">"}</span>
              </li>
              <li>
                <a
                  href="#"
                  className="transition text-2xl duration-150 ease-in-out text-primary hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
                >
                  My Account
                </a>
              </li>
            </ol>
          </nav>
          <hr className="py-2" style={{ margin: "0" }} />
          <div className="w-full pt-2">
            <ul
              className="flex flex-col flex-wrap pl-0 mr-4 list-none"
              role="tablist"
              data-te-nav-ref
            >
              <li role="presentation" className="pb-1 flex">
                <a
                  onClick={() => setSelectedMobileItem("Orders")}
                  href="#pills-order03"
                  className="text-3xl  flex  items-center  text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  // style={{ color: `${primary_color}` }}
                  id="pills-order-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-order03"
                  data-te-nav-active
                  role="tab"
                  aria-controls="pills-order03"
                  aria-selected="true"
                >
                  <span>Orders</span>
                </a>
              </li>
              <hr style={{ margin: "0" }} />
              <li role="profile" className="py-3 flex">
                <a
                  onClick={() => setSelectedMobileItem("Address")}
                  href="#pills-address03"
                  className="text-3xl flex my-2 text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  id="pills-profile-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-address03"
                  role="tab"
                  aria-controls="pills-address03"
                  aria-selected="false"
                >
                  <span>Address</span>
                </a>
              </li>
              <hr style={{ margin: "0" }} />
              <li role="contact" className="py-3">
                <a
                  onClick={() => setSelectedMobileItem("AccountDetails")}
                  href="#pills-account03"
                  className="text-3xl my-2 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  id="pills-contact-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-account03"
                  role="tab"
                  aria-controls="pills-account03"
                  aria-selected="false"
                >
                  <span>Account Details</span>
                </a>
              </li>
              <hr style={{ margin: "0" }} />
              <li role="contact" className="py-3">
                <a
                  onClick={() => setSelectedMobileItem("BusinessDetails")}
                  href="#pills-business03"
                  className="text-3xl my-2 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  id="pills-contact-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-business03"
                  role="tab"
                  aria-controls="pills-business03"
                  aria-selected="false"
                >
                  <span>Business Details</span>
                </a>
              </li>
              <hr style={{ margin: "0" }} />

              <li role="reward" className="py-3">
                <a
                  onClick={() => setSelectedMobileItem("RewardHistory")}
                  href="#pills-contact03"
                  className="text-3xl my-2 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  id="pills-reward-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-reward03"
                  role="tab"
                  aria-controls="pills-reward03"
                  aria-selected="false"
                >
                  <span>Reward History</span>
                </a>
              </li>
              <hr style={{ margin: "0" }} />
              <li
                className="py-3"
                role="signout"
                onClick={() => {
                  deleteCookie("customer_id");
                  router.push("/");
                }}
              >
                <a
                  onClick={() => setSelectedMobileItem("SignOut")}
                  href="/"
                  className="text-3xl my-2 flex text-gray-600 cursor-pointer  data-[te-nav-active]:text-primary-700"
                  id="pills-signout-tab03"
                  data-te-toggle="pill"
                  data-te-target="#pills-signout03"
                  role="tab"
                  aria-controls="pills-signout03"
                  aria-selected="false"
                >
                  SignOut
                </a>
              </li>
              <hr style={{ margin: "0" }} />
            </ul>
          </div>
        </div>
      ) : selectedMobileItem == "Orders" ? (
        <h3 className="flex">
          <IoMdArrowRoundBack onClick={() => setSelectedMobileItem("")} />
          <span className="ml-3">Your Orders</span>
        </h3>
      ) : selectedMobileItem == "Address" ? (
        <div
          className="text-2xl text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="pills-address03"
          role="tabpanel"
          aria-labelledby="pills-address-tab03"
        >
          <h3 className="flex">
            <IoMdArrowRoundBack onClick={() => setSelectedMobileItem("")} />
            <span className="ml-3">Address</span>
          </h3>
          <hr style={{ margin: "0" }} />
          <label className="pt-2">
            The following addresses will be used on the checkout page by
            default.
          </label>
          <div className="flex h-[100px] mt-2 w-full flex-col justify-center pl-6 rounded-lg bg-gray-100 shadow-sm shadow-black/10 ">
            <div className="font-medium text-4xl text-gray-800">
              Shipping Address
            </div>

            <button
              type="button"
              data-te-toggle="modal"
              data-te-target="#exampleModalScrollable"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="text-xl mt-1  text-black flex cursor-pointer hover:text-green pointer"
            >
              Add new address <SlNote className="ml-1" />
            </button>

            <div
              data-te-modal-init
              className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-visible  overflow-x-hidden outline-none"
              id="exampleModalScrollable"
              aria-labelledby="exampleModalScrollableLabel"
              aria-hidden="true"
            >
              <div
                data-te-modal-dialog-ref
                className="pointer-events-none relative h-[calc(100%-1rem)] overflow-y-auto w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
              >
                <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none ">
                  <div className="flex items-center justify-end flex-shrink-0 p-4 border-opacity-100 rounded-t-md  ">
                    <button
                      type="button"
                      className="box-content border-none rounded-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <div style={{ borderBottom: "2px solid" }}>
                      <h4
                        className="leading-normal text-center text-neutral-800 "
                        id="exampleModalScrollableLabel"
                      >
                        Add Address
                      </h4>
                    </div>
                  </div>
                  <div className="text-black px-4 pt-4 text-2xl">
                    Shipping Details
                  </div>
                  <div className="relative px-4 overflow-y-auto">
                    <div className="formAddressDetail w-full mt-3">
                      <input
                        type="text"
                        required
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      <span>FULL NAME *</span>
                    </div>
                    <div className="formAddressDetail w-full mt-3">
                      <input
                        type="text"
                        required
                        name="mobile"
                        id="mobile"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      <span>MOBILE *</span>
                    </div>
                    <div className="formAddressDetail w-full mt-3">
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        style={{ width: "100%" }}
                      />
                      <span>STREET ADDRESS *</span>
                    </div>
                    <div className="flex">
                      <div className="formAddressDetail w-1/2 mt-3">
                        <input
                          type="text"
                          id="Postcode"
                          name="Postcode"
                          required
                          value={pin}
                          onChange={(e) => setPin(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <span>POSTCODE/ZIP *</span>
                      </div>
                      <div className="w-1/2 mt-2 " style={{ marginLeft: "5%" }}>
                        <span className="text-[1em] leading-7 text-gray-600">
                          Country
                        </span>

                        <br />
                        <select value={country} className="w-full border p-2">
                          <option>Select Country</option>
                          <option value="India">India</option>
                          <option value="United State">United State</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Singapore">Singapore</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Europe">Europe</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="formAddressDetail w-1/2 mt-3">
                        <input
                          type="text"
                          id="State"
                          name="State"
                          value={state}
                          required
                          onChange={(e) => setState(e.target.value)}
                          style={{ width: "100%" }}
                        />
                        <span>STATE *</span>
                      </div>
                      <div
                        className="formAddressDetail w-1/2 mt-2 "
                        style={{ marginLeft: "5%" }}
                      >
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                          style={{ width: "100%" }}
                        />
                        <span>CITY *</span>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        className="flex pointer w-full justify-center items-center my-6 px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                        style={{
                          border: "1px solid grey",
                          borderRadius: "7px",
                        }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : selectedMobileItem == "AccountDetails" ? (
        <div className="relative">
          <h3 className="flex">
            <IoMdArrowRoundBack onClick={() => setSelectedMobileItem("")} />
            <span className="ml-3">Account Details</span>
          </h3>
          <hr style={{ margin: "0" }} />
          <div
            className="text-[11px] mt-4 text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-account03"
            role="tabpanel"
            aria-labelledby="pills-account-tab03"
          >
            <div className="form-accountDetail">
              <input
                type="text"
                className="w-full"
                required
                name="full_name"
                id="full_name"
                style={{ width: "100%" }}
              />
              <span>Full Name</span>
            </div>
            <div className="form-accountDetail mt-3">
              <input
                type="text"
                className="w-full"
                required
                name="mobile"
                id="mobile"
                style={{ width: "100%" }}
              />
              <span>Mobile</span>
            </div>
            <div className="form-accountDetail mt-3">
              <input
                type="text"
                required
                name="email_address"
                id="email_address"
                className="w-full"
                style={{ width: "100%" }}
              />
              <span>Email Address</span>
            </div>

            <div className="mt-6 w-full ">
              <button
                type="button"
                className="flex w-full  pointer bg-black text-white justify-center items-center  px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                style={{
                  // color: `${primary_color}`,
                  border: "1px solid",

                  // borderColor: `${primary_color}`,
                }}
                data-te-ripple-init
              >
                SAVE CHANGES <BsArrowRightShort />
              </button>
            </div>
          </div>
        </div>
      ) : selectedMobileItem == "BusinessDetails" ? (
        <>
          <h3 className="flex">
            <IoMdArrowRoundBack onClick={() => setSelectedMobileItem("")} />
            <span className="ml-3">Business Details</span>
          </h3>
          <hr style={{ margin: "0" }} />
          <div
            className="text-[11px] text-gray-500 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pills-business03"
            role="tabpanel"
            aria-labelledby="pills-business-tab03"
          >
            <div
              className="form-accountDetail mt-3 w-full"
              style={{ width: "100%" }}
            >
              <input
                type="text"
                required
                name="company_name"
                id="company_name"
                className="w-full"
                style={{ width: "100%" }}
              />
              <span>Company Name</span>
            </div>
            <div className="form-accountDetail mt-3 w-full">
              <input
                type="text"
                className="w-full"
                required
                name="gst"
                id="gst"
                style={{ width: "100%" }}
              />
              <span>GST NO.</span>
            </div>

            <div className="mt-6 w-full">
              <button
                type="button"
                className="flex pointer absolute bottom-0 justify-center items-center left-0 bg-black text-white px-4 py-3 text-2xl font-medium uppercase leading-normal  transition duration-150 ease-in-out hover:bg-black hover:text-white font-bold"
                style={{
                  // color: `${primary_color}`,
                  border: "1px solid",

                  // borderColor: `${primary_color}`,
                }}
                data-te-ripple-init
              >
                SAVE CHANGES <BsArrowRightShort />
              </button>
            </div>
          </div>
        </>
      ) : selectedMobileItem == "RewardHistory" ? (
        <h3 className="flex">
          <IoMdArrowRoundBack onClick={() => setSelectedMobileItem("")} />
          <span className="ml-3">Reward History</span>
        </h3>
      ) : (
        ""
      )}
    </div>
  );
}
async function getServerSideProps(ctx: any) {
  const { req } = ctx;
  const cookies = req.headers.cookie;
  const parsedCookies = cookies && cookie.parse(cookies);
  const myCookieValue = parsedCookies && parsedCookies.customer_id;
  if (!myCookieValue) {
    // Redirect to login page if user is not authenticated
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: myCookieValue,
    },
  };
}
export { getServerSideProps };
