import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Loading from 'components/Loading';
import Welcome from 'components/Welcome';
import Router from 'next/router';
import { setToken } from '@/lib/setUser';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // setIsLoading(true);
    setTimeout(() => {
      if (window.localStorage.getItem('token')) {
        setToken(window.localStorage.getItem('token'));
        Router.replace('/home');
      } 
      setIsLoading(false);
    }, 1500); 
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
