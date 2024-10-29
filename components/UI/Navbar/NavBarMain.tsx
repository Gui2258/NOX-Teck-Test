import { roboto } from '@/app/layout';
import { MenuBurger } from '@/icons/MenuBurger';
import { Button } from '@nextui-org/react';
import React from 'react';

export const NavBarMain: React.FunctionComponent = () => {
    return (
        <>
            <nav className="font flex w-full justify-between bg-white p-5 text-3xl">
                <div className={`h-20 text-black ${roboto.className}`}>
                    brak<span className="text-rosf">io</span>
                </div>
                <Button variant="light" isIconOnly aria-label="Like">
                    <MenuBurger />
                </Button>
            </nav>
        </>
    );
};
