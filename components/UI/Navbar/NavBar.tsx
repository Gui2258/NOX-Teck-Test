"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle } from '@nextui-org/react';
import React from 'react';
import { NavBarMenuItems } from './NavBarMenuItems';

interface INavBarProps {
    props?: string
}

export const NavBarWMenu: React.FunctionComponent<INavBarProps> = () => {


    const [isMenuOpen, setIsMenuOpen] = React.useState(false);



    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className='flex items-baseline' >
            <NavbarContent>
                <NavbarBrand>
                    {/* <AcmeLogo /> */}
                    <p className="font-bold text-inherit">breakio</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
            <NavBarMenuItems />

        </Navbar>
    );
};