import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {hasCookie, getCookie, setCookie} from 'cookies-next'
import { Key, useState } from "react"
import axios from 'axios'

async function kalia() {
  if(hasCookie('website')){
    
  }else{
    const response = await axios.get('https://demo.typof.com/api/store_data?url=demo.typof.com').then((res)=>{
      return res.data;
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    setCookie('website', JSON.stringify(response));
  }
}

kalia();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}