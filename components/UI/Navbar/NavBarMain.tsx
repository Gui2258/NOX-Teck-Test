"use client"
import { MenuBurger } from '@/icons/MenuBurger';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

export const NavBarMain: React.FunctionComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="relative h-20 flex w-full justify-between items-center bg-white p-4 md:px-[80px] text-[35px]">
                <div className={`font-bold text-black`}>
                    brak<span className="text-rosf">io</span>
                </div>
                <div className='md:hidden'>
                    <Button
                        variant="light"
                        isIconOnly
                        aria-label="Menu"
                        onClick={toggleMenu}
                    >
                        <MenuBurger />
                    </Button>
                </div>
                <div className='hidden md:flex gap-[16px]'>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Explore</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Solutions</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>About</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Blog</div>
                    <div className='font-medium text-[16px] px-[8px] py-[12px] leading-6'>Log in</div>
                    <Button className="text-white font-medium h-[48px] max-w-[132px] px-[16px] border-none md:text-[16px]" color="primary" variant='solid' style={{ width: 132, borderRadius: 18 }}>
                        Start now
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-50">
                    <div className='flex flex-col w-full'>
                        <div className='font-medium text-[16px] px-[24px] py-[16px] hover:bg-gray-100'>Explore</div>
                        <div className='font-medium text-[16px] px-[24px] py-[16px] hover:bg-gray-100'>Solutions</div>
                        <div className='font-medium text-[16px] px-[24px] py-[16px] hover:bg-gray-100'>About</div>
                        <div className='font-medium text-[16px] px-[24px] py-[16px] hover:bg-gray-100'>Blog</div>
                        <div className='font-medium text-[16px] px-[24px] py-[16px] hover:bg-gray-100'>Log in</div>
                        <div className='p-[24px]'>
                            <Button className="text-white font-medium h-[48px] w-full px-[16px] border-none md:text-[16px]" color="primary" variant='solid' style={{ borderRadius: 18 }}>
                                Start now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};