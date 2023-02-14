import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router';
import { motion } from 'framer-motion';

import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiPhone } from 'react-icons/hi';
import { useState, useEffect } from 'react';

import { register } from '../http'
import styles from '../styles/Form.module.css';
import { registerValidate } from '../lib/validate';
import { IRegister } from '@/types';



export default function Signup() {
    const [user, setUser] = useState<IRegister>({} as IRegister);
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [loading, isLoading] = useState<boolean>(false);

    useEffect(() => {
        if (window.localStorage.getItem('token')) Router.replace('/home'); // should be comment out in production
    }, [])


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const body: IRegister = {
            full_name: e.currentTarget.full_name.value,
            email: e.currentTarget.email.value,
            password: e.currentTarget.password.value,
            contact: e.currentTarget.contact.value,
            confirmPassword: e.currentTarget.confirmPassword.value
        };

        const { message } = registerValidate(body);


        if (message) {
            console.log('Register Validation: ', message);
            setErrorMsg(message);
            return;
        }
        console.log(body);
        const res = await register(body);

        console.log(res);
        if (res.status === 201) {
            window.localStorage.setItem('token', res.data.token);
            console.log(window.localStorage.getItem('token'));  
            Router.replace('/home');
        } else {
            setErrorMsg("User Already Exists");
        }
    }

    const setData = (e: any) => {
        setUser((prev: IRegister) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        })
    }

    //

    return (
        <>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div className='h-screen bg-primary overflow-hidden' >
                <motion.div
                    className='flex flex-col items-center justify-center h-1/3'
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
                    <form className='flex flex-col gap-3 p-8' onSubmit={handleSubmit}>
                        <div className={`${styles.input_group}`}>
                            <input
                                type="text"
                                name='full_name'
                                placeholder='Full Name'
                                className={styles.input_text}
                                onChange={(e) => setData(e)}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiOutlineUser size={25} />
                            </span>
                        </div>
                        <div className={`${styles.input_group}`}>
                            <input
                                type="email"
                                name='email'
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
                                type="number"
                                name='contact'
                                placeholder='Contact'
                                className={styles.input_text}
                                onChange={(e) => setData(e)}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiPhone size={25} />
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
                        <div className={`${styles.input_group}`}>
                            <input
                                type="password"
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                className={styles.input_text}
                                onChange={(e) => setData(e)}
                            />
                            <span className='icon flex items-center px-4'>
                                <HiFingerPrint size={25} />
                            </span>
                        </div>
                        {/* <div className='sh-btn'> */}
                        <button type='submit' className={styles.button}>
                            Sign Up
                        </button>
                        {/* </div> */}
                        <p className='text-center text-gray-400 '>
                            Have an account? <Link href={'/login'} className='text-blue-700'>log in</Link>
                        </p>
                    </form>

                </motion.div>
            </div >
        </>
    );

}

// hiAtSymbol, hiFingerPrint, hiOutlineUser