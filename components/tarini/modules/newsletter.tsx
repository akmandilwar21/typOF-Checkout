import { useState } from "react";

function Newsletter(props: any) {
  let data = props.props.data;
  function thankyou() {
    return "";
  }
  return (
    <div
      className="pt-20 bg-cover bg-center bg-no-repeat"
      style={{
        color: "#ebebeb",
        backgroundColor: "#ccc",
        paddingBottom: "6rem",
      }}
    >
      <div className="mb-20 text-center">
        <div className="max-w-[1200px] w-[1188px] pl-2.5 pr-2.5 mr-auto ml-auto">
          <h3 className="text-5xl text-white">{data.newsletter}</h3>
          <p
            className="title-desc text-2xl font-light leading-normal tracking-tighter mb-0"
            style={{ color: "#777" }}
          ></p>
        </div>
        <div className="-ml-2.5 -mr-2.5 flex flex-wrap justify-center">
          <div className="sm:w-4/5 pr-4 pl-4 sm:mx-1/6 md:w-2/3 pr-4 pl-4 md:mx-1/5 lg:w-1/2 pr-4 pl-4 lg:mx-1/4  ">
            <div className="input-group relative flex flex-wrap items-stretch w-full ">
              <input
                type="email"
                className=" block relative flex-auto w-[1%] mb-0 h-[40px] px-8 py-3.5 text-2xl leading-6 font-light rounded-none "
                placeholder="Enter your Email Address"
                id="sub_email"
                required
                style={{
                  borderBottomRightRadius: "0",
                  borderTopRightRadius: "0",
                  color: "#777",
                  border: "1px solid #ebebeb",
                  backgroundColor: "#fafafa",
                  transition: "all .3s",
                  boxShadow: "none",
                }}
              />
              <div className="-m-px flex cursor-pointer rounded-md">
                <a
                  className="no-underline bg-black text-white relative z-20 px-8 py-3.5 font-normal text-2xl leading-normal tracking-tighter min-w-[170px] whitespace-normal inline-flex items-center justify-center text-center"
                  id="newsletter-btn"
                  onClick={thankyou}
                  style={{
                    cursor: "pointer",
                    borderBottomRightRadius: "0",
                    borderTopRightRadius: "0",
                    transition: "all .3s",
                  }}
                >
                  <span>Subscribe</span>
                  <i className="icon-long-arrow-right ml-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
