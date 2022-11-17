import Image from 'next/image'
import Link from 'next/link';

export default function Footer(prop:any) {
  const footer = prop.prop;
  const footer_color = {
    backgroundColor: footer.lpm.footer_module.foot_bg ?? "#000000"
  }
  return (
        <footer className="footer footer-2" style={footer_color}>
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-4">
                            <div className="widget widget-about">
                                {
                                    footer.store.flogo?
                                    <Image src={footer.store.flogo} className="footer-logo" alt="Logo" height="50" width="50"/>
                                    :footer.store.flogo?
                                    <Image src={footer.store.logo} className="footer-logo" alt="Logo" height="50" width="50"/>
                                    :<img src="https://d1yvcml1qpeqwy.cloudfront.net/flogo.png" className="footer-logo" alt="Logo" height="50" width="auto"/>
                                }
                                <p id="one" style={{marginBottom: "20px"}}>{footer.lpm.footer_module.footer_description ?? ""}</p>
                            </div>
                            <p id="three">{footer.store.address && ""}</p> 
                        </div>
                        {
                            footer.page_col ?(
                                footer.page_col.col_2 ? (
                                    <>
                                    <div className="col-sm-12 col-lg-2">
                                        <div className="widget">
                                            <h4 className="widget-title" id="four">{footer.page_col.heading_1 && ""}</h4>
                                            <ul className="widget-list" id="five">
                                                {
                                                    footer.page_col.col_1 && footer.page_col.col_1.map((value: any, index: any) => {
                                                        <li key={index}>
                                                            <a href={"/store/"+value.slug}>{value.page_title}</a>
                                                        </li>
                                                    })
                                                }
                                                {
                                                    footer.blg && footer.store.setting.blog_link_position.position=="bottom" ?
                                                    <li>
                                                        <a href="/store/blog">Blog</a>
                                                    </li>:""
                                                }
                                                {
                                                    footer.custom_link ? 
                                                    (
                                                        footer.custom_link.map((value:any, index:any) => {
                                                            return (
                                                                value.navigation && value.navigation == "footer" ?
                                                                    <>
                                                                    <li key={index}>
                                                                        <a href={value.page_content} target="_blank">{value.page_title}</a>
                                                                    </li>
                                                                    </>
                                                                    :""
                                                            )
                                                        })
                                                    ):""
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-2">
                                        <div className="widget">
                                            <h4 className="widget-title" id="four">{footer.page_col.heading_2 && ""}</h4>
                                            <ul className="widget-list" id="five">
                                                {
                                                    footer.page_col.col_2?
                                                    footer.page_col.col_2.map((value:any, index:any) => {
                                                        return (
                                                            <li key={index}>
                                                                <a href="/store/{value.page_slug}">{value.page_title && ""}</a>
                                                            </li>
                                                        )
                                                    }):""
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    </>
                                ):(
                                    <>
                                        <div className="col-sm-12 col-lg-4">
                                            <div className="widget">
                                                <h4 className="widget-title" id="four">{footer.page_col.heading_1 && ""}</h4>
                                                <ul className="widget-list" id="five">
                                                    {
                                                        footer.page_col.col_1 ?
                                                        footer.page_col.col_1.map((value: any, index: any) => {
                                                            return (
                                                                <li key={index}>
                                                                    <Link href={`/store/`+value.page_slug} style={{fontWeight: "400!important"}}>{value.page_title}</Link>
                                                                </li>
                                                            )
                                                        }):""
                                                    }
                                                    {
                                                        footer.blg && footer.blog_link_position.position=="bottom" ?
                                                        <li>
                                                            <a href="/store/blog">Blog</a>
                                                        </li>:""
                                                    }

                                                    {
                                                        footer.custom_link ? 
                                                        (
                                                            footer.custom_link.map((value:any, index:any) => {
                                                                return (
                                                                    value.navigation && value.navigation == "footer" ?
                                                                        <>
                                                                        <li key={index}>
                                                                            <a href={value.page_content} target="_blank">{value.page_title}</a>
                                                                        </li>
                                                                        </>
                                                                        :""
                                                                )
                                                            })
                                                        ):""
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )
                            ):(
                                <>
                                <div className="col-sm-12 col-lg-4">
                                    <div className="widget">
                                        <h4 className="widget-title" id="four">QUICK LINKS</h4>
                                        <ul className="widget-list" id="five">
                                            {
                                                footer.menu_pages ? 
                                                footer.menu_pages.map((value: any, index: any) => {
                                                    return (
                                                        value.navigation == 'Footer' && value.navigation == 'Both' ?
                                                        (
                                                            <li key={index}>
                                                                <Link href={`/store/`+value.page_slug}>{value.page_title}</Link>
                                                            </li>
                                                        ):""
                                                    )
                                                })
                                                :""
                                            }
                                            <li>
                                                <a href="https://typof.com/terms-conditions" target="_blank">Terms & Conditions</a>
                                            </li>

                                            {
                                                footer.blg && footer.blog_link_position.position=="bottom" ?
                                                <li>
                                                    <a href="/store/blog">Blog</a>
                                                </li>:""
                                            }
                                            {
                                                footer.custom_link ? 
                                                (
                                                    footer.custom_link.map((value:any, index:any) => {
                                                        return (
                                                            value.navigation && value.navigation == "footer" ?
                                                                <>
                                                                <li key={index}>
                                                                    <a href={value.page_content} target="_blank">{value.page_title}</a>
                                                                </li>
                                                                </>
                                                                :""
                                                        )
                                                    })
                                                ):""
                                            }
                                        </ul>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        {
                            <div className="col-sm-12 col-lg-4">
                                <div className="widget-about-info">
                                    {
                                        footer.store.mobile && footer.store.email_id ?
                                        <h4 className="widget-title" id="ten">CONTACT INFO</h4>
                                        :''
                                    }
                                    <div className="row">
                                        {
                                            footer.app_social ? (
                                            <div className="col-sm-6 col-md-8" id="nine">
                                                <span className="widget-about-title">Follow Us</span>
                                                <div className="social-icons social-icons-color">
                                                {
                                                    footer.app_social.facebook?
                                                    (<Link href={footer.app_social.facebook} rel="noopener" className="social-icon social-facebook" title="Facebook" target="_blank">
                                                        <i className="icon-facebook"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                {
                                                    footer.app_social.instagram?
                                                    (<Link href={footer.app_social.instagram} rel="noopener" className="social-icon social-instagram" title="Instagram" target="_blank">
                                                        <i className="icon-instagram"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                {
                                                    footer.app_social.pinterest?
                                                    (<Link href={footer.app_social.pinterest} rel="noopener" className="social-icon social-pinterest" title="Pinterest" target="_blank">
                                                        <i className="icon-pinterest"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                {
                                                    footer.app_social.youtube?
                                                    (<Link href={footer.app_social.youtube} rel="noopener" className="social-icon social-youtube" title="Youtube" target="_blank">
                                                        <i className="icon-youtube"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                {
                                                    footer.app_social.twitter?
                                                    (<Link href={footer.app_social.twitter} rel="noopener" className="social-icon social-twitter" title="twitter" target="_blank">
                                                        <i className="icon-twitter"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                {
                                                    footer.app_social.linkedin?
                                                    (<Link href={footer.app_social.linkedin} rel="noopener" className="social-icon social-linkedin" title="linkedin" target="_blank">
                                                        <i className="icon-linkedin"></i>
                                                    </Link>
                                                    ):""
                                                }
                                                </div>
                                            </div>
                                            ):''
                                        }
                                    </div>
                                
                                    <div className="row  mt-2">
                                        <div className="col-md-12" id="six">
                                            {
                                                footer.store.mobile ?
                                                (<Link href={`tel:`+footer.store.mobile} style={{fontSize: "1.65rem!important"}}><i className="icon-phone"></i>{footer.store.mobile}</Link>):""
                                            }
                                            <br></br>
                                            {
                                                footer.store.email_id ?
                                                (<Link href={`mailto:`+footer.store.email_id} style={{fontSize: "1.65rem!important"}}><i className="icon-envelope"></i>{footer.store.email_id}</Link>):""
                                            }
                                            <span className="widget-about-title mt-2">Payment Method</span>
                                            <figure className="footer-payments">
                                                
                                            </figure>
                                        </div>
                                    
                                    </div>
                                        
                            </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>

            
    </footer>
  )
}
