import Image from "next/image";
import { useState } from "react";

function Fpwh(props: any) {
  let data = props.props.data;
  return (
    <>
      <div className="mb-5"></div>
      <div className="mr-auto ml-auto px-2.5" style={{ maxWidth: "1188px" }}>
        <div className=" flex flex-wrap -ml-2.5 -mr-2.5 text-center ">
          <div
            className="bg-no-repeat pl-2.5 pr-2.5 flex-[0 0 58.333333%] max-w-[58.333333%] relative w-full"
            style={{
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              className="title title-lg text-uppercase tracking-tight text-5xl font-semibold"
              style={{ fontFamily: "molla" }}
            >
              {data.title ?? ""}
            </h2>

            <p
              className="text-black leading-relaxed text-justify text-2xl"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
          </div>
          <div className=" pl-2.5 pr-2.5 flex-[0 0 41.666667%] max-w-[41.666667%] relative w-full">
            <img
              src="https://tarini.shop/tarini/images/about.jpeg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5"></div>
    </>
  );
}
export default Fpwh;
