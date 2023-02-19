import Image from 'next/image'
import { HiHeart, HiPlusCircle } from 'react-icons/hi2'
import { IProducts } from '@/types';
import { IProductData } from '@/types';

export default function FoodCard({ category, products }: { category: string; products: IProducts }) {
    //  grid grid-cols-2 grid-flow-row gap-x-4 gap-y-4 mt-4 overflow-y-scroll
    return (
        <>
            <div className="scroll">
                <div className='grid grid-cols-2  gap-x-4 gap-y-4 mt-4 rm-scrollbar drop-shadow mx-1'>
                    {
                        products.data.map((product: IProductData) => {
                            if (product.category === category)
                                return (
                                    <div key={product._id} className='rounded-lg p-2 shadow-md bg-slate-50'>
                                        <div className='flex justify-between'>
                                            <HiHeart size={25} className='text-neutral-300' />
                                            <HiPlusCircle size={25} className='text-neutral-300' />
                                        </div>
                                        <div className='flex flex-col items-center mt-3'>
                                            <div className='w-32 h-32 rounded-full bg-orange-100'></div>
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
            </div>
        </>
    );
}


