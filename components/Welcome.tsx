import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Welcome() {
    return (
        <div className='h-screen bg-white overflow-hidden' >

            <motion.div
                className='flex flex-col items-center justify-center h-2/4'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h1 className='text-primary font-medium font-poppins text-7xl mr-16'>Ajay</h1>
                <h1 className='text-primary font-medium font-poppins text-7xl ml-16' >Café</h1>
            </motion.div>

            <motion.div
                className='w-screen h-screen rounded-t-large bg-primary '
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
                <div className='h-2/4 flex flex-col justify-center items-center mx-12 gap-y-4'>
                    <div className='flex flex-col gap-y-1'>
                        <h1 className='text-black text-5xl font-bold '>Welcome</h1>
                        <span className='text-black text-lg leading-5'>Welcome to the only theek thak canteen of akg</span>
                    </div>
                    <div className='flex gap-x-6 items-center  mt-12'>
                        <div>
                            <Link href='/login' className='bg-black text-white text-xl rounded-xl px-10 py-4'>Login</Link>
                        </div>
                        <div>
                            <Link href='/signup' className='bg-white text-black text-xl rounded-xl px-7 py-4'>Sign up</Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div >
    );
}