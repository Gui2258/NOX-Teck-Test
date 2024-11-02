import { MenuBurger } from '@/icons/MenuBurger';
import { Button } from '@nextui-org/react';
import React from 'react';

export const NavBarMain: React.FunctionComponent = () => {
    return (
        <>
            <nav className=" h-20 flex w-full justify-between items-center bg-white p-4 md:px-[80px] text-[35px]">
                <div className={`font-bold text-black `}>
                    brak<span className="text-rosf">io</span>
                </div>
                <div className='md:hidden'>

                    <Button variant="light" isIconOnly aria-label="Like">
                        <MenuBurger />
                    </Button>
                </div>
                <div className='hidden md:flex gap-[16px]'>

                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Explore</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Solutions</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>About</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Blog</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Log in</div>
                    <Button className="text-white font-medium h-[48px] max-w-[132px] px-[16px] rounded-2xl  md:text-[16px]" color="primary" style={{ width: 132, borderRadius: 18 }}>
                        Start now
                    </Button>
                </div>
            </nav>
        </>
    );
};
