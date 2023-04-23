import axios from "axios";
import { setCategoryIdState, setPageTypeState } from "../../store/scanSlice";
import { useDispatch, useSelector, connect } from "react-redux";
import router, { useRouter } from "next/router";
import TariniLayout from "../../components/tarini/layout";
import { useEffect } from "react";
import {
  selectStoreDetail,
  setStoreDetailState,
} from "../../store/storeDetailSlice";
import { hasCookie, getCookie, setCookie } from "cookies-next";
import Products from "../../components/tarini/products";

function Store(props: any) {
  const storeDetail = useSelector(selectStoreDetail);
  const dispatch = useDispatch();
  dispatch(setPageTypeState("store"));

  switch (storeDetail.store.folder_name) {
    //case 'ganga'
    //   return <GangaLayout/>
    // break;
    case "tarini":
      return <TariniLayout />;
      break;
    default:
      break;
  }
}
export default Store;

// export async function getServerSideProps(context: any) {
//   const { params } = context;

//   const headers = {
//     "Content-Type": "application/json",
//     "x-api-key": process.env.NEXT_PUBLIC_KEY,
//   };

//   const common = await axios
//     .post(
//       `${process.env.NEXT_PUBLIC_URL}/product`,
//       {
//         store_id: 2811,
//         slug: params.slug,
//       },
//       { headers }
//     )
//     .then((res) => {
//       return res.data.body;
//     });

//   return {
//     props: { common },
//   };
//   return { props: { params: params } };
// }
// import { Key, useState } from "react"
// import axios from 'axios'
// import {hasCookie, getCookie, setCookie} from 'cookies-next'
// import App from "next/app"
// import {default as GangaLayout}  from  '../../components/ganga/layout'
// import { env } from "process"
// import * as cookie from 'cookie';

// function Home(res:any) {
//   switch ('ganga') {
//     case 'ganga':
//       return (
//         <GangaLayout props={res.common} />
//       )
//       break;

//     default:
//       break;
//   }
// }

// export async function getServerSideProps(context:any) {

//   const headers = {
//     'Content-Type': 'application/json',
//     'x-api-key': env.NEXT_PUBLIC_AWS_KEY
//   }

//   const common = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': 'common_IND_1'}, {headers})
//   .then((res)=>{
//     return res.data.body;
//   })

//   const index = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': 'index_IND_1'}, {headers}).then((res)=>{
//     return res.data.body;
//   })

//   if (!common) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: { common, index }
//   }
// }

// export default Home;
