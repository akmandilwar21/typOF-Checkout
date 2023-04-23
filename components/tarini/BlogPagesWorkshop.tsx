import axios from "axios";
import { useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Pages from "./Pages";
import Blogs from "./Blogs";
//import Workshops from "./workshops";
import { useSelector } from "react-redux";
import { selectScan } from "../../store/scanSlice";

export default function BlogsPagesWorkshops() {
  const scan = useSelector(selectScan);
  const commonData = scan.common_data;
  const storeId = commonData.store.store_id;
  const [data, setData] = useState<any>(null);
  const [isData, setIsData] = useState(false);
  const { query } = useRouter();

  const slugName = query.slug[0];

  let apiUrl: string;
  switch (slugName) {
    // case "workshops":
    //     apiUrl = `${process.env.NEXT_PUBLIC_URL}/blog`;
    //     break;
    case "blog":
      apiUrl = `${process.env.NEXT_PUBLIC_URL}/blog`;
      break;
    default:
      apiUrl = `${process.env.NEXT_PUBLIC_URL}/page`;
      break;
  }

  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_KEY,
      };
      const common = await axios
        .post(
          apiUrl,
          {
            store_id: storeId,
            page_slug: slugName,
          },
          { headers }
        )
        .then((res) => {
          setData(res.data.body);
          setIsData(true);
        });
    })();
  }, [slugName]);

  if (!isData) return <p>Loading..</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      {(() => {
        switch (slugName) {
          case "blog":
            return <Blogs props={data} commonData={commonData} />;
            break;

          default:
            return <Pages props={data} />;
            break;
        }
      })()}
    </>
  );
}
