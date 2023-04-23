import { useEffect, useState } from "react";
import axios from "axios";

import { getSelectedId } from "../../allFunctions";
import { useRouter } from "next/router";
import Link from "next/link";
import { selectStoreDetail } from "../../store/storeDetailSlice";
import { useSelector } from "react-redux";
import { selectScan } from "../../store/scanSlice";

export default function Blog({ id }: any) {
  const [data, setData] = useState<any>(null);
  const [isData, setIsData] = useState(false);
  const selectedId = getSelectedId();
  const scan = useSelector(selectScan);
  const { query } = useRouter();
  const slugName = query.slug;

  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_KEY,
      };
      const common = await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/blog`,
          {
            store_id: scan.common_data.body.store.store_id,
            blog_id: selectedId,
          },
          { headers }
        )
        .then((res) => {
          setData(res.data.body);
          setIsData(true);
          return res.data.body;
        });
    })();
  }, []);
  if (!isData) return <p>Loading...</p>;
  if (!data) return <p>No profile datas</p>;

  let imgUrl = data.coverimageurl;
  const date = new Date(data.created_at.$date);
  //let options={'month': String, 'day':Number, 'year':Number}
  let options = { month: "short", day: "numeric", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <div className="flex " aria-label="breadcrumb">
        <ol className="flex items-center list-reset">
          <li className="text-xs gray-500 hover:text-blue-500">
            <a href="/">Home</a>
          </li>
          <li>
            <span className="mx-2 text-xs text-gray-500">/</span>
          </li>
          <li className="text-xs text-gray-500 active">{data.title}</li>
        </ol>
        <hr className="mt-1" />
      </div>
      <div className="page-content">
        <figure
          className="page-header"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${imgUrl} )`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: "250px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></figure>
        <div className="container p-2">
          <div className="flex flex-col md:flex-row">
            <div className="col-span-11 md:col-span-11">
              <div className="entry-body">
                <div className="text-xs text-gray-400">{formattedDate}</div>
                <h1 className="mt-2 font-semibold">{data.title}</h1>
                <div
                  className="mx-2 "
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></div>
              </div>
            </div>
            <div className="col-span-1 mb-2 md:order-first md:col-span-1 lg:mb-0">
              <div className="flex mt-2 md:mt-0 md:flex-col">
                <p className="mr-2 text-xs">Share: </p>
                <div className="flex items-center gap-2 md:flex-col social-icons social-icons-sm md:mt-3">
                  <Link
                    href="https://api.whatsapp.com/send?text={{$text}} {{$url}}"
                    className="social-icon social-whatsapp"
                    title="Whatsapp"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 md:w-5 md-h-5"
                      style={{ color: "#128c7e" }}
                    >
                      <path
                        fill="currentColor"
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.facebook.com/sharer/sharer.php?u={{$url}}"
                    className="social-icon social-facebook"
                    title="Facebook"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-4 h-4 md:w-5 md-h-5"
                      style={{ color: "#1877f2" }}
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://twitter.com/share?url={{$url}}&text={{$text}}"
                    className="social-icon social-twitter"
                    title="Twitter"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 md:w-5 md-h-5"
                      style={{ color: "#1da1f2" }}
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/cws/share?url={{$url}}"
                    className="social-icon social-linkedin"
                    title="Linkedin"
                    target="_blank"
                    rel="noopener"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-4 h-4 md:w-5 md-h-5"
                      style={{ color: "#0077b5" }}
                    >
                      <path
                        fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
