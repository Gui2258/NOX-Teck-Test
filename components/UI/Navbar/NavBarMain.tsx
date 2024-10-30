import { roboto } from '@/app/layout';
import { MenuBurger } from '@/icons/MenuBurger';
import { Button } from '@nextui-org/react';
import React from 'react';

export const NavBarMain: React.FunctionComponent = () => {
    return (
        <>
            <nav className=" h-20 flex w-full justify-between items-center bg-white p-4 text-[35px]">
                <div className={` text-black ${roboto.className}`}>
                    brak<span className="text-rosf">io</span>
                </div>
                <Button variant="light" isIconOnly aria-label="Like">
                    <MenuBurger />
                </Button>
            </nav>
        </>
    );
};
