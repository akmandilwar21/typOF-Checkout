import { useState } from "react";
import useStorage from "../../pages/useStorage";
function Page(){
let [page,setPage]=useState<any>([]);
const  getItem  = '';
let message='';
function loadCaptcha(){

}
    return(
        <main className="main">
            {1&& 
                <div className="container pt-2">
                    <figure className="page-header" style={{height: '450px', backgroundImage: page.banner_url??''}}>
                    </figure>
                </div>
            }
            <div className="page-content pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-3 mb-lg-0">
                            {page.page_content}
                        </div>
                    </div>        
                    {page.form !== 0 && 
                        <div className="form-box">
                            <div className="form-tab">
                                <div className="" id="tab-content-5">
                                    <div id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                        <div className="d-flex justify-content-center mb-3">        
                                            <h3>{page.page_title}</h3>
                                        </div>
                                        {
                                            getItem ?
                                            <div className="alert alert-success alert-block">
                                                <button type="button" className="close" style={{marginTop: "8px"}} data-dismiss="alert">×</button>
                                                <strong>{message }</strong>
                                            </div>
                                            :''
                                        }
                                        <form action="/send_enquiry_mail" method="post">
                                            {page.form==2 ? <input type="hidden" name="subject" value="Bulk Order"/> : page.form==1 ? <input type="hidden" name="subject" value="Contact Us"/> : page.form==3 ? <input type="hidden" name="subject" value="Customization Request"/>:''}
                                
                                <div className="form-group">
                                   <label className="font-weight-bolder">Name<span className="text-primary">*</span></label>
                                      <input type="text" name="name" required className="form-control form-control-solid form-control-lg" placeholder="Name" value="" />
                                </div>
                                <div className="form-group">
                                  <label className="font-weight-bolder">Email<span className="text-primary">*</span></label>
                                     <input type="text" name="email" required className="form-control form-control-solid form-control-lg" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label className="font-weight-bolder">Mobile<span className="text-primary">*</span></label>
                                     <input type="number" name="phone" required className="form-control form-control-solid form-control-lg" placeholder="Mobile" />
                                </div>
                     {           page.form == 4 &&
                                <div className="form-group">
                                    <label className="font-weight-bolder">Subject<span className="text-primary">*</span></label>
                                     <input type="text" name="subject" required className="form-control form-control-solid form-control-lg" placeholder="Subject" />
                                </div>
                    }
                                <div className="form-group">
                                  <label className="font-weight-bolder">Message<span className="text-primary">*</span></label>
                                 <textarea className="form-control form-control-solid form-control-lg" id="message" required placeholder="Message" name="message"></textarea>
                                </div>
                                <div className="form-group">
                                     <div className="captcha" >
                                       <span className="float-left"> captcha_img</span>
                                       <a href="#" className="btn"  onClick={loadCaptcha}><i className="icon-refresh" ></i></a>
                                       </div>
                                    </div>
                                    <div className="form-group">
                                     <input id="captcha" type="text" required className="form-control" placeholder="Captcha *" name="captcha"/>
                                    </div>
                                <div className="">
                                    <button type="submit" className="btn btn-outline-primary-2 col-12">
                                        <span>Send</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
                                </div>
                                 <input type="hidden" name="pageTitle" value={page.page_title}/>
                                </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}
export default Page;
//condition not understand line 6
//captcha image()  68,getItem ;ine 34
