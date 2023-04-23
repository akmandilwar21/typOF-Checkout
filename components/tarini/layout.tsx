import Meta from "./head";
import { env } from "process";
import Footer from "./footer";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch, useSelector } from "react-redux";
import { selectScan, setCommonData, setStoreId } from "../../store/scanSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import DefaultIndex from "./index";
import CategoryPage from "./category.blade";
import Products from "./products";
import { setCookie } from "nookies";
import { getCookie } from "cookies-next";
import Header from "./header";
import BlogsPagesWorkshops from "./BlogPagesWorkshop";
import { useRouter } from "next/router";
export default function TariniLayout({ fetchedData }: any) {
  const [data, setData] = useState([]);
  const router = useRouter();
  console.log(router);
  const [isData, setIsData] = useState(false);
  const scan = useSelector(selectScan);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_KEY,
      };
      const common = await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/common`,
          { id: "common_IND_2811" },

          { headers }
        )
        .then((res) => {
          setData(res.data.body);
          dispatch(setStoreId(res.data.body.store.store_id));
          dispatch(setCommonData(res.data.body));
          setIsData(true);
          return res.data.body;
        });
    })();
  }, []);

  if (!isData) return <p>Loading...</p>;

  return (
    <div>
      <Meta />
      <Header prop={data} />
      {(() => {
        switch (scan.page_type) {
          case "home":
            return <DefaultIndex />;
            break;
          case "category":
            return <CategoryPage fetchedData={fetchedData} />;
            //   return <h1>Category Page</h1>;
            break;
          case "product":
            return <Products fetchedData={fetchedData} />;
            break;
          case "store": {
            return <BlogsPagesWorkshops />;
          }
        }
      })()}
      <Footer prop={data} />
    </div>
  );
}
