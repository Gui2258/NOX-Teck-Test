import React from 'react';

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}
export const ToolCard: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className="flex gap-[16px] p-[16px] flex-col items-center">
            {icon}
            <h1 className={`text-[24px] font-bold`}>{title}</h1>
            <p className='text-[18px] text-center px-[10px] text-[#475569]'>{description}</p>
        </div>
    );
};
