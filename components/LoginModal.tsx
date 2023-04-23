import { redirect } from "next/dist/server/api-utils";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectScan } from "../store/scanSlice";
import { useRouter } from "next/navigation";
import { ImCross, ImEyeBlocked, ImEye } from "react-icons/im";
import { deleteCookie } from "cookies-next";
//import Cookies from "universal-cookie";

export default function Loginmodal({ closeModal }: any) {
  const { push } = useRouter();
  //const cookies = new Cookies();
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mobileNumberPage, setMobileNumberPage] = useState(true);
  const [validNumber, setValidNumber] = useState(false);
  const [otp, setOtp] = useState("");
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [validOTP, setValidOTP] = useState(false);
  const scan = useSelector(selectScan);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [otpErrorMessage, setOtpErrorMessage] = useState("");

  if (!scan) {
    return <div>Loading...</div>;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const commonData = scan.common_data;
  if (!commonData) {
    return <div>Loading...</div>;
  }

  const primary_color = commonData.default_theme.primary_color;

  const storeId = commonData.store.store_id;

  const handleInputChange = (e: any) => {
    if (e.target.name == "mobile") {
      setPhoneNumber(e.target.value);
      if (e.target.value.length == 10) {
        setValidNumber(true);
      } else setValidNumber(false);
    }
    if (e.target.name == "otp") {
      setOtp(e.target.value);
      if (e.target.value.length == 4) {
        setValidOTP(true);
      }
    }
  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };
  // function to validate phone number
  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^[0-9]{10}$/; // regex to match 10 digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const handleContinue = async () => {
    const response = await fetch("https://dev.typof.in/api/next/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile: phoneNumber, store_id: 27 }),
    });
    //let loginStatus={status:string, otp:Number, message:String}
    const data = await response.json();

    console.log(data, data.status);

    if (data.status == "success") {
      console.log(data.status);
      setOTP(data);
      setMobileNumberPage(false);
    } else if (data.status == "error") {
      if (data.message == "Customer not found.") {
        console.log(data.status);
        alert("Customer do not exist");
      }
      if (data.message == "You have reached maximum limit") {
        alert("You have reached maximum limit");
      }
      if (data.message == "Please use valid mobile number") {
        alert("please enter valid number");
      }
    }

    // if (validatePhoneNumber(phoneNumber)) {
    //   // only continue if validNumber is true
    //   setValidNumber(true);
    //   setShowSecondDiv(true);
    //   setPhoneNumber("");

    //   // update OTP field value
    // } else {
    //   alert("Please enter a valid mobile number.");
    // }
  };

  return (
    <>
      <div className="ModalOverlay "></div>
      <div
        style={
          window.innerWidth > 700
            ? {
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
              }
            : {
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                position: "absolute",
              }
        }
      >
        <div>
          <div
            className="page-wrap"
            style={window.innerWidth > 700 ? { top: "50%" } : {}}
          >
            <div
              className="w-full flex justify-end "
              style={{ padding: "3% 3% 0" }}
            >
              <button onClick={closeModal}>
                <ImCross />
              </button>
            </div>
            {mobileNumberPage ? (
              <div className="text-center w-full " style={{ padding: "5% 0%" }}>
                <h3>Welcome back, we</h3>
                <h3>missed you!</h3>
                <div className="mb-[1.4rem]">
                  <span>Hello, please enter your mobile number</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    onChange={handleInputChange}
                    value={phoneNumber}
                    name="mobile"
                    id="mobile"
                    placeholder="Enter your Mobile Number"
                    style={
                      window.innerWidth > 700
                        ? {
                            border: "1px solid",
                            padding: "1%",
                            width: "51%",
                            borderRadius: "7px",
                            color: "black",
                            fontSize: "19px",
                          }
                        : {
                            border: "1px solid",
                            padding: "1%",
                            width: "51%",
                            borderRadius: "7px",
                            color: "black",
                            fontSize: "12px",
                          }
                    }
                  />
                </div>
                <div style={{ marginTop: "3%" }}>
                  {validNumber ? (
                    <button onClick={handleContinue} className="continue-btn">
                      Continue
                    </button>
                  ) : (
                    <button
                      style={{ background: "grey", cursor: "not-allowed" }}
                      className="continue-btn"
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center w-full " style={{ padding: "5% 0%" }}>
                {otpErrorMessage ? (
                  <h6 className="text-danger">{otpErrorMessage + "!"}</h6>
                ) : (
                  ""
                )}
                <h3>Verify OTP</h3>

                <div className="mb-[1.4rem]">
                  <div>Enter OTP send to your mobile number</div>
                  <div className="font-semibold text-2xl text-black">
                    {"XXXXXX" + phoneNumber.substring(6, 10)}
                  </div>
                </div>
                <div className="relative">
                  <input
                    type={showOTP ? "text" : "password"}
                    onChange={handleInputChange}
                    value={otp}
                    maxLength={4}
                    name="otp"
                    id="otp"
                    placeholder="Enter 4 Digit OTP"
                    style={{
                      border: "1px solid",
                      padding: "1%",
                      width: "51%",
                      borderRadius: "7px",
                      color: "black",
                      fontSize: "19px",
                    }}
                  />
                  <div
                    className="absolute"
                    style={{ top: "30%", right: "27%", cursor: "pointer" }}
                  >
                    <button onClick={() => setShowOTP(!showOTP)}>
                      {showOTP ? <ImEye /> : <ImEyeBlocked />}
                    </button>
                  </div>
                </div>
                <div className="countdown-text flex justify-center">
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      whiteSpace: "nowrap",
                      justifyContent: "space-between",
                    }}
                  >
                    {seconds > 0 || minutes > 0 ? (
                      <p>
                        Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}
                        :{seconds < 10 ? `0${seconds}` : seconds}
                      </p>
                    ) : (
                      <p>Didn't recieve code?</p>
                    )}

                    <div>
                      <button
                        disabled={seconds > 0 || minutes > 0}
                        style={{
                          color:
                            seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
                        }}
                        onClick={resendOTP}
                      >
                        Resend OTP
                      </button>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "3%" }}>
                  {validOTP ? (
                    <button
                      className="continue-btn"
                      onClick={async () => {
                        const response = await fetch(
                          "https://dev.typof.in/api/next/verify-otp",
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              mobile: phoneNumber,
                              otp: otp,
                              store_id: 27,
                            }),
                          }
                        );
                        const data = await response.json();
                        console.log(data);
                        if (data.status == true) {
                          var now = new Date();
                          var time = now.getTime();
                          var expireTime = time + 1000 * 86400;
                          now.setTime(expireTime);
                          document.cookie =
                            "customer_id=" +
                            data.customer_id +
                            ";expires=" +
                            now.toUTCString() +
                            ";path=/";
                          deleteCookie("guest_id");
                          //setCookie("customer_id", data.customer_id,{expires: });
                          push("/orders");
                          // localStorage.setItem("expirationTime", Date.now() + 1 * 1 * 1 * 20); // Expires in 24 hours
                        } else {
                          setOtpErrorMessage("please enter correct OTP");
                        }
                      }}
                    >
                      Verify
                    </button>
                  ) : (
                    <button
                      style={{ background: "grey", cursor: "not-allowed" }}
                      className="continue-btn"
                    >
                      Verify
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
    // <div
    //   data-te-modal-init
    //   className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
    //   id="exampleModalCenter"
    //   tabIndex={-1}
    //   aria-labelledby="exampleModalCenterTitle"
    //   aria-modal="true"
    //   role="dialog"
    // >
    //   <div
    //     data-te-modal-dialog-ref
    //     className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    //   >
    //     <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
    //       <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
    //         <h5
    //           className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
    //           id="exampleModalScrollableLabel"
    //         >
    //           Modal title
    //         </h5>
    //         <button
    //           type="button"
    //           className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
    //           data-te-modal-dismiss
    //           aria-label="Close"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             className="h-6 w-6"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="relative p-4">
    //         <p>This is a vertically centered modal.</p>
    //       </div>
    //       <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
    //         <button
    //           type="button"
    //           className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
    //           data-te-modal-dismiss
    //           data-te-ripple-init
    //           data-te-ripple-color="light"
    //         >
    //           Close
    //         </button>
    //         <button
    //           type="button"
    //           className="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    //           data-te-ripple-init
    //           data-te-ripple-color="light"
    //         >
    //           Save changes
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
