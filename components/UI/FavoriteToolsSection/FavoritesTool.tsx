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

const tools = [
    {
        icon: <FinderIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <DashboardIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <FlagIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <GearIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <MailIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <MapIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <MarkDown />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
    {
        icon: <PigIcon />,
        title: 'Facilisi vel malesuada',
        desc: 'Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integersit.',
    },
];

export const FavoritesTool = () => {
    return (
        <div className="flex flex-col items-center gap-[32px] px-[16px] py-[32px]">
            <div className='flex flex-col md:max-w-[900px] items-center text-center'>
                <h1 className={`gradientText font-bold text-[24px] md:text-[56px]`}>
                    Your Favorite Tools
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
