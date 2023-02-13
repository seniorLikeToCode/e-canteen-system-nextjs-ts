import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router';

import { useState, useEffect } from 'react';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

import { motion } from 'framer-motion'

import { ILogin } from '@/types';
import { login } from '../http'
import { loginValidate } from '../lib/validate';
import styles from '../styles/Form.module.css';
import { registerValidate } from '../lib/validate'

export default function Register() {

    // const win: any = localStorage;
    const [user, setUser] = useState<ILogin>({} as ILogin);
    const [errorMsg, setErrorMsg] = useState<string>("" as string);
    const [loading, isLoading] = useState<boolean>(false as boolean);

    useEffect(() => {
        if (window.localStorage.getItem('token')) Router.replace('/home'); // should be comment out in production
    }, [])


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const body: ILogin = {
            username: e.currentTarget.username.value,
            password: e.currentTarget.password.value,
        };


        console.log(body);

        const { message } = loginValidate(body);


        if (message) {
            console.log('login validate', message);
            setErrorMsg(message);
            return;
        }
        let a: number = Date.now();
        const res = await login(body);



        let b: number = Date.now();
        console.log(b - a);
        console.log(res);
        if (res.status === 200) {
            window.localStorage.setItem('token', res.data.token);
            console.log(window.localStorage.getItem('token'));  
            Router.replace('/home');
        } else {
            setErrorMsg("User Already Exists");
        }
    }

    const setData = (e: any) => {
        setUser((prev: ILogin) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='h-screen bg-primary overflow-hidden' >

                <motion.div
                    className='flex flex-col items-center justify-center h-3/5'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <h1 className='text-white font-medium font-poppins text-7xl mr-16'>Ajay</h1>
                    <h1 className='text-white font-medium font-poppins text-7xl ml-16' >Café</h1>
                </motion.div>

                <motion.div
                    className='w-screen h-screen rounded-t-large bg-white'
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{
                        default: {
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01],
                        },
                        scale: {
                            type: 'spring',
                            damping: 10,
                            stiffness: 200,
                        }
                    }}
                >
                    <form className='flex flex-col gap-3 p-8' onSubmit={handleSubmit} >
                        <div className={`${styles.input_group}`}>
                            <input
                                type="email"
                                name='username'
                                placeholder='Email'
                                className={styles.input_text}
                                onChange={(e) => setData(e)}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiAtSymbol size={25} />
                            </span>
                        </div>
                        <div className={`${styles.input_group}`}>
                            <input
                                type="password"
                                name='password'
                                placeholder='Password'
                                className={styles.input_text}
                                onChange={(e) => setData(e)}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiFingerPrint size={25} />
                            </span>
                        </div>

                        <button type='submit' className={styles.button}>
                            Log in
                        </button>
                        <p className='text-center text-gray-400 '>
                            Do not have an account? <Link href={'/signup'} className='text-blue-700'>Sign up</Link>
                        </p>
                    </form>

                </motion.div>
            </div >
        </>
    );
}