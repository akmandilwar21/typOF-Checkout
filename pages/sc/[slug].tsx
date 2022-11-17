import { Key, useState } from "react"
import axios from 'axios'
import {hasCookie, getCookie, setCookie} from 'cookies-next'
import App from "next/app"
import { useRouter } from 'next/router'
import {default as GangaLayout}  from  '../../components/ganga/layout'

function Home(res:any) {
    const router = useRouter();
    const { slug } = router.query;

  const [items, setItems] = useState(res.response.menu_pages);
  const getHomeData = () => {
    axios.get('https://demo.typof.com/api/next/index').then((res)=>{
      setItems(res.data.menu_pages);
    })
  }

  const getHomes = () => {
    return items.map((item: { page_title: string ; }, index: Key | null | undefined) => {
      return (
        <li key={index}>{item.page_title}</li>
      )
    })
  }

  const vs = process.env.NEXT_PUBLIC_URL;

  switch ('ganga') {
    case 'ganga':
      return (
        <GangaLayout props={res.response} />
      )
      break;
  
    default:
      break;
  }
}

export async function getServerSideProps() {
  const response = await axios.get('https://demo.typof.com/api/next/index').then((res)=>{
    return res.data;
  })
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: { response }, // will be passed to the page component as props
  }
}

export async function getInitialProps(Context: any) {
  return App.getInitialProps(Context);
}

export default Home;