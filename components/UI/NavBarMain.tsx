import { Button } from '@nextui-org/react';
import React from 'react';



export const NavBarMain: React.FunctionComponent = () => {
    return <>
        <nav className='bg-white p-5'>
            <div className='h-20 text-black'>
                brakio
            </div>
            <Button isIconOnly color="danger" aria-label="Like">
                <HeartIcon />
            </Button>
        </nav>
    </>;
};