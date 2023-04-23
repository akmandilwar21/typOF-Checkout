import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectScan } from "../../store/scanSlice";
import SpecialCategory from "./modules/specialCategory";
import ShortIntro from "./modules/short_intro";
import Banner from "./modules/banner";
import Category from "./modules/category";
import Fpwh from "./modules/fpwh";
import FullImageBlock from "./modules/full_image_block";
import DealOfDay from "./modules/deal_of_day";
// import YoutubeVideo from "./modules/youtubeVideo"
import Testinomial from "./modules/testimonial";
import Newsletter from "./modules/newsletter";
import Content_With_Image from "./modules/content_with_image";
import ShopByCategory from "./modules/shopByCategory";
import Meta from "./head";

export default function DefaultIndex(props: {}) {
  const [data, setData] = useState<any>(null);
  const [isData, setIsData] = useState(false);
  const scan = useSelector(selectScan);
  useEffect(() => {
    (async () => {
      const headers = {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_KEY,
      };
      const common = await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/home`,
          { store_id: 2811 },
          { headers }
        )
        .then((res) => {
          setData(res.data.body);
          setIsData(true);
        });
    })();
  }, []);

  if (!isData) return <p>Loading</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <div>
      <Meta />
      {data.modules.length
        ? data.modules.map((value: any, index: any) => {
            switch (value.module) {
              case "special_category":
                return <SpecialCategory props={value} />;
                // {not done}
                break;
              case "banner":
                return <Banner props={value} />;
                break;
              case "short_intro":
                return <ShortIntro props={value} />;
                break;
              case "category":
                return <Category props={value} />;
                break;
              case "shop_by_category":
                return <ShopByCategory props={value} />;
                break;
              case "fpwh":
                return <Fpwh props={value} />;
                break;
              case "full_image_block":
                return <FullImageBlock props={value} />;
                break;
              // case "content_with_image":
              //     return (<ContentWithImage1 props={value} />)
              //     break;
              // case "deal_of_day":
              //     return (<DealOfTheDay props={value} />)
              //     break;
              case "testimonial":
                return <Testinomial props={value} />;
                break;
              // case "youtube_video":
              //     return (<YoutubeVideo props={value} />)
              //     break;
              case "newsletter":
                return <Newsletter props={value} />;
                break;

              default:
                break;
            }
          })
        : ""}
    </div>
  );
}
