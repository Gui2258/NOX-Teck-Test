import React from 'react';
import { FotterItem } from './FotterItem';
import { Social } from './Social';
import { Divider } from '@nextui-org/react';

export const Fotter = () => {
    const foterElements = [
        {
            title: 'Company',
            links: ['About', 'Careers', 'Partners', 'Blog'],
        },
        {
            title: 'Support',
            links: ['Help Center', 'Safety Center', 'Community Guidelines'],
        },
        {
            title: 'Legal',
            links: ['Cookies Policy', 'Privacy Policy', 'Terms of Service'],
        },
        {
            title: 'Install App',
            links: ['Android App', 'IOS App'],
        },
        {
            title: 'Legal',
            links: ['Cookies Policy', 'Privacy Policy', 'Terms of Service'],
        },
        {
            title: 'Install App',
            links: ['Android App', 'IOS App'],
        },
    ];

    return (
        <footer className="w-full px-[16px] md:px-[80px]">
            <div className="gap-[24px] py-[24px grid grid-cols-1 md:grid-cols-6">
                {foterElements.map((element, index) => (
                    <FotterItem
                        title={element.title}
                        links={element.links}
                        key={index}
                    />
                ))}
            </div>

            <Divider className="my-4" />

            <Social />
        </footer>
    );
};
