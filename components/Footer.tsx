import { HiHeart, HiUser, HiRectangleStack, HiPlusCircle } from 'react-icons/hi2'
import { useState } from 'react';
import Router from 'next/router'

export default function Footer() {
    const [selectMenu, setSelectMenu] = useState("text-primary");

    function MenuSelector(e: any) {
        const id = e.target.id;
        Router.replace('/favourites');
    }

    return (
        <>
            <div className="flex justify-around py-1">
                <HiRectangleStack size={30} id='explore' className={selectMenu} onClick={MenuSelector} />
                <HiHeart size={30} id='favourite' className={selectMenu} />
                <HiUser size={30} id='user' className={selectMenu} />
            </div>
        </>
    );
}


// HiStar