import Link from 'next/link';
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Cart() {


    return (
        <>
            <Link href={'/home'}>
                <HiArrowNarrowLeft size={30} className="m-3 fixed top-1 left-0" />
            </Link>

            <div className='flex flex-col justify-around items-center'>
                {/* image */}
                <div>
                    <p>items name here</p>
                    <p>item price here</p>
                </div>
                <div>
                    <p>ok</p>
                </div>
            </div>
        </>
    );
}

