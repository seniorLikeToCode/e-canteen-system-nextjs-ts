import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from 'next/link';
import Footer from "@/components/Footer";

export default function Profile() {
    const handleLogout = () => {
        window.localStorage.clear();
    }

    return (
        <>
            <h1 className="text-3xl text-center font-medium m-2"> Profile </h1>
            {/* images section */}
            <div className="flex flex-col justify-center items-center m-10 gap-y-3">
                <div className="h-40 w-40 bg-slate-500 rounded-full"></div>
                <p className="text-xl">Abhishek Gupta</p>
            </div>
            <button className="px-4 py-2 bg-black text-white m-4" onClick={handleLogout}>logout</button>
            <Footer />
        </>
    );
}