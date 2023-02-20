const axios = require('axios');

import Footer from "@/components/Footer";
import type { InferGetStaticPropsType, GetServerSideProps } from 'next'
import { IProducts, IProductData } from '@/types';
import Image from 'next/image';
import { HiHeart, HiPlusCircle } from 'react-icons/hi2'


export default function Favourite(products: any) {
    // console.log(products.products.data);
    return (
        <div className="">
            {/* header */}
            {/* <HiArrowNarrowLeft size={25} className="m-4 fixed top-1 left-0" /> */}
            <h2 className="m-4 text-center font-medium text-3xl">
                Fovourites
            </h2>
            {/* main */}
            <div className="m-4">
                <div className="scroll">
                    <div className='grid grid-cols-2 gap-x-4 gap-y-4 mt-4 rm-scrollbar drop-shadow mx-1'>
                        {
                            products.products.data.map((product: any) => {
                                return (
                                    <div key={product._id} className='rounded-lg p-2 shadow-md bg-slate-50'>
                                        <div className='flex justify-between'>
                                            <HiHeart size={25} className='text-neutral-300' onClick={() => addToFav(product._id)} />
                                            <HiPlusCircle size={25} className='text-neutral-300' onClick={() => addToCart(product._id)} />
                                        </div>
                                        <div className='flex flex-col items-center mt-3'>
                                            <div className=' w-32 h-32 rounded-full overflow-hidden bg-slate-200'>
                                                <Image className='mt-3 scale-150' loader={() => product.imageUrl} src={product.imageUrl} unoptimized={true} width={120} height={120} alt={product.product_name} />
                                            </div>
                                        </div>

                                        <div className='flex justify-between mt-3 mx-1'>
                                            <h3 className='text-black font-medium'>{product.product_name}</h3>
                                            <h1>{product.rate}</h1>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='h-48'></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<{ products: any }> = async () => {
    // /api/v1/favourites
    const addItem = {
        method: 'get',
        url: `https://ecs-api-dev.onrender.com/api/v1/favourites`,
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
        },
    }

    let fav: any;
    await axios(addItem).then((res: any) => {
        fav = res.data;
    })

    const products: any = fav;
    // console.log(products);

    return {
        props: {
            products,
        }
    }
}