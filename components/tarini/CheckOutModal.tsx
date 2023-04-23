import { useEffect, useState } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { FaRegEdit, FaRegUser } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ReactModal from "react-modal";
import LoadingSpinner from "./Loader";
import { BsCart2, BsPlus, BsPlusCircle, BsTrash } from "react-icons/bs";
import { getCookie } from "cookies-next";
import { FormSchema } from "./schemas";
import {
  IoIosArrowRoundBack,
  IoIosArrowUp,
  IoMdArrowRoundBack,
} from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";

export default function CheckOutModal({
  showCheckOutModal,
  setShowCheckOutModal,
  setIsCartOpen,
  openLoginModal,
}: any) {
  let [showAlertMessage, setShowAlertMessage] = useState(false);
  let [checkoutDetails, setCheckoutDetails] = useState<any>("");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  let [totalAmount, setTotalAmount] = useState("");
  let [showLoader, setShowLoader] = useState(false);
  let [selectedAddress, setSelectedAddress] = useState("");

  let [alertMessage, setAlertMessage] = useState(
    "New Address added successfully. !"
  );
  let [progress, setProgress] = useState("0");
  let [currentView, setCurrentView] = useState("home-address");
  let [selectedAddressData, setSelectedAddressData] = useState<any>({
    name: "",
    mobile: "",
    email_id: "",
    address1: "",
    city: "",
    address2: "",
    pin: "",
    country: "",
    state: "",
    store_id: "",
    cid: "",
    address_id: "",
  });

  let [error, setError] = useState({
    name: "",
    mobile: "",
    email_id: "",
    address1: "",
    city: "",
    pin: "",
    country: "",
    state: "",
  });
  let [showSummaryDetail, setShowSummaryDetail] = useState(true);
  let [showSummaryDetailMobile, setShowSummaryDetailMobile] = useState(false);
  let [userAddressList, setUserAddressList] = useState<any>([]);
  useEffect(() => {
    getCheckoutData();
  }, []);
  const handleEditAddressInput = (e: any) => {
    const { name, value } = e.target;
    setSelectedAddressData({ ...selectedAddressData, [name]: value });
  };
  const getCheckoutData = async () => {
    setShowLoader(true);
    await axios
      .post(
        "https://dev.typof.in/api/next/check-Out?store_id=27&cid=8537&currency=INR",
        {}
      )
      .then((res) => {
        setUserAddressList(res.data.addresses);
        if (res.data.addresses.length)
          setSelectedAddress(res.data.addresses[0].address_id);
        setCheckoutDetails(res.data);
        const cartList = res.data.carts
          ? Object.entries(res.data.carts).map(([key, value]) => value)
          : []; //cartlist for displaying cart items

        setTotalAmount(res.data.total_amount);
        setShowLoader(false);
      });
  };
  const handleContinue = async (e: any) => {
    let errorData = {
      name: "",
      mobile: "",
      email_id: "",
      address1: "",
      city: "",
      pin: "",
      country: "",
      state: "",
    };
    let RegEx =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    let RegExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!selectedAddressData.name) {
      setError({ ...error, name: "Please Enter your name " });
      errorData.name = "Please Enter your name";
    }
    if (!selectedAddressData.mobile) {
      setError({ ...error, mobile: "Please Enter your mobile " });
      errorData.mobile = "Please Enter your mobile";
    }
    if (!RegEx.test(selectedAddressData.mobile)) {
      setError({ ...error, mobile: "Please Enter valid mobile number" });
      errorData.mobile = "Please Enter valid mobile number";
    }
    if (!selectedAddressData.email_id) {
      setError({ ...error, email_id: "Please Enter your email" });
      errorData.email_id = "Please Enter your email";
    }
    if (!RegExEmail.test(selectedAddressData.email_id)) {
      setError({ ...error, email_id: "Please Enter valid email" });
      errorData.email_id = "Please Enter valid email";
    }
    if (!selectedAddressData.address1) {
      setError({ ...error, address1: "Please Enter your address " });
      errorData.address1 = "Please Enter your address ";
    }
    if (!selectedAddressData.city) {
      setError({ ...error, city: "Please Enter your city name " });
      errorData.city = "Please Enter your city name ";
    }
    if (!selectedAddressData.pin) {
      setError({ ...error, pin: "Please Enter your pin " });
      errorData.pin = "Please Enter your pin";
    }
    if (!selectedAddressData.country) {
      setError({ ...error, country: "Please Enter your country name " });
      errorData.country = "Please Enter your country name ";
    }
    if (!selectedAddressData.state) {
      setError({ ...error, state: "Please Enter your state name " });
      errorData.state = "Please Enter your state name ";
    }
    console.log(error);
    if (
      !errorData.name &&
      !errorData.mobile &&
      !errorData.email_id &&
      !errorData.address1 &&
      !errorData.city &&
      !errorData.pin &&
      !errorData.country &&
      !errorData.state
    ) {
      setShowLoader(true);
      await fetch(
        `https://dev.typof.in/api/next/edit-Address?name=${
          selectedAddressData.name
        }&mobile=${selectedAddressData.mobile}&email_id=${
          selectedAddressData.email_id
        }&address1=${selectedAddressData.address1}&address2=${
          selectedAddressData.address2
        }&country=${selectedAddressData.country}&city=${
          selectedAddressData.city
        }&pin=${selectedAddressData.pin}&state=${
          selectedAddressData.state
        }&address_id=${selectedAddressData.address_id}&cid=${getCookie(
          "customer_id"
        )}&store_id=27`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSelectedAddressData({
        name: "",
        mobile: "",
        email_id: "",
        address1: "",
        city: "",
        address2: "",
        pin: "",
        country: "",
        state: "",
        store_id: "",
        cid: "",
      });
      setError({
        name: "",
        mobile: "",
        email_id: "",
        address1: "",
        city: "",
        pin: "",
        country: "",
        state: "",
      });
      getCheckoutData();
      setCurrentView("home-address");
      setShowAlertMessage(true);
      setAlertMessage(" Address modified successfully!");
      setTimeout(function () {
        setShowAlertMessage(false);
      }, 2000);
    }
  };
  const cartObj = checkoutDetails.carts;
  const cartList = cartObj
    ? Object.entries(cartObj).map(([key, value]) => value)
    : [];
  const deleteAddress = async (id: any) => {
    if (confirm("Do you really want to delete this address ?")) {
      setShowLoader(true);
      await axios
        .post("https://dev.typof.in/api/next/delete-address", {
          cid: getCookie("customer_id"),
          aid: id,
        })
        .then((res) => {
          getCheckoutData();
          setShowAlertMessage(true);

          setAlertMessage("Address deleted successfully!");
          setTimeout(function () {
            setShowAlertMessage(false);
          }, 2000);
        });
    }
  };
  const closeCheckOutModal = () => {
    setShowCheckOutModal(false);
    setCurrentView("home-address");
  };
  let initialValues = {
    name: "",
    mobile: "",
    email_id: "",
    address1: "",
    city: "",
    address2: "",
    pin: "",
    country: "",
    state: "",
    store_id: "27",
    cid: getCookie("customer_id"),
  };
  const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues,
      validateOnChange: true,
      validateOnBlur: false,
      validationSchema: FormSchema,
      onSubmit: async (values, action) => {
        const response = await fetch(
          "https://dev.typof.in/api/next/add-address",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        action.resetForm();
        getCheckoutData();

        setCurrentView("home-address");
        setShowAlertMessage(true);
        setAlertMessage(" New Address successfully!");
        setTimeout(function () {
          setShowAlertMessage(false);
        }, 2000);
      },
    });
  const secondModalContent = (
    <div>
      {showLoader && (
        <div
          className="mobile-otp-loader"
          style={{
            gridTemplateColumns: isMobile ? "45% 55%" : "",
            height: isMobile ? "100vh" : "67vh",
            width: isMobile ? "100vh" : "112vh",
          }}
        >
          <div style={{ display: "flex" }}>
            <LoadingSpinner />
          </div>
        </div>
      )}
      {!isMobile ? (
        <div
          className={`w-full ${isMobile ? "block" : "flex"} justify-end`}
          style={{ padding: "2% 0% 3%" }}
        >
          <button onClick={closeCheckOutModal}>
            <ImCross />
          </button>
        </div>
      ) : (
        ""
      )}
      {/* below header container*/}
      <div className="sm:flex-col md:flex-row flex">
        <div className="sm:w-full md:w-2/3 p-2 sm:order-2 md:order-1 ">
          {/* header of left side  */}
          <div className="flex justify-between w-full">
            <div
              className="text-address flex cursor-pointer"
              onClick={() => {
                setCurrentView("home-address");
              }}
            >
              <span
                className="rounded-full flex justify-center items-center relative font-medium text-base"
                style={{
                  width: "30px",
                  height: "30px",
                  background: "rgb(237, 237, 237)",
                  color: "#000",
                  border: "2px solid #ededed",
                  boxSizing: "border-box",
                }}
              >
                1
              </span>
              <span className="text-2xl text-black  font-medium ml-2 items-center flex">
                Address
              </span>
            </div>
            <div className="text-pay flex">
              <span
                className="rounded-full flex justify-center items-center relative font-medium text-base"
                style={{
                  width: "30px",
                  height: "30px",
                  background: "rgb(237, 237, 237)",
                  color: "#000",
                  border: "2px solid #ededed",
                  boxSizing: "border-box",
                }}
              >
                2
              </span>
              <span className="text-2xl text-black  font-medium ml-2 items-center flex">
                Pay
              </span>
            </div>
          </div>
          {/*End of header of left side  */}
          {/* progress line */}
          <div className="w-full">
            <progress
              value={progress}
              className="h-[3px] w-full"
              style={{ backgroundColor: "#c9c9c9" }}
            ></progress>
          </div>
          {showAlertMessage ? (
            <div>
              <div className="alert success p-0">
                <input type="checkbox" className="hidden" id="alert2" />
                <label
                  className="close"
                  style={{
                    float: "right",
                    margin: isMobile
                      ? "23px 30px 0px 0px"
                      : "24px 30px 0px 0px",
                    cursor: "pointer",
                    fontSize: "10px",
                    color: "rgb(70, 136, 71)",
                  }}
                  title="close"
                  htmlFor="alert2"
                >
                  <ImCross onClick={() => setShowAlertMessage(false)} />
                </label>
                <p
                  className="text"
                  style={{
                    display: "block",
                    color: "rgb(70, 136, 71)",
                    margin: "10px 0px",
                    padding: "10px",
                    borderRadius: "3px",
                    border: "1px solid rgb(214, 233, 198)",
                    backgroundColor: "rgb(223, 240, 216)",
                  }}
                >
                  <strong>{alertMessage}</strong>
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
          {currentView == "home-address" ? (
            <div>
              <div className="add-list">
                <div className="flex justify-between">
                  {isMobile ? (
                    <h4 className="my-4">Shipping Addresses</h4>
                  ) : (
                    <h3 className="my-4">Shipping Addresses</h3>
                  )}
                  <span
                    className="my-4 md:hidden"
                    style={{ color: "blue" }}
                    onClick={() => setCurrentView("new-address")}
                  >
                    + Add Address
                  </span>
                </div>

                <div
                  className="sm:h-[415px] md:h-[250px]"
                  style={{
                    overflowY: "auto",

                    borderBottom: isMobile ? "" : "1px solid darkgrey",
                    paddingRight: "2%",
                  }}
                  id="style-4"
                >
                  {userAddressList.map((n: any, index: any) => {
                    return (
                      <div
                        key={n.address_id}
                        className="address-card"
                        style={
                          selectedAddress == n.address_id
                            ? { border: "1px solid" }
                            : {
                                border: "1px solid rgb(220, 220, 220)",
                              }
                        }
                        onClick={() => setSelectedAddress(n.address_id)}
                      >
                        <input
                          type="radio"
                          name="input-type"
                          id={n.address_id}
                          value={n.address_id}
                          style={{
                            width: "30px",
                            height: "20px",
                            marginTop: isMobile ? "2.2%" : "1.2%",
                          }}
                          checked={selectedAddress == n.address_id}
                          className="cursor-pointer"
                        />
                        <label htmlFor={n.address_id}>
                          <div>{n.name}</div>
                          <p>{n.address1}</p>
                        </label>
                        <div>
                          <div className="edit-address mb-[5px]">
                            <BsTrash
                              className="cursor-pointer hover:text-black"
                              style={{
                                width: "15px",
                                height: "15px",
                                marginRight: "10px",
                              }}
                              onClick={() => deleteAddress(n.address_id)}
                            />
                            <FaRegEdit
                              className="cursor-pointer hover:text-black"
                              style={{
                                width: "15px",
                                height: "15px",
                                marginRight: "10px",
                              }}
                              onClick={() => {
                                let data = {
                                  name: n.name,
                                  mobile: n.mobile,
                                  email_id: n.custom_fields.email_id,
                                  address1: n.address1,
                                  address2: n.address2,
                                  pin: n.pin,
                                  state: n.state,
                                  country: n.country,
                                  city: n.city,
                                  address_id: n.address_id,
                                  cid: getCookie("customer_id"),
                                  store_id: "27",
                                };
                                setSelectedAddressData(data);

                                setCurrentView("edit-address");
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="sm:hidden md:flex items-center hover:text-black sm:w-full md:w-1/4 cursor-pointer"
                style={{ marginLeft: "1.5%", marginTop: "1.5%" }}
                onClick={() => setCurrentView("new-address")}
              >
                <BsPlusCircle style={{ fontSize: "30px", fontWeight: "700" }} />

                <span className="ml-2 text-2xl"> Add Address</span>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button
                  className="sm:w-full md:w-1/2 bg-black text-white font-bold text-3xl p-4 pointer-cursor"
                  style={{ borderRadius: "7px" }}
                  // onClick={() => handleContinue(currentView)}
                >
                  <span className="flex justify-center">
                    Continue
                    <CgArrowLongRight className="ml-2" />
                  </span>
                </button>
              </div>
            </div>
          ) : currentView == "new-address" ? (
            <div>
              <div className="sm:block md:flex md:justify-between">
                <h3 className="mt-1">
                  <span>Add New Address</span>
                </h3>
                {!getCookie("customer_id") ? (
                  <h5 className="mt-1 mr-2  ">
                    Already have an account !
                    <span
                      className="ml-1 text-danger cursor-pointer hover:underline "
                      onClick={() => {
                        setIsCartOpen(false);
                        setShowCheckOutModal(false);
                        openLoginModal();
                        setCurrentView("home-address");
                      }}
                    >
                      Login
                    </span>
                  </h5>
                ) : (
                  ""
                )}
              </div>
              <form onSubmit={handleSubmit}>
                <div
                  className="md:h-[300px] sm:h-[]"
                  style={{
                    overflowY: "auto",
                    borderBottom: isMobile ? "" : "1px solid darkgrey",
                    paddingRight: isMobile ? "5%" : "2%",
                  }}
                  id="style-4"
                >
                  <div
                    className="form-address mt-1 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="name"
                      id="name"
                      className="w-full"
                      style={{ width: "100%" }}
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    <span>Full Name</span>
                  </div>
                  {errors.name && touched.name ? (
                    <div className="text-danger font-medium">{errors.name}</div>
                  ) : (
                    ""
                  )}
                  <div className="sm:block md:flex md:justify-around">
                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="tel"
                        required
                        name="mobile"
                        id="mobile"
                        style={{ width: isMobile ? "100%" : "95%" }}
                        onChange={handleChange}
                        value={values.mobile}
                        onBlur={handleBlur}
                      />
                      <span>Mobile</span>
                      {errors.mobile && touched.mobile ? (
                        <div className="text-danger font-medium">
                          {errors.mobile}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="email"
                        required
                        name="email_id"
                        id="email_id"
                        style={{ width: "100%" }}
                        value={values.email_id}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span>Email</span>
                      {errors.email_id && touched.email_id ? (
                        <div className="text-danger font-medium">
                          {errors.email_id}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="address1"
                      id="address1"
                      className="w-full"
                      style={{ width: "100%" }}
                      value={values.address1}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span>Street Address</span>
                    {errors.address1 && touched.address1 ? (
                      <div className="text-danger font-medium">
                        {errors.address1}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="address2"
                      id="address2"
                      className="w-full"
                      style={{ width: "100%" }}
                      value={values.address2}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <span>House No./ Apartment Name</span>
                  </div>
                  <div className="sm:block md:flex md:justify-around">
                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        required
                        name="pin"
                        id="pin"
                        style={{ width: isMobile ? "100%" : "95%" }}
                        value={values.pin}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span>Postcode/Zip</span>
                      {errors.pin && touched.pin ? (
                        <div className="text-danger font-medium">
                          {errors.pin}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        required
                        name="country"
                        id="country"
                        style={{ width: "100%" }}
                        value={values.country}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span>Country</span>
                      {errors.country && touched.country ? (
                        <div className="text-danger font-medium">
                          {errors.country}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="sm:block md:flex md:justify-around">
                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        required
                        name="state"
                        id="state"
                        style={{ width: "95%" }}
                        value={values.state}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span>State</span>
                      {errors.state && touched.state ? (
                        <div className="text-danger font-medium">
                          {errors.state}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div
                      className="form-address mt-3 w-full"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        required
                        name="city"
                        id="city"
                        style={{ width: "100%" }}
                        value={values.city}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <span>City</span>
                      {errors.city && touched.city ? (
                        <div className="text-danger font-medium">
                          {errors.city}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <button
                    className="sm:w-full md:w-1/2 bg-black text-white font-bold text-3xl p-4 pointer-cursor"
                    style={{ borderRadius: "7px" }}
                    //onClick={() => handleContinue(currentView)}
                    type="submit"
                  >
                    <span className="flex justify-center">
                      Save
                      <CgArrowLongRight className="ml-2" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : currentView == "edit-address" ? (
            <div>
              <h3 className="mt-1 sm:flex md:block">
                <span>Edit Address</span>
              </h3>

              <div
                className=" md:h-[300px]"
                style={{
                  overflowY: "auto",
                  borderBottom: isMobile ? "" : "1px solid darkgrey",
                  paddingRight: "2%",
                }}
                id="style-4"
              >
                <div
                  className="form-address mt-1 w-full"
                  style={{ width: "100%" }}
                >
                  <input
                    type="text"
                    required
                    name="name"
                    id="name"
                    className="w-full"
                    style={{ width: "100%" }}
                    value={selectedAddressData.name}
                    onChange={(e) => handleEditAddressInput(e)}
                  />
                  <span>Full Name</span>
                  {error.name ? (
                    <div className="text-danger font-medium">{error.name}</div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="sm:block md:flex md:justify-around">
                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="mobile"
                      id="mobile"
                      style={{ width: isMobile ? "100%" : "95%" }}
                      value={selectedAddressData.mobile}
                      onChange={(e) => handleEditAddressInput(e)}
                    />
                    <span>Mobile</span>
                    {error.mobile ? (
                      <div className="text-danger font-medium">
                        {error.mobile}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="email"
                      required
                      name="email_id"
                      id="email_id"
                      style={{ width: "100%" }}
                      value={selectedAddressData.email_id}
                      onChange={(e) => handleEditAddressInput(e)}
                    />
                    <span>Email</span>
                    {error.email_id ? (
                      <div className="text-danger font-medium">
                        {error.email_id}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div
                  className="form-address mt-3 w-full"
                  style={{ width: "100%" }}
                >
                  <input
                    type="text"
                    required
                    name="address1"
                    id="address1"
                    className="w-full"
                    style={{ width: "100%" }}
                    value={selectedAddressData.address1}
                    onChange={(e) => handleEditAddressInput(e)}
                  />
                  <span>Street Address</span>
                  {error.address1 ? (
                    <div className="text-danger font-medium">
                      {error.address1}
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  className="form-address mt-3 w-full"
                  style={{ width: "100%" }}
                >
                  <input
                    type="text"
                    required
                    name="address2"
                    id="address2"
                    className="w-full"
                    style={{ width: "100%" }}
                    value={selectedAddressData.address2}
                    onChange={(e) => handleEditAddressInput(e)}
                  />
                  <span>House No./ Apartment Name</span>
                </div>

                <div className="sm:block md:flex justify-around">
                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="pin"
                      id="pin"
                      value={selectedAddressData.pin}
                      onChange={(e) => handleEditAddressInput(e)}
                      style={{ width: isMobile ? "100%" : "95%" }}
                    />
                    <span>Postcode/Zip</span>
                    {error.pin ? (
                      <div className="text-danger font-medium">{error.pin}</div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="country"
                      id="country"
                      style={{ width: "100%" }}
                      value={selectedAddressData.country}
                      onChange={(e) => handleEditAddressInput(e)}
                    />
                    <span>Country</span>
                    {error.country ? (
                      <div className="text-danger font-medium">
                        {error.country}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="sm:block md:flex justify-around">
                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="state"
                      id="state"
                      style={{ width: isMobile ? "100%" : "95%" }}
                      value={selectedAddressData.state}
                      onChange={(e) => handleEditAddressInput(e)}
                    />
                    <span>State</span>
                    {error.state ? (
                      <div className="text-danger font-medium">
                        {error.state}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div
                    className="form-address mt-3 w-full"
                    style={{ width: "100%" }}
                  >
                    <input
                      type="text"
                      required
                      name="city"
                      id="city"
                      style={{ width: "100%" }}
                      value={selectedAddressData.city}
                      onChange={(e) => handleEditAddressInput(e)}
                    />
                    <span>City</span>
                    {error.city ? (
                      <div className="text-danger font-medium">
                        {error.city}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center mt-4">
                <button
                  className="sm:w-full md:w-1/2 bg-black text-white font-bold text-3xl p-4 pointer-cursor"
                  style={{ borderRadius: "7px" }}
                  onClick={handleContinue}
                >
                  <span className="flex justify-center">
                    Save
                    <CgArrowLongRight className="ml-2" />
                  </span>
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* {Right side UI} */}
        <div className="rightSide sm:ml-0 md:ml-4 sm:w-full md:w-1/3 sm:order-1 md:order-2">
          <div
            className="flex justify-between w-full"
            style={{ cursor: "pointer" }}
          >
            <div className="text-orderSummary flex items-center">
              {/* <img src="https://pdp.gokwik.co/assets/icons/cart.svg" /> */}
              {isMobile && currentView !== "home-address" ? (
                <IoIosArrowRoundBack
                  style={{ fontSize: "30px" }}
                  onClick={() => setCurrentView("home-address")}
                />
              ) : (
                ""
              )}
              <BsCart2
                style={{
                  width: "30px",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />

              <span
                style={{
                  fontWeight: "700",
                  fontSize: "2rem",
                  marginLeft: "7px",
                }}
                onClick={() =>
                  isMobile
                    ? setShowSummaryDetailMobile(!showSummaryDetailMobile)
                    : setShowSummaryDetail(!showSummaryDetail)
                }
              >
                Order Summary
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              onClick={() =>
                isMobile
                  ? setShowSummaryDetailMobile(!showSummaryDetailMobile)
                  : setShowSummaryDetail(!showSummaryDetail)
              }
            >
              {isMobile ? (
                <strong className="text-black font-bold">
                  {"₹" + totalAmount}
                </strong>
              ) : (
                ""
              )}
              <IoIosArrowUp
                style={
                  showSummaryDetail
                    ? { marginLeft: "10px", width: "13px" }
                    : {
                        transform: "rotate(180deg)",
                        marginLeft: "10px",
                        width: "20px",
                      }
                }
              />
            </div>
          </div>

          {!isMobile ? (
            showSummaryDetail ? (
              <div
                className="order-summary-wrapper h-auto inline"
                style={{ transition: "all 1s" }}
              >
                <div className="scroll h-auto block mt-2 max-h-[110px] overflow-y-auto">
                  <div className="cart-product-detail">
                    <ul className="cart-product-list">
                      {cartList.map((n: any) => {
                        return (
                          <li className="mb-[10px]  flex justify-between">
                            <div
                              className=" h-[70px] w-[70px] overflow-hidden relative"
                              style={{ borderRadius: "7px" }}
                            >
                              <img
                                src={n.image}
                                className="w-[70px] h-auto max-w-full align-middle"
                              />
                            </div>
                            <div
                              className="mb-8 text-xl font-normal"
                              style={{
                                width: "calc(100% - 100px)",
                                padding: "5px 0px",
                              }}
                            >
                              <div className="font-semibold text-black text-2xl mb-[1.2rem] -mt-2 pr-4">
                                {n.pname}
                              </div>
                              <span className=" font-xl font-semibold text-black">
                                Quantity{": " + n.quantity}
                              </span>
                              <div
                                className=" font-2xl flex items-center flex-wrap text-black"
                                style={{ flexDirection: "initial" }}
                              >
                                Price{": ₹" + n.price}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="order-summary">
                  <div className="text-2xl text-black p-2.5 font-medium">
                    <ul className="list-none pl-0 mb-0">
                      <li className="flex justify-between text-3xl items-center">
                        <span>Subtotal</span>
                        <span>{"₹" + totalAmount}</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Coupon Discount</span>
                        <span>-₹0.00</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Prepaid Discount</span>
                        <span>-₹0.00</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Shipping</span>
                        <span>To be calculated</span>
                      </li>
                      <li
                        className="mt-4 font-bold mt-[25px] mb-[20px] flex justify-between text-3xl"
                        style={{
                          borderTop: "1px solid #eaeaea",
                          marginTop: "5%",
                        }}
                      >
                        <span>To Pay</span>
                        <span>{"₹" + totalAmount}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
          {isMobile ? (
            showSummaryDetailMobile ? (
              <div
                className="order-summary-wrapper h-auto inline"
                style={{ transition: "all 1s" }}
              >
                <div className="scroll h-auto block mt-2 max-h-[110px] overflow-y-auto">
                  <div className="cart-product-detail">
                    <ul className="cart-product-list">
                      {cartList.map((n: any) => {
                        return (
                          <li className="mb-[10px]  flex justify-between">
                            <div
                              className=" h-[70px] w-[70px] overflow-hidden relative"
                              style={{ borderRadius: "7px" }}
                            >
                              <img
                                src={n.image}
                                className="w-[70px] h-auto max-w-full align-middle"
                              />
                            </div>
                            <div
                              className="mb-8 text-xl font-normal"
                              style={{
                                width: "calc(100% - 100px)",
                                padding: "5px 0px",
                              }}
                            >
                              <div className="font-semibold text-black text-2xl mb-[1.2rem] -mt-2 pr-4">
                                {n.pname}
                              </div>
                              <span className=" font-xl font-semibold text-black">
                                Quantity{": " + n.quantity}
                              </span>
                              <div
                                className=" font-2xl flex items-center flex-wrap text-black"
                                style={{ flexDirection: "initial" }}
                              >
                                Price{": ₹" + n.price}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="order-summary">
                  <div className="text-2xl text-black p-2.5 font-medium">
                    <ul className="list-none pl-0 mb-0">
                      <li className="flex justify-between text-3xl items-center">
                        <span>Subtotal</span>
                        <span>{"₹" + totalAmount}</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Coupon Discount</span>
                        <span>-₹0.00</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Prepaid Discount</span>
                        <span>-₹0.00</span>
                      </li>
                      <li className="flex justify-between items-center text-3xl">
                        <span>Shipping</span>
                        <span>To be calculated</span>
                      </li>
                      <li
                        className="mt-4 font-bold mt-[25px] mb-[20px] flex justify-between text-3xl"
                        style={{
                          borderTop: "1px solid #eaeaea",
                          marginTop: "5%",
                        }}
                      >
                        <span>To Pay</span>
                        <span>{"₹" + totalAmount}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          ) : (
            ""
          )}

          <div className="discounts">
            <div className="discount-coupon w-full items-center flex">
              <div
                className="discount-coupon-inner w-full text-2xl items-center flex "
                style={{ marginBottom: "15%" }}
              >
                <img
                  src="https://pdp.gokwik.co/assets/icons/coupon-discount.svg"
                  style={{
                    marginLeft: "10px",
                    width: "50px",
                    height: "auto",
                    verticalAlign: "middle",
                    marginTop: "42px",
                  }}
                />
                <div className="discount-box">
                  <input
                    type="text"
                    name="discount"
                    required
                    maxLength={64}
                    placeholder=" "
                    className="discount-coupon-input"
                  />
                  <label className="discount-coupon-text sm:top-[15px] sm:left-[20px] ">
                    You have SAVED a lot, Congrats!
                  </label>
                  <div className="apply-coupon">
                    <div className="coupon-wrap"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* left side UI */}
    </div>
  );
  return (
    <ReactModal
      isOpen={showCheckOutModal}
      onRequestClose={closeCheckOutModal}
      contentLabel="Second Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },

        content: {
          background: "#fff",
          width: isMobile ? "100%" : "60%",
          height: isMobile ? "100vh" : "auto",
          top: isMobile ? "0" : "50%",
          left: isMobile ? "" : "50%",
          right: isMobile ? "" : "auto",
          bottom: isMobile ? "" : "auto",
          marginRight: isMobile ? "" : "-50%",
          transform: isMobile ? "" : "translate(-50%, -50%)",
          borderRadius: "8px",
        },
      }}
    >
      {secondModalContent}
    </ReactModal>
  );
}
