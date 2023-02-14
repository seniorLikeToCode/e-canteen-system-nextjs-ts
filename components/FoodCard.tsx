import Image from 'next/image'
import img from './pic.jpg'
export default function FoodCard() {
    return (
        <>
            <div className="bg-black inline-flex flex-col justify-around gap-y-3 items-center p-3 rounded-xl">
                {/* <Image /> */}
                <div className="">
                    {/* <h1 className=" text-lg p-5">Image</h1> */}
                    <Image className='rounded-xl w-32 h-32 z-10' src={img} alt="dummy data" />
                </div>
                <button className="bg-white px-12 py-3 rounded-xl text-xl font-medium">Add</button>
            </div>
        </>
    );
}


