import { User } from '@nextui-org/react';
import React from 'react';

export const TestimonialCard = () => {
    return (
        <div className="flex px-[16px] py-[24px] gap-[16px] flex-col items-center bg-white shadow-[0px 0px 6px 0px #00000012;

box-shadow: 0px 10px 15px -3px #0000001A;
]">
            <h2 className='font-bold text-[24px]'>Placerat feugiat senectus</h2>
            <p className="text-[16px] text-center text-[#0F172A]  font-normal">
                Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra
                nunc quisque congue tincidunt potenti. Tellus, enim vel
                habitasse commodo ultrices aenean ultricies
            </p>
            <div className='pt-[24px] gap-[16px] flex items-center flex-col'>

                <User
                    name=""
                    avatarProps={{
                        src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                    }}
                />
                <h4 className='font-normals text-[#0F172A] text-[18px]'>Jane Done</h4>
                <p className='font-normals text-[#0F172A] text-[16px]'>Senior Designer</p>
            </div>
        </div>
    );
};
