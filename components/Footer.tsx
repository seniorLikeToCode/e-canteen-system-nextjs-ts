import { HiHeart, HiUser, HiRectangleStack, HiPlusCircle } from 'react-icons/hi2'
import { useState } from 'react';
import Router from 'next/router'
import ActiveLink from './ActiveLink';

export default function Footer() {
    // const [selectMenu, setSelectMenu] = useState("text-primary");

    function MenuSelector(e: any) {
        const id = e.target.id;
        Router.replace('/favourites');
    }

    return (
        <>
            <div className='fixed bottom-0 left-0'>
                <div className="flex justify-around w-screen py-7 ">
                    <ActiveLink href='/home'>
                        <HiRectangleStack size={30} id='explore' className="text-inherit" onClick={MenuSelector} />
                    </ActiveLink>
                    <ActiveLink href='/favourites'>
                        <HiHeart size={30} id='favourite' className="text-inherit" />
                    </ActiveLink>
                    <ActiveLink href='/profile'>
                        <HiUser size={30} id='user' className="text-inherit" />
                    </ActiveLink >
                </div>
            </div>
        </>
    );
}


// HiStar