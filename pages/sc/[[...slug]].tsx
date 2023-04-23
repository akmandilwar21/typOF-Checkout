import axios from "axios";
import { setCategoryIdState, setPageTypeState } from "../../store/scanSlice";
import { useDispatch, useSelector, connect } from "react-redux";
import TariniLayout from "../../components/tarini/layout";
import { useEffect } from "react";
import {
  selectStoreDetail,
  setStoreDetailState,
} from "../../store/storeDetailSlice";
import { hasCookie, getCookie, setCookie } from "cookies-next";

function Category(props: any) {
  const storeDetail = useSelector(selectStoreDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const response = await axios.get("").then((res) => {
        dispatch(setPageTypeState("category"));
        // dispatch(setCategoryIdState("category_"+storeDetail.store.currency_code+"_"+res.data.store_id+"_"+res.data.category_id))
        dispatch(setStoreDetailState(res.data));
        return res.data;
      });
      if (!response) {
        return {
          notFound: true,
        };
      }
      setCookie("website", JSON.stringify(response));
    })();
  }, []);
  return (
    <>
      <TariniLayout fetchedData={props} />
    </>
  );
}
export default Category;
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

export async function getServerSideProps(context: any) {
  let param = context.params.slug;
  const headers = {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_KEY,
  };

  let categoryName = param[0].replace(/-/g, " ");
  var body = {};
  if (param.length == 1) {
    body = {
      store_id: 2811,
      category: `${categoryName}`,
    };
  }
  if (param.length == 2) {
    let subCategory = param[1].replace(/-/g, " ");
    body = {
      store_id: 2811,
      category: `${categoryName}`,
      sub_category: `${subCategory}`,
    };
    //body["sub_category"] = subCategory;
  }

  const [response1, response2] = await Promise.all([
    axios.post(
      `${process.env.NEXT_PUBLIC_URL}/category`,
      { store_id: 2811, slug: param[0] },
      { headers }
    ),
    axios.post(`${process.env.NEXT_PUBLIC_URL}/products`, body, { headers }),
  ]);

  return {
    props: { data1: response1.data, data2: response2.data },
  };
}

// export default Home;
