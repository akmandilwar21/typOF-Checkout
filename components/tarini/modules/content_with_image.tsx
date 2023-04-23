import Image from "next/image";
import { useState } from "react";

function Content_With_Image() {
  let [data, setData] = useState<any>([]);

  return (
    <>
      <div className="mb-5"></div>
      <div className="container">
        <div className="row">
          {data.layout == "left" ? (
            <>
              <div className="col-md-6">
                <div className="">
                  <img
                    src={data.image ?? ""}
                    alt={data.heading ?? ""}
                    className="about-img-front"
                    style={{ border: "none!important" }}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3 mb-lg-0">
                <h2 className="text-capitalize">{data.heading ?? ""}</h2>
                <p className="mb-3" style={{ textAlign: "justify" }}>
                  {data.description ?? ""}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="col-md-6 mb-3 mb-lg-0">
                {data.heading ? (
                  <h2 className="text-capitalize">{data.heading ?? ""}</h2>
                ) : (
                  ""
                )}
                {data.description ? (
                  <p className="mb-3" style={{ textAlign: "justify" }}>
                    {data.description ?? ""}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="col-md-6">
                <div className="">
                  <Image
                    src={data.image ?? ""}
                    alt={data.heading ?? ""}
                    className="about-img-front"
                    style={{ border: "none!important" }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="mb-5"></div>
    </>
  );
}
export default Content_With_Image;
