const axios = require('axios');

import Link from 'next/link';
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useState } from 'react';
import { HiPlus, HiMinus } from "react-icons/hi";
import { GetServerSideProps } from 'next';
import Image from 'next/image';


const ItemQaunity = ({ initQ }: { initQ: number }) => {
    const [quantity, setQuantity] = useState(initQ);

    return (
        <div className='flex flex-col justify-around items-center'>
            <HiMinus size={20} className="mb-2" onClick={() => {
                if (quantity === 0) return;
                setQuantity(quantity - 1)
            }} />
            <p className='text-2xl'>{quantity}</p>
            <HiPlus size={20} className="mt-2" onClick={() => setQuantity(quantity + 1)} />
        </div>
    );
}

export default function Cart(products: any) {
    // console.log(products);

    return (
        <>
            <div className='m-4'>
                <Link href={'/home'}>
                    <HiArrowNarrowLeft size={30} className="m-3 fixed top-1 left-0" />
                </Link>
                <h2 className="m-4 text-center font-medium text-3xl"> Cart </h2>

                <div className='flex flex-col gap-y-5 scroll '>
                    {
                        products.products.map((product: any) => {
                            return (
                                <div key={product.product_id._id} className='flex justify-between items-center bg-neutral-100   p-3 rounded-md shadow-md'>
                                    {/* image */}
                                    <div className='flex items-center gap-x-2'>
                                        <div className='h-20 w-20 bg-slate-300 rounded-full overflow-hidden'>
                                            <Image className='mt-3 scale-150' loader={() => product.product_id.imageUrl} src={product.product_id.imageUrl} unoptimized={true} width={100} height={100} alt={product.product_id.product_name} />
                                        </div>
                                        <div>
                                            <p className='text-xl'>{product.product_id.product_name} </p>
                                            <p>{product.product_id.rate} </p>
                                        </div>
                                    </div>
                                    <div>
                                        <ItemQaunity initQ={product.qty} />
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                {/* <button className='fixed bottom-0 left-0 bg-black text-2xl px-4 py-2 text-white w-screen'> here </button> */}

            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps<{ products: any }> = async () => {
    const config = {
        method: 'get',
        url: 'https://ecs-api-dev.onrender.com/api/v1/cart',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
        },
    }

    let data: any;
    await axios(config).then((res: any) => {
        data = res.data;
    })
    const products: any = data.data;

    return {
        props: {
            products,
        }
    }
}