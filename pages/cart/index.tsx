import Link from 'next/link';
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Cart() {
    return (
        <>
            <Link href={'/home'}>
                <HiArrowNarrowLeft size={30} className="m-3 fixed top-1 left-0" />
            </Link>
        </>
    );
}