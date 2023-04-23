import "../styles/globals.css";
import Meta from "../components/tarini/head";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { setCookie } from "nookies";
import { getCookie } from "cookies-next";
import {
  setCommonIdState,
  setIndexIdState,
  setCategoryIdState,
  selectScan,
} from "../store/scanSlice";
import {
  selectStoreDetail,
  setStoreDetailState,
} from "../store/storeDetailSlice";
import { useDispatch, useSelector } from "react-redux";
//import { hasCookie, getCookie, setCookie } from "cookies-next";
import { Key, useState, useEffect } from "react";
import axios from "axios";
import Script from "next/script";

// async function kalia() {
//   if(hasCookie('website')){

//   }else{
//     let domain="tarini.shop"
//     const response = await axios.get(`https://demo.typof.com/api/store_data?url=${domain}`).then((res)=>{
//       return res.data;
//     })
//     if (!response) {
//       return {
//         notFound: true,
//       }
//     }
//     setCookie('website', JSON.stringify(response));
//   }
// }

// kalia();

function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState(null);
  const [isData, setIsData] = useState(false);
  const scan = useSelector(selectScan);
  const dispatch = useDispatch();
  const storeDetail = useSelector(selectStoreDetail);

  useEffect(() => {
    (async () => {
      const response = await axios
        .get("https://build.typof.com/api/store_data?url=tarini.shop")
        .then((res) => {
          dispatch(
            setCommonIdState(
              "common_" + res.data.currency_code + "_" + res.data.store_id
            )
          );
          // dispatch(setIndexIdState("index_"+res.data.currency_code+"_"+res.data.store_id))
          dispatch(
            setCategoryIdState(
              "category_" +
                storeDetail.store.currency_code +
                "_" +
                storeDetail.store.store_id
            )
          );
          dispatch(setStoreDetailState(res.data));
          //dispatch(setCommonDataState(res.data))

          return res.data;
        });
      if (!response) {
        return {
          notFound: true,
        };
      }
      setCookie(null, "website", JSON.stringify(response));
    })();
  }, []);
  function generateRandomNumber() {
    const min = 100000; // minimum 6-digit number
    const max = 999999; // maximum 6-digit number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
  if (!getCookie("customer_id")) {
    const guest_id = generateRandomNumber();
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 25200;
    now.setTime(expireTime);
    setCookie(null, "guest_id", `${guest_id}`, {
      maxAge: 60 * 60 * 7, // 7 hours in seconds
      path: "/",
    });
  }
  return (
    <>
      <Meta />
      <script src="https://demo-4.typof.in/portal/js/typof.js" defer></script>
      <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js" defer></script>
      <Script
        src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"
        defer
      ></Script>
      <script
        src="https://kit.fontawesome.com/52a1dbf9f7.js"
        crossOrigin="anonymous"
        defer
      ></script>
      <Component {...pageProps} />
    </>
  );
}
export default wrapper.withRedux(App);
