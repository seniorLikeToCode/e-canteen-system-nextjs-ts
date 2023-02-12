import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Loading from 'components/Loading';
import Welcome from 'components/Welcome';
import Router from 'next/router';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // if (window.localStorage.getItem('token')) Router.replace('/home'); // should be comment out in production
    }, 1500);  // this is should be 1500 but at time of code writing it is 500 
  }, []);

  return (
    <>
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
