import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';



export default function App({ Component, pageProps }: AppProps) {

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true);
  }, [])

  return (
    <>
    { loading 
      ?
      (  
      <Layout>
        <Component {...pageProps} />
      </Layout>
      )
      : 
      <LoadingScreen />
      }
    </>
  )
}
