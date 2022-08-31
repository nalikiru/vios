import '../styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Nav from './components/Nav'
import Side from './components/Side'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR]  = useState(true);
   
  useEffect(() => {
    setIsSSR(false);
  },[]); 
 
  if(isSSR) return null;

  return(
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
     <div className=" bg-[#F8F8F8] xl:w-[1360px]  m-auto overflow-hidden h-[100vh]">
     <Nav />
      <div className='flex gap-10 md:gap-25'>
        <div className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Side />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto "></div>
      
     <Component {...pageProps} />
     </div>
     </div>
  </GoogleOAuthProvider>
  )
}

export default MyApp
