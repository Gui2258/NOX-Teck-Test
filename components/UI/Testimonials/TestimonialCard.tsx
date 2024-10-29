import { User } from '@nextui-org/react';
import React from 'react';

export const TestimonialCard = () => {
    return (
        <div className="flex h-40 w-11/12 flex-col items-center bg-white">
            <h2>Placerat feugiat senectus</h2>
            <p className="text-sm">
                Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra
                nunc quisque congue tincidunt potenti. Tellus, enim vel
                habitasse commodo ultrices aenean ultricies
            </p>
            <User
                name=""
                avatarProps={{
                    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                }}
            />
            <h4>Jane Done</h4>
            <p>Senior Designer</p>
        </div>
    );
};
