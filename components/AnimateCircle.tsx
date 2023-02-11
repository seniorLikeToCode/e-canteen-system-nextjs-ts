import { motion } from 'framer-motion';

export default function AnimateCircle() {
    return (
        <>
            <motion.div
                className='bg-white w-128 h-128 rounded-full'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{
                    default: {
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    },
                    scale: {
                        type: 'spring',
                        damping: 10,
                        stiffness: 200,
                        restDelta: 0.001
                    }
                }}
            />
        </>
    );
}