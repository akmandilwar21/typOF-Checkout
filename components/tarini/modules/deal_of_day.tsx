import Image from "next/image";
import { useState } from "react";

function DealOfDay() {
  let [dealOfDay, setDealOfDay] = useState<any>({});
  return (
    <>
      {" "}
      {dealOfDay ? (
        <>
          <div className="trending">
            <Image
              src="{{$dealofday->getUrl()}}"
              alt="Deal Of The Day"
              width="100"
              height="100"
              style={{ width: "100%", height: "313px" }}
            />
            <div className="banner banner-big d-md-block">
              <div className="banner-content text-center">
                {dealOfDay.custom_properties.link_description && (
                  <p
                    className="d-none d-lg-block text-white"
                    style={{ fontSize: "3vw" }}
                  >
                    {dealOfDay.custom_properties.link_description}
                  </p>
                )}
                {dealOfDay.custom_properties.link_description && (
                  <a
                    href={"/sc/" + dealOfDay.custom_properties.deal_category}
                    className="btn btn-primary-white"
                  >
                    <span>Shop Now</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="mb-5"></div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default DealOfDay;
