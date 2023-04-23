import Image from "next/image";
import Link from "next/link";
import axios from "axios";

function Footer(props: any) {
  let footer = props.prop;

  const footer_color = {
    backgroundColor: footer.lpm.footer_module.foot_bg ?? "#000000",
  };

  return (
    <footer className=" block w-full font-light font-2xl" style={footer_color}>
      <div
        className="pt-[6.7rem] pr-0 pl-0 pb-[2.2rem]"
        style={{ borderTop: ".1rem solid #ebebeb" }}
      >
        <div
          className={
            window.innerWidth > 1200
              ? "max-w-[1200px] w-[1188px] pl-2.5 pr-2.5 mr-auto ml-auto"
              : " pl-2.5 pr-2.5 mr-auto ml-auto"
          }
        >
          <div className="-ml-2.5 -mr-2.5 flex flex-wrap">
            <div
              className={
                window.innerWidth < 1200
                  ? "w-full"
                  : " sm:w-full pr-4 pl-4 lg:w-1/3 pr-4 pl-4"
              }
            >
              <div
                className={
                  window.innerWidth < 1200
                    ? "justify-center flex mb-[4.5rem]"
                    : "flex justify-start mb-[4.5rem]"
                }
              >
                {footer.store.flogo ? (
                  <Image
                    src={footer.store.flogo}
                    className="mb-8 -mt-3.5"
                    alt="Logo"
                    height="50"
                    width="50"
                  />
                ) : footer.store.flogo ? (
                  <Image
                    src={footer.store.logo}
                    className="mb-8 -mt-3.5"
                    alt="Logo"
                    height="50"
                    width="50"
                  />
                ) : (
                  <img
                    src="https://d1yvcml1qpeqwy.cloudfront.net/flogo.png"
                    className="mb-8 -mt-3.5"
                    alt="Logo"
                    height="50"
                    width="auto"
                  />
                )}
                <p id="one" className="mb-5 max-w-[260px]">
                  {footer.lpm.footer_module.footer_description ?? ""}
                </p>
                <p id="one " className="mb-5 max-w-[260px]">
                  {footer.lpm.footer_module.footer_description
                    ? footer.lpm.footer_module.footer_description
                    : ""}
                </p>
              </div>
              {footer.store.address && (
                <div>
                  <span id="two" className="widget-aabout-title">
                    Address
                  </span>
                  <p id="three">{footer.store.address}</p>
                </div>
              )}
            </div>

            {footer.page_col.length ? (
              footer.page_col.col_2 ? (
                <>
                  <div className="sm:w-full pr-4 pl-4 lg:w-1/5 pr-4 pl-4">
                    <div className="widget mb-[4.5rem]">
                      <h4
                        className="widget-title text-black font-normal text-3xl tracking-tighter mb-8"
                        id="four"
                      >
                        {footer.page_col.heading_1 && ""}
                      </h4>
                      <ul className="widget-list mb-0" id="five">
                        {footer.page_col.col_1 &&
                          footer.page_col.col_1.map(
                            (value: any, index: any) => {
                              <li key={index}>
                                <a href={"/store/" + value.page_slug}>
                                  {" "}
                                  {value.page_title}
                                </a>
                              </li>;
                            }
                          )}
                        {footer.blg &&
                        footer.store.setting.blog_link_position.position ==
                          "bottom" ? (
                          <li>
                            <a href="/store/blog">Blog</a>
                          </li>
                        ) : (
                          ""
                        )}
                        {footer.custom_link
                          ? footer.custom_link.map((value: any, index: any) => {
                              return (value.navigation &&
                                value.navigation == "Footer") ||
                                value.navigation == "Both" ? (
                                <>
                                  <li key={index}>
                                    <a
                                      href={value.page_content}
                                      target="_blank"
                                    >
                                      {value.page_title}
                                    </a>
                                  </li>
                                </>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title" id="four">
                        {footer.page_col.heading_2 && ""}
                      </h4>
                      <ul className="widget-list" id="five">
                        {footer.page_col.col_2
                          ? footer.page_col.col_2.map(
                              (value: any, index: any) => {
                                return (
                                  <li key={index}>
                                    <a href="/store/{value.page_slug}">
                                      {value.page_title && ""}
                                    </a>
                                  </li>
                                );
                              }
                            )
                          : ""}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-sm-12 col-lg-4">
                    <div className="widget">
                      <h4 className="widget-title" id="four">
                        {footer.page_col.heading_1 && ""}
                      </h4>
                      <ul className="widget-list" id="five">
                        {footer.page_col.col_1
                          ? footer.page_col.col_1.map(
                              (value: any, index: any) => {
                                return (
                                  <li key={index}>
                                    <Link
                                      href={`/store/` + value.page_slug}
                                      style={{ fontWeight: "400!important" }}
                                    >
                                      {value.page_title}
                                    </Link>
                                  </li>
                                );
                              }
                            )
                          : ""}
                        {footer.blg &&
                        footer.blog_link_position.position == "bottom" ? (
                          <li>
                            <a href="/store/blog">Blog</a>
                          </li>
                        ) : (
                          ""
                        )}

                        {footer.custom_link
                          ? footer.custom_link.map((value: any, index: any) => {
                              return (value.navigation &&
                                value.navigation == "Footer") ||
                                value.navigation == "Both" ? (
                                <>
                                  <li key={index}>
                                    <a
                                      href={value.page_content}
                                      target="_blank"
                                    >
                                      {value.page_title}
                                    </a>
                                  </li>
                                </>
                              ) : (
                                ""
                              );
                            })
                          : ""}
                      </ul>
                    </div>
                  </div>
                </>
              )
            ) : (
              <>
                <div
                  className={
                    window.innerWidth < 1200
                      ? "w-full sm:w-full pr-4 pl-4"
                      : " pr-4 pl-4 lg:w-1/3 pr-4 pl-4"
                  }
                >
                  <div
                    className={
                      window.innerWidth < 1200
                        ? "text-center mb-[4.5rem]"
                        : "mb-[4.5rem]"
                    }
                  >
                    <h4
                      className=" text-white font-normal text-3xl tracking-tighter mb-8 "
                      id="four"
                    >
                      QUICK LINKS
                    </h4>
                    <ul
                      className={
                        window.innerWidth < 1200
                          ? "text-center mb-0 text-white"
                          : "mb-0 text-white"
                      }
                      id="five"
                    >
                      {footer.menu_pages
                        ? footer.menu_pages.map((value: any, index: any) => {
                            return value.navigation == "Footer" ||
                              value.navigation == "Both" ? (
                              <li key={index}>
                                <Link href={`/store/` + value.page_slug}>
                                  {value.page_title}
                                </Link>
                              </li>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                      <li>
                        <a
                          href="https://typof.com/terms-conditions"
                          target="_blank"
                        >
                          Terms & Conditions
                        </a>
                      </li>

                      {footer.blg &&
                      footer.blog_link_position.position == "bottom" ? (
                        <li>
                          <a href="/store/blog">Blog</a>
                        </li>
                      ) : (
                        ""
                      )}
                      {footer.custom_link
                        ? footer.custom_link.map((value: any, index: any) => {
                            return (value.navigation &&
                              value.navigation == "Footer") ||
                              value.navigation == "Both" ? (
                              <>
                                <li key={index}>
                                  <a href={value.page_content} target="_blank">
                                    {value.page_title}
                                  </a>
                                </li>
                              </>
                            ) : (
                              ""
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                </div>
              </>
            )}
            {
              <div
                className={
                  window.innerWidth < 1200
                    ? "w-full sm:w-full pr-4 pl-4"
                    : " lg:w-1/3 pr-4 pl-4"
                }
              >
                <div className="font-normal text-3xl tracking-tighter pt-0">
                  {footer.store.mobile && footer.store.email_id ? (
                    <h4
                      className={
                        window.innerWidth < 1200
                          ? "text-center text-white font-normal text-3xl tracking-tighter mb-8"
                          : "text-white font-normal text-3xl tracking-tighter mb-8"
                      }
                      id="ten"
                    >
                      CONTACT INFO
                    </h4>
                  ) : (
                    ""
                  )}
                  <div
                    className={
                      window.innerWidth < 1200
                        ? "justify-center -mr-2.5 flex flex-wrap "
                        : "-mr-2.5 flex flex-wrap"
                    }
                  >
                    {footer.app_social ? (
                      <div
                        className={
                          window.innerWidth < 1200
                            ? "pr-0 sm:w-1/2 pr-4"
                            : "md:w-2/3 pr-4"
                        }
                        id="nine"
                      >
                        <span
                          className={
                            window.innerWidth < 1200
                              ? "text-center block font-light text-2xl text-white"
                              : "block font-light text-2xl text-white"
                          }
                        >
                          Follow Us
                        </span>
                        <div className="leading-1 flex items-center flex-row flex-wrap">
                          {footer.app_social.facebook ? (
                            <Link
                              href={footer.app_social.facebook}
                              rel="noopener"
                              className="max-[600px]:w-8 flex items-center text-2xl w-16 h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#8f79ed",
                              }}
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                          {footer.app_social.instagram ? (
                            <Link
                              href={footer.app_social.instagram}
                              rel="noopener"
                              className="max-[600px]:w-12 max-[600px]:justify-end flex items-center text-2xl w-16 h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#dd6d9a",
                              }}
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                          {footer.app_social.pinterest ? (
                            <Link
                              href={footer.app_social.pinterest}
                              rel="noopener"
                              className="max-[600px]:w-12 max-[600px]:justify-end flex items-center text-2xl w-16 h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#e66262",
                              }}
                              title="Pinterest"
                              target="_blank"
                            >
                              <i className="icon-pinterest"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                          {footer.app_social.youtube ? (
                            <Link
                              href={footer.app_social.youtube}
                              rel="noopener"
                              className="max-[600px]:w-12 max-[600px]:justify-end flex items-center text-2xl w-16  h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#e66262",
                              }}
                              title="Youtube"
                              target="_blank"
                            >
                              <i className="icon-youtube"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                          {footer.app_social.twitter ? (
                            <Link
                              href={footer.app_social.twitter}
                              rel="noopener"
                              className="max-[600px]:w-12 max-[600px]:justify-center flex items-center text-2xl w-16 h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#e66262",
                              }}
                              title="twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                          {footer.app_social.linkedin ? (
                            <Link
                              href={footer.app_social.linkedin}
                              rel="noopener"
                              className="max-[600px]:w-12 max-[600px]:justify-end flex items-center text-2xl w-16 h-16 m-0 no-underline opacity-100"
                              style={{
                                transition: "all .35s ease",
                                color: "#39c",
                              }}
                              title="linkedin"
                              target="_blank"
                            >
                              <i className="icon-linkedin"></i>
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="-ml-2.5 -mr-2.5 flex flex-wrap">
                    <div
                      className={
                        window.innerWidth < 1200
                          ? "text-center md:w-full pr-4 pl-2 "
                          : "md:w-full pr-4 pl-2"
                      }
                      id="six"
                    >
                      {footer.store.mobile || footer.store.email_id ? (
                        <span className="text-white block font-light text-2xl text-white mb-2">
                          Got a Question?
                        </span>
                      ) : (
                        ""
                      )}
                      {footer.store.mobile ? (
                        <>
                          <span className="text-white block font-light text-2xl text-white mb-2">
                            Connect with us :
                            <a href={"https://wa.me/+91" + footer.store.mobile}>
                              <i
                                className="icon-whatsapp ml-2"
                                style={{ fontWeight: "600", fontSize: "20px" }}
                              ></i>
                            </a>
                          </span>{" "}
                        </>
                      ) : (
                        ""
                      )}
                      {footer.store.mobile ? (
                        <Link
                          href={`tel:` + footer.store.mobile}
                          className="text-white"
                        >
                          <i className="icon-phone mr-2"></i>
                          {footer.store.mobile}
                        </Link>
                      ) : (
                        ""
                      )}
                      <br></br>
                      {footer.store.email_id ? (
                        <Link
                          href={`mailto:` + footer.store.email_id}
                          className="text-white"
                        >
                          <i className="icon-envelope mr-2"></i>
                          {footer.store.email_id}
                        </Link>
                      ) : (
                        ""
                      )}
                      <span className="text-white block font-light text-2xl text-white mb-0 mt-2">
                        Payment Method
                      </span>
                      <figure className="footer-payments">
                        <img
                          src="https://tarini.shop/portal/images/payments.png"
                          alt="Payment methods"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
          <div
            className="pt-1 pb-1 flex-row relative flex content-center"
            style={{ borderTop: "1px solid grey" }}
          >
            <p
              className="text-base mb-0 text-left"
              style={{ color: "#dfdfdf" }}
            >
              Copyright @ 2023 Tarini. All Rights Reserved.{" "}
            </p>
            <div className="flex ml-auto mr-0 mb-0 items-center flex-row flex-wrap">
              <p className="text-base">
                Made in{" "}
                <a href="https://typof.com">
                  <img
                    src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo_white.png"
                    className="w-[40px]"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
// export async function getServerSideProps() {
//     const headers = {
//       'Content-Type': 'application/json',
//       'x-api-key': '6fcIyoO6Ql5xUnafYZOtsauUPIXjY5xkazDVllyS'
//     }

//     const common = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': 'common_IND_1'}, {headers})
//     .then (res=> {return (res.data.body)})

//     return {
//       props: { common }
//     }
//   }

export default Footer;

// import Image from "next/image";
// import Link from "next/link";

// export default function Footer(prop: any) {
//   const footer = prop.prop;

//   const footer_color = {
//     backgroundColor: footer.lpm.footer_module.foot_bg ?? "#ffffff",
//   };
//   return (
//     <div className="mt-10 text-center footer" style={footer_color}>
//       <div className="grid gap-4 md:grid-cols-3">
//         {/*logo,description and address section */}
//         <div className="text-white logo-address">
//           {footer.store.flogo ? (
//             <img src={footer.store.flogo} className="footer-logo" alt="Logo" />
//           ) : footer.store.flogo ? (
//             <img src={footer.store.logo} className="footer-logo" alt="Logo" />
//           ) : (
//             <img
//               src="https://d1yvcml1qpeqwy.cloudfront.net/flogo.png"
//               className="footer-logo"
//               alt="Logo"
//               height="50"
//               width="50"
//             />
//           )}
//           <p id="one" className="footer-text" style={{ marginBottom: "20px" }}>
//             {footer.lpm.footer_module.footer_description ?? ""}
//           </p>
//           <p id="three" className="text-black footer-text ">
//             {footer.store.address}
//           </p>
//         </div>
//         {footer.page_col != "" ? (
//           footer.page_col.col_2 ? (
//             <>
//               <div className="grid grid-col-12 lg:grid-col-2">
//                 <div className="widget">
//                   <p id="three" className="text-white">
//                     {footer.store.address}
//                   </p>
//                   <h4 className="widget-title footer-font" id="four">
//                     {footer.page_col.heading_1 && ""}
//                   </h4>
//                   <ul className="widget-list" id="five">
//                     {footer.page_col.col_2 &&
//                       footer.page_col.col_2.map((value: any, index: any) => {
//                         {

//                         }

//                         <li key={index}>
//                           <Link href={"/store/" + value.page_slug}>
//                             {value}
//                           </Link>
//                         </li>;
//                       })}
//                     {footer.blg &&
//                     footer.blog_link_position.position == "bottom" ? (
//                       <li>
//                         <Link href="/store/blog">Blog</Link>
//                       </li>
//                     ) : (
//                       ""
//                     )}
//                     {footer.custom_links
//                       ? footer.custom_links.map((value: any, index: any) => {
//                           return value.navigation &&
//                             value.navigation == "footer" ? (
//                             <>
//                               <li key={index}>
//                                 <Link
//                                   href={value.page_content}
//                                   className="footer-font"
//                                   target="_blank"
//                                 >
//                                   {value.page_title}
//                                 </Link>
//                               </li>
//                             </>
//                           ) : (
//                             ""
//                           );
//                         })
//                       : ""}
//                   </ul>
//                 </div>
//               </div>
//               <div className="sm:w-full pr-4 pl-4 lg:w-1/5 pr-4 pl-4">
//                 <div className="widget">
//                   <h4 className="widget-title" id="four">
//                     {footer.page_col.heading_2 && ""}
//                   </h4>
//                   <ul className="widget-list" id="five">
//                     {footer.page_col.col_2
//                       ? footer.page_col.col_2.map((value: any, index: any) => {
//                           return (
//                             <li key={index}>
//                               <Link href="/store/{value.page_slug}">
//                                 {value.page_title && ""}
//                               </Link>
//                             </li>
//                           );
//                         })
//                       : ""}
//                   </ul>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="col-sm-12 col-lg-4">
//                 <div className="widget">
//                   <h4 className="widget-title" id="four">
//                     {footer.page_col.heading_1 && ""}
//                   </h4>
//                   <ul className="widget-list" id="five">
//                     {footer.page_col.col_1
//                       ? footer.page_col.col_1.map((value: any, index: any) => {
//                           return (
//                             <li key={index}>
//                               <Link
//                                 href={`/store/` + value.page_slug}
//                                 style={{ fontWeight: "400!important" }}
//                               >
//                                 {value.page_title}
//                               </Link>
//                             </li>
//                           );
//                         })
//                       : ""}
//                     {footer.blg &&
//                     footer.blog_link_position.position == "bottom" ? (
//                       <li>
//                         <Link href="/store/blog">Blog</Link>
//                       </li>
//                     ) : (
//                       ""
//                     )}

//                     {footer.custom_link
//                       ? footer.custom_link.map((value: any, index: any) => {
//                           return value.navigation &&
//                             value.navigation == "footer" ? (
//                             <>
//                               <li key={index}>
//                                 <Link href={value.page_content} target="_blank">
//                                   {value.page_title}
//                                 </Link>
//                               </li>
//                             </>
//                           ) : (
//                             ""
//                           );
//                         })
//                       : ""}
//                   </ul>
//                 </div>
//               </div>
//             </>
//           )
//         ) : (
//           <>
//             <div className="">
//               {/*quick links and t&c section*/}
//               <div className="widget">
//                 <h4 className="mb-3 footer-text footer-title" id="four">
//                   QUICK LINKS
//                 </h4>
//                 <ul className="widget-list" id="five">
//                   {footer.menu_pages
//                     ? footer.menu_pages.map((value: any, index: any) => {
//                         return value.navigation == "Footer" ||
//                           value.navigation == "Both" ? (
//                           <li key={index} className="footer-text">
//                             <Link href={`/store/` + value.page_slug}>
//                               {value.page_title}
//                             </Link>
//                           </li>
//                         ) : (
//                           ""
//                         );
//                       })
//                     : ""}
//                   <li className=" footer-text">
//                     <Link
//                       href="https://typof.com/terms-conditions"
//                       target="_blank"
//                     >
//                       Terms & Conditions
//                     </Link>
//                   </li>

//                   {footer.blg &&
//                   footer.blog_link_position?.position != undefined &&
//                   footer.blog_link_position.position == "bottom" ? (
//                     <li>
//                       <Link href="/store/blog">Blog</Link>
//                     </li>
//                   ) : (
//                     ""
//                   )}
//                   {footer.custom_link
//                     ? footer.custom_link.map((value: any, index: any) => {
//                         return value.navigation &&
//                           value.navigation == "footer" ? (
//                           <>
//                             <li key={index}>
//                               <Link href={value.page_content} target="_blank">
//                                 {value.page_title}
//                               </Link>
//                             </li>
//                           </>
//                         ) : (
//                           ""
//                         );
//                       })
//                     : ""}
//                 </ul>
//               </div>
//             </div>
//           </>
//         )}
//         {
//           <div className="widget-about-info">
//             {footer.store.mobile && footer.store.email_id ? (
//               <h4 className="footer-title footer-text" id="ten">
//                 CONTACT INFO
//               </h4>
//             ) : (
//               ""
//             )}
//             <div className="row">
//               {footer.app_social ? (
//                 <div className="col-sm-6 col-md-8" id="nine">
//                   <span className="footer-title">Follow Us</span>
//                   <div className="social-icons social-icons-color">
//                     {footer.app_social.facebook ? (
//                       <Link
//                         href={footer.app_social.facebook}
//                         rel="noopener"
//                         className="social-icon social-facebook"
//                         title="Facebook"
//                         target="_blank"
//                       >
//                         <i className="icon-facebook"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                     {footer.app_social.instagram ? (
//                       <Link
//                         href={footer.app_social.instagram}
//                         rel="noopener"
//                         className="social-icon social-instagram"
//                         title="Instagram"
//                         target="_blank"
//                       >
//                         <i className="icon-instagram"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                     {footer.app_social.pinterest ? (
//                       <Link
//                         href={footer.app_social.pinterest}
//                         rel="noopener"
//                         className="social-icon social-pinterest"
//                         title="Pinterest"
//                         target="_blank"
//                       >
//                         <i className="icon-pinterest"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                     {footer.app_social.youtube ? (
//                       <Link
//                         href={footer.app_social.youtube}
//                         rel="noopener"
//                         className="social-icon social-youtube"
//                         title="Youtube"
//                         target="_blank"
//                       >
//                         <i className="icon-youtube"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                     {footer.app_social.twitter ? (
//                       <Link
//                         href={footer.app_social.twitter}
//                         rel="noopener"
//                         className="social-icon social-twitter"
//                         title="twitter"
//                         target="_blank"
//                       >
//                         <i className="icon-twitter"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                     {footer.app_social.linkedin ? (
//                       <Link
//                         href={footer.app_social.linkedin}
//                         rel="noopener"
//                         className="social-icon social-linkedin"
//                         title="linkedin"
//                         target="_blank"
//                       >
//                         <i className="icon-linkedin"></i>
//                       </Link>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>

//             <div className="mt-2 ">
//               <div className="col-md-12" id="six">
//                 {footer.store.mobile ? (
//                   <Link
//                     className=" footer-text"
//                     href={`tel:` + footer.store.mobile}
//                     style={{ fontSize: "1.65rem!important" }}
//                   >
//                     <i className="icon-phone"></i>
//                     {footer.store.mobile}
//                   </Link>
//                 ) : (
//                   ""
//                 )}
//                 <br></br>
//                 {footer.store.email_id ? (
//                   <Link
//                     className=" footer-text md:mb-6"
//                     href={`mailto:` + footer.store.email_id}
//                     style={{ fontSize: "1.65rem!important" }}
//                   >
//                     <i className="icon-envelope"></i>
//                     {footer.store.email_id}
//                   </Link>
//                 ) : (
//                   ""
//                 )}
//                 <div className="footer-payments">
//                   <figure className="mt-4 ">
//                     <span className="footer-text footer-title">
//                       Payment Method
//                     </span>
//                   </figure>
//                   <img
//                     src="https://demo-4.typof.in/portal/images/payments.png"
//                     alt="payment-method"
//                     className="object-fill"
//                     width="290"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         }
//         <div className="mb-4"></div>
//       </div>
//       <hr />
//       <div className="mx-auto mt-4 footer-bottom">
//         <div className="flex flex-col items-center logo-content">
//           <div className="flex">
//             Made in
//             <a href="https://typof.com" target="_blank">
//               {footer.lpm.footer_module.f_luminance != null ? (
//                 footer.lpm.footer_module.f_luminance != "light" ? (
//                   <img
//                     src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo_white.png"
//                     width="50px"
//                   />
//                 ) : (
//                   <img
//                     src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo.png"
//                     width="50px"
//                   />
//                 )
//               ) : (
//                 <img
//                   src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo_white.png"
//                   width="50px"
//                 />
//               )}
//             </a>
//           </div>
//           <p className="footer-text">
//             Copyright © 2022 demo 4.All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   /* <div className="social-icons social-icons-color" id="eight">
//             Made in
//             <a href="https://typof.com" target="_blank">
//             @if(!empty($lpm->data['footer_module']['f_luminance']))
//                 @if($lpm->data['footer_module']['f_luminance'] != "light")
//                     <img src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo_white.png" width="50px">
//                 @else
//                     <img src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo.png" width="50px">
//                 @endif
//             @else
//                 <img src="https://d1yvcml1qpeqwy.cloudfront.net/portal/logo_white.png" width="50px">
//             @endif

//             </a>
// </div> */
// }
