import { motion } from 'framer-motion';
import AnimateCircle from './AnimateCircle'


export default function Loading() {
    return (
        <>
            <div className='fixed -top-72 -right-96'>
                <AnimateCircle />
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    default: {
                        duration: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    },
                    scale: {
                        type: 'spring',
                        damping: 7,
                        stiffness: 200,
                        restDelta: 0.001
                    }
                }}
            >
                <h1 className='text-accent font-medium font-poppins text-7xl mr-16'>Ajay</h1>
                <h1 className='text-accent font-medium font-poppins text-7xl ml-16'>Café</h1>
            </motion.div>
            <div className='fixed -bottom-72 -left-64'>
                <AnimateCircle />
            </div>
        </>
    )
}