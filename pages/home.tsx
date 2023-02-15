import FoodCard from "@/components/FoodCard";
import Menu from "@/components/Menu";
import Nav from '@/components/Nav'
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="">
            <Nav />
            <div className="m-4 rm-scrollbar">
                <h1 className="text-2xl mt-3 font-semibold text-black">Available Today </h1>
                < Menu />
                <FoodCard />
            </div>
            <Footer />
        </div>
    );
}

