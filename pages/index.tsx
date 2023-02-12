import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Loading from 'components/Loading';
import Welcome from 'components/Welcome';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);  // this is should be 1500 but at time of code writing it is 500 
  }, []);

  return (
    <>

      <Head>
        <title>E-Canteen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        isLoading ?
          <div className='h-screen bg-primary flex flex-col items-center justify-center'>
            <Loading />
          </div>
          :
          <main >
            <Welcome />
          </main>
      }
    </>
  )
}
