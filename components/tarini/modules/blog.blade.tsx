import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

function Blog(props: any) {
  let [blogs, setBlog] = useState([]);
  function dateFormat(date: any) {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      months[date.getMonth() + 1] +
      " " +
      date.getDate() +
      "," +
      date.getFullYear()
    );
  }
  return (
    <>
      <div
        className="page-header text-center"
        style={{ backgroundImage: "portal/images/page-header-bg.jpg" }}
      >
        <div className="container">
          <h1 className="page-title"></h1>
        </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
        </div>
      </nav>
      <main>
        <div className="page-content">
          <div className="container">
            <div className="entry-container" data-layout="fitRows">
              {blogs.map((blog: any) => {
                return (
                  <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                    <article className="entry entry-mask">
                      <figure className="entry-media">
                        <Link href={"/store/blog/" + blog.slug}>
                          <img src={blog.coverimageurl} alt={blog.title} />
                        </Link>
                      </figure>
                      <div className="entry-body">
                        <div className="entry-meta">
                          {dateFormat(blog.created_at)}
                        </div>
                        <h2 className="entry-title">
                          <a href="/store/blog/{{$blog->slug}}">{blog.title}</a>
                        </h2>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
            <div className="mb-3"></div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Blog;
export async function getServerSideProps() {
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": "6fcIyoO6Ql5xUnafYZOtsauUPIXjY5xkazDVllyS",
  };

  const common = await axios
    .post("https://webapi.typof.co/v1/blog", { store_id: "1", blog_id: "4" })
    .then((res) => {
      return res.data.body;
    });

  return {
    props: { common },
  };
}

//Blog api
