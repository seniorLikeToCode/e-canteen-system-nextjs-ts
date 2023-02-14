import { motion } from 'framer-motion';
import SnacksLogo from './asset/hamburger.png';
import DrinksLogo from './asset/kawaii-coffee.png'
import MealLogo from './asset/paella.png'
import Image from 'next/image';
export default function Menu() {
    return (
        <>
            <div className="flex gap-x-3 gap-y-1 mt-4">
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex items-center  py-2 px-4 bg-slate-50 rounded-xl  gap-x-1" >

                    <Image className="w-8" src={SnacksLogo} alt='hamburger' />
                    <span className="text-lg">Snacks</span>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex items-center py-2 px-4 bg-slate-50 rounded-xl  gap-x-1">


                    <Image className="w-8" src={MealLogo} alt='mealLogo' />
                    <span className="text-lg">Meals</span>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex items-center py-2 px-4 bg-slate-50 rounded-xl ">

                    <Image className="w-8" src={DrinksLogo} alt='DrinkLogo' />
                    <span className="text-lg">Drinks</span>
                </motion.div>
            </div>
        </>
    );
}