import FoodCard from "@/components/FoodCard";
import Menu from "@/components/Menu";
import Nav from '@/components/Nav'
import Footer from '@/components/Footer';
import { IProducts } from "@/types";
import { useEffect, useState } from 'react'
import { allProduct } from '../http';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'






export default function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
    const [category, setCategory] = useState('meal');
    console.log(products);
    useEffect(() => {
        console.log(category);
    }, [category])

    return (
        <div className="">
            <Nav />
            <div className="m-4 rm-scrollbar">
                <h1 className="text-2xl mt-3 font-semibold text-black">Available Today </h1>
                <Menu setCategory={setCategory} />
                <FoodCard category={category} products={products} />
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps: GetStaticProps<{ products: IProducts }> = async () => {
    const res: any = await allProduct();
    const products: IProducts = res.data;

    return {
        props: {
            products,
        },
    }
}