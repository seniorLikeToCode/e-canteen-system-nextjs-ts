import { motion, useCycle } from 'framer-motion'
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";
import Link from 'next/link';

export default function Nav() {

    function handlerLogout() {
        window.localStorage.clear();
    }

    return (
        <>
            <div className=" bg-primary p-3">
                {/* <HiMenuAlt1 size={32} color="#fff" onClick={handlerLogout} /> */}
                <h1 className="text-2xl text-center font-semibold text-white">Ajay Café</h1>
                <Link href={'/cart'}>
                    <HiOutlineShoppingCart className='fixed top-0 right-0 m-3' size={32} color="#fff" />
                </Link>
            </div>
        </>
    );
}