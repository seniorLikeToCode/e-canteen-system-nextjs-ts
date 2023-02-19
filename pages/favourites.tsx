import Footer from "@/components/Footer";
import FoodCard from "@/components/FoodCard";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Favourite() {
    return (
        <div className="">
            {/* header */}
            {/* <HiArrowNarrowLeft size={25} className="m-4 fixed top-1 left-0" /> */}
            <h2 className="m-4 text-center font-medium text-3xl">
                Fovourites
            </h2>
            {/* main */}
            <div className="m-4">
                {/* <FoodCard category={ } products={ } /> */}
            </div>
            <Footer />
        </div>
    );
}