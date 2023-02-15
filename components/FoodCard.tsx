import Image from 'next/image'

export default function FoodCard() {
    //  grid grid-cols-2 grid-flow-row gap-x-4 gap-y-4 mt-4 overflow-y-scroll
    return (
        <>
            <div className="scroll">
                <div className='grid grid-cols-2 grid-flow-row gap-x-4 gap-y-4 mt-4 rm-scrollbar'>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>
                    <div className='inline-flex flex-col items-center bg-neutral-50 drop-shadow rounded-lg p-2'>
                        <div className='w-32 h-32 rounded-full bg-orange-100'></div>
                        <h3 className='text-black font-medium'>Pizza</h3>
                        <h1>50</h1>
                    </div>

                </div>
            </div>
        </>
    );
}


