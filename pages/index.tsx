import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Loading from 'components/Loading';
import Welcome from 'components/Welcome';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);;
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>

      <Head>
        <title>E-Canteen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
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
