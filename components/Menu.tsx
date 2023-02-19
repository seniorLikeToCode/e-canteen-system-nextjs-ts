import { motion } from 'framer-motion';
import SnacksLogo from './asset/hamburger.png';
import DrinksLogo from './asset/kawaii-coffee.png'
import MealLogo from './asset/paella.png'
import Image from 'next/image';
export default function Menu({ setCategory }) {
    return (
        <>
            <div className="flex gap-x-3 gap-y-1 my-4">
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >

                    <div id='snack' onClick={() => setCategory('snack')} className="inline-flex items-center drop-shadow py-2 px-4 bg-slate-50 rounded-xl  gap-x-1">
                    <Image className="w-8" src={SnacksLogo} alt='hamburger' />
                        <span className="text-lg">Snacks</span>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >

                    <div id='meal' onClick={() => setCategory('meal')} className="inline-flex items-center drop-shadow py-2 px-4 bg-slate-50 rounded-xl  gap-x-1">
                    <Image className="w-8" src={MealLogo} alt='mealLogo' />
                    <span className="text-lg">Meals</span>
                    </div>
                </motion.div>
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >

                    <div id='beverage' onClick={() => setCategory('beverage')} className="inline-flex items-center drop-shadow py-2 px-4 bg-slate-50 rounded-xl  gap-x-1">
                    <Image className="w-8" src={DrinksLogo} alt='DrinkLogo' />
                        <span className="text-lg">Drinks</span>
                    </div>
                </motion.div>
            </div>
        </>
    );
}