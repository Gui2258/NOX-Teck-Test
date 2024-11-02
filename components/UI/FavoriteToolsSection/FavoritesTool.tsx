import React from 'react';
import { DashboardIcon } from '@/icons/DashboardIcon';
import { FinderIcon } from '@/icons/FInderIcon';
import { FlagIcon } from '@/icons/FlagIcon';
import { GearIcon } from '@/icons/GearIcon';
import { MailIcon } from '@/icons/MailIcon';
import { MapIcon } from '@/icons/MapIcon';
import { MarkDown } from '@/icons/MarkDown';
import { PigIcon } from '@/icons/PigIcon';
import { ToolCard } from './ToolCard';
import { LockIcon } from '@/icons/LockIcon';

const tools = [
    {
        icon: <MailIcon />,
        title: 'Sapien amet est',
        desc: 'Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.',
    },
    {
        icon: <MapIcon />,
        title: 'Tortor ornare',
        desc: 'Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies.',
    },
    {
        icon: <GearIcon />,
        title: 'Vel lacus',
        desc: 'Porttitor quis lectus varius quis dolor morbi massa pellentesque.',
    },
    {
        icon: <LockIcon />,
        title: 'Sed aliquam lectus',
        desc: 'A aliquam pharetra in nec vitae ultrices commodo placerat eget.',
    },
    {
        icon: <DashboardIcon />,
        title: 'Enim risus turpis',
        desc: 'Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.',
    },
    {
        icon: <MarkDown />,
        title: 'Aliquam lorem et',
        desc: 'Suspendisse ultrices morbi iaculis sit lorem. Mauris nulla odio est a mi a sed gravida.',
    },
    {
        icon: <PigIcon />,
        title: 'Sed aliquam lectus',
        desc: 'Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.',
    },
    {
        icon: <FlagIcon />,
        title: 'Cursus diam',
        desc: 'Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.',
    },
    {
        icon: <FinderIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
];

export const FavoritesTool = () => {
    return (
        <div className="flex flex-col items-center gap-[32px] px-[16px] py-[32px]">
            <div className='flex flex-col md:max-w-[900px] items-center text-center'>
                <h1 className={`gradientText font-bold text-[24px] md:text-[56px]`}>
                    Frequently asked questions
                </h1>
                <p className="text-[16px] text-[#475569] text-center md:text-[20px]">
                    In risus nec molestie at in pulvinar tellus. At integer id
                    condimentum gravida nisi nisl. Sem vitae porttitor arcu congue
                    sem erat et sit faucibus. Sollicitudin elit gravida tellus
                    mattis porttitor.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px]'>
                {tools.map((tool, index) => (
                    <ToolCard
                        icon={tool.icon}
                        title={tool.title}
                        description={tool.desc}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
