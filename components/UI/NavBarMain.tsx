import { MenuBurger } from '@/icons/MenuBurger';
import { Button } from '@nextui-org/react';
import React from 'react';



export const NavBarMain: React.FunctionComponent = () => {
    return <>
        <nav className='bg-white p-5 flex justify-between'>
            <div className='h-20 text-black'>
                brakio
            </div>
            <Button isIconOnly aria-label="Like">
                <MenuBurger />
            </Button>
        </nav>
    </>;


};