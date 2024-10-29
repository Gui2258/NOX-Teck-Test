import React from 'react';

interface Props {
    icon: React.ReactNode;
    title: string;
    description: string;
}
export const ToolCard: React.FC<Props> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center">
            {icon}
            <h1 className={`text-xl`}>{title}</h1>
            <p>{description}</p>
        </div>
    );
};
