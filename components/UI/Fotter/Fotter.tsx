import React from 'react';
import { FotterItem } from './FotterItem';
import { Social } from './Social';
import { Divider } from '@nextui-org/react';

export const Fotter = () => {
    const foterElements = [
        {
            title: 'Categories',
            links: ['User Interface', 'User Experiencie', 'Digital Media', 'Lifestyle', "Programming", "Animation"],
        },
        {
            title: 'Proudct',
            links: ['Pricing', 'Overview', 'Browse', "Accessibility", "Five", "Changelog"],
        },
        {
            title: 'Solutions',
            links: ['Brainstorming', 'Ideation', 'Wirefarming', "Research", "Design", "Concept"],
        },
        {
            title: 'Resources',
            links: ['Help Center', 'Blog', 'Tutorials', "FAQs", "Community", "Events"],
        },
        {
            title: 'Support',
            links: ['Contact Us', 'Developers', 'Documentation', "Integrations", "Reports", "Webinar"],
        },
        {
            title: 'Company',
            links: ['About', 'Press', "Events", "Careers", "Customers", "Partners"],
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

            <Divider className="mt-4" />

            <Social />
        </footer>
    );
};
