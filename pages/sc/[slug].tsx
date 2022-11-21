import { Key, useState } from "react"
import axios from 'axios'
import {hasCookie, getCookie, setCookie} from 'cookies-next'
import App from "next/app"
import {default as GangaLayout}  from  '../../components/ganga/layout'
import { env } from "process"

function Home(res:any) {
  console.log(res)
  switch ('ganga') {
    case 'ganga':
      return (
        <GangaLayout props={res.common} />
      )
      break;
  
    default:
      break;
  }
}

export async function getServerSideProps() {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': env.NEXT_PUBLIC_AWS_KEY
  }

  const common = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': 'common_IND_1'}, {headers}).then((res)=>{
    return res.data.body;
  })
  
  const index = await axios.post("https://o19q8mwegc.execute-api.ap-south-1.amazonaws.com/Typof_Stage/common", {'scan_id': 'index_IND_1'}, {headers}).then((res)=>{
    return res.data.body;
  })

  if (!common) {
    return {
      notFound: true,
    }
  }
  return {
    props: { common, index }
  }
}

export default Home;