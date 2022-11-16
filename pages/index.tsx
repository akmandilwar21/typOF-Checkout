import { Key, useState } from "react"
import axios from 'axios'
import {hasCookie, getCookie, setCookie} from 'cookies-next'
import Meta from  '../components/ganga/head'
import App from "next/app"
import Header from  '../components/ganga/header'
import Footer from "../components/ganga/footer";

function Home(res:any) {
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
  return (
    <div>
      <Meta />
      <Header prop={res.response}/>
      <Footer prop={res.response}/>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get(process.env.NEXT_PUBLIC_API+'/common').then((res)=>{
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