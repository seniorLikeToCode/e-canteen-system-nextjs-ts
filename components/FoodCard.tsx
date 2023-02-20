const axios = require('axios');

import Image from 'next/image'
import { HiHeart, HiPlusCircle } from 'react-icons/hi2'
import { IProducts } from '@/types';
import { IProductData } from '@/types';
import { baseURL } from '@/http';
import { setToken, accessToken } from '@/lib/setUser';


export default function FoodCard({ category, products }: { category: string; products: IProducts }) {
    //  grid grid-cols-2 grid-flow-row gap-x-4 gap-y-4 mt-4 overflow-y-scroll

    const addToCart = async (id: string) => {
        const addItem = {
            method: 'get',
            url: `https://ecs-api-dev.onrender.com/api/v1/cart/add/${id}`,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
            },
        }

        await setToken(window.localStorage.getItem('token'));
        axios(addItem).then((res: any) => {
            // console.log(res.data);
        });

        const cartItems = {
            method: 'get',
            url: `https://ecs-api-dev.onrender.com/api/v1/cart`,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
            },
        }

        axios(cartItems).then((res: any) => {
            // console.log(res.data);
        })
    }

    const addToFav = async (id: string) => {
        const addItem = {
            method: 'get',
            url: `https://ecs-api-dev.onrender.com/api/v1/favourites/toggle/${id}`,
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4ZTU3ZjYxZTJmYjI5YTE3MDU4ZDMiLCJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTY3NjgwNTYxNSwiZXhwIjoxNjc3NDEwNDE1fQ.TlGx79dbOP1mXd1zWAMHJvyQg-4nq6QStSveADaNM0c',
            },
        }

        axios(addItem).then((res: any) => {
            console.log(res.data);
        })
    }


    return (
        <>
            <div className="scroll">
                <div className='grid grid-cols-2 gap-x-4 gap-y-4 mt-4 rm-scrollbar drop-shadow mx-1'>
                    {
                        products.data.map((product: IProductData) => {
                            if (product.category === category)
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
        </>
    );
}


