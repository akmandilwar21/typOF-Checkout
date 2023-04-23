import { useState } from "react"

function blog(){
    let [blog,setBlog]=useState<any>({});
    let url='';

    function dateFormat(date:any){
        let months=['Jan','Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct', 'Nov','Dec'];
        return (months[date.getMonth()+1]+" "+date.getDate()+","+date.getFullYear())
    }
    return(
        <>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{blog.title}</li>
                    </ol>
                </div>
            </nav>
            <main>
                <div className="page-content">
                    <figure className="page-header" style={{height: '450px', backgroundImage: blog.coverimageurl }}></figure>
                        <div className="container">
                            <article className="entry single-entry entry-fullwidth">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="entry-body">
                                            <div className="entry-meta">
                                                {dateFormat(blog.created_at)}
                                            </div>
                                            <h2 className="entry-title entry-title-big">
                                                {blog.title}
                                            </h2>
                                            <div className="entry-content editor-content">
                                                {blog.description}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1 order-lg-first mb-2 mb-lg-0">
                                        <div className="sticky-content">
                                            <div className="social-icons social-icons-colored social-icons-vertical">
                                                <span className="social-label">SHARE:</span>
                                                <a href={"https://api.whatsapp.com/send?text="+blog.title + url} className="social-icon social-whatsapp" title="Whatsapp" target="_blank"><i className="icon-whatsapp"></i></a>
                                                <a href={"https://www.facebook.com/sharer/sharer.php?u="+url} className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                                <a href={"https://twitter.com/share?url={{$url}}&text="+blog.title} className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                                <a href={"https://www.linkedin.com/cws/share?url="+url} className="social-icon social-linkedin" title="Linkedin" target="_blank"><i className="icon-linkedin"></i></a>
                                            </div>
                                        </div>
                            </div>
                                </div>
                            </article>
                        </div>
                </div>
            </main>
        </>
        )
}
export default blog;
//url line 44,5