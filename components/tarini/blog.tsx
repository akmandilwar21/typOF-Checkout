import { useState } from "react";
import Image from "next/image";

function Blog(props: any) {
  let [allBlogs, setAllBlogs] = useState([]);
  let [bloging, setBloging] = useState("");
  return (
    <>
      <div className="blog-posts">
        <div className="container">
          <div className="heading mb-3" style={{ textAlign: "center" }}>
            <h2 className="title title-lg">From Our Blog</h2>
          </div>
          <div
            className="owl-carousel owl-simple carousel-with-shadow"
            data-toggle="owl"
            data-owl-options='{
                                        "nav": false, 
                                        "dots": true,
                                        "items": 3,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":1
                                            },
                                            "600": {
                                                "items":2
                                            },
                                            "992": {
                                                "items":3
                                            }
                                        }
                                    }'
          >
            {allBlogs.map((blog: any) => {
              return (
                <article className="entry entry-display">
                  <figure className="entry-media">
                    <a href={"/store/blog/" + blog.slug}>
                      <img src={bloging ? "blogimg" : ""} alt="image desc" />
                    </a>
                  </figure>
                  <div className="entry-body text-center">
                    <div className="entry-meta">
                      <a href="#">
                        {'{date("M d, Y",strtotime($blog->created_at))}'}
                      </a>
                    </div>
                    <h3 className="entry-title">
                      <a href={"/store/blog/" + blog.slug}>{blog.title}</a>
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
          {allBlogs && allBlogs.length > 3 ? (
            <div className="more-container text-center mt-2">
              <a href="blog.html" className="btn btn-outline-darker btn-more">
                <span>View more articles</span>
                <i className="icon-long-arrow-right"></i>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="mb-5"></div>
    </>
  );
}
export default Blog;
