import { useContext, Key, useState, useEffect } from "react"
import axios from 'axios'
import {hasCookie, getCookie, setCookie} from 'cookies-next'
import App from "next/app"
import {default as GangaLayout}  from  '../components/ganga/layout'
import { env } from "process"


function Home(props: any) {
  const w = getCookie('website')??"{}"
  const website = JSON.parse(w.toString())

  const common_scan = "common_"+(website.currency_code??"IND")+"_"+website.store_id
  const index_scan = "index_"+(website.currency_code??"IND")+"_"+website.store_id
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': '6fcIyoO6Ql5xUnafYZOtsauUPIXjY5xkazDVllyS'
  }

  const [data, setData] = useState({ws:""})
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': common_scan}, {headers}).then((res)=>{
        setData(res.data.body)
        console.log(common_scan)
        setLoading(true)
      })
    })();

    return () => {

    }
  }, [])

  console.log(data.ws)
  switch ('ganga') {
    case 'ganga':
      return (
        <div>
          asdfad
        </div>
        // <GangaLayout props={data} />
      )
      break;
  
    default:
      break;
  }
}

// export async function getServerSideProps() {

//   const headers = {
//     'Content-Type': 'application/json',
//     'x-api-key': env.NEXT_PUBLIC_AWS_KEY
//   }

//   const common = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': common_scan}, {headers}).then((res)=>{
//     return res.data.body;
//   })
  
//   const index = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': index_scan}, {headers}).then((res)=>{
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

export default Home;