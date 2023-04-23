import axios from "axios";
import { selectScan, setPageTypeState } from "../store/scanSlice";
import { useDispatch, useSelector } from "react-redux";
import DefaultIndex from "../components/tarini";
import { useEffect } from "react";
import { selectStoreDetail } from "../store/storeDetailSlice";
import DefaultLayout from "../components/tarini/layout";

function Home() {
  const storeDetail = useSelector(selectStoreDetail);
  const dispatch = useDispatch();
  const scanDetail = useSelector(selectScan);
  useEffect(() => {
    dispatch(setPageTypeState("home"));
  }, []);
  switch (storeDetail.store.folder_name) {
    //case 'ganga'
    //   return <GangaLayout/>
    // break;
    case "tarini":
      return <DefaultLayout />;
      break;
    default:
      break;
  }
}
export default Home;
