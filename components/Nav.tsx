import { motion, useCycle } from 'framer-motion'
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";

export default function Nav() {
    return (
        <>
            <div className="flex justify-between items-center bg-primary p-3">
                <HiMenuAlt1 size={32} color="#fff" />
                <h1 className="text-2xl font-semibold text-white">Ajay Café</h1>
                <HiOutlineShoppingCart size={32} color="#fff" />
            </div>
        </>
    );
}