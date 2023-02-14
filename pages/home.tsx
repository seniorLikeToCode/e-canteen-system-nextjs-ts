import PropagateLoader from "react-spinners/PropagateLoader";
import FoodCard from "@/components/FoodCard";
import { HiOutlineShoppingCart, HiMenuAlt1 } from "react-icons/hi";

export default function Home() {
    return (
        <div className="">
            {/* <PropagateLoader color='#FF9501' size='25' /> */}
            <div className="flex justify-between items-center bg-primary p-3">
                <HiMenuAlt1 size={32} color="#fff" />
                <h1 className="text-2xl font-semibold text-white"> Ajay Cafe</h1>
                <HiOutlineShoppingCart size={32} color="#fff" />
            </div>
            <div className="m-3">
                <h1 className="text-2xl mt-3 font-semibold text-black">Available Today </h1>
                < FoodCard />
            </div>
        </div>
    );
}

//bg-neutral-100