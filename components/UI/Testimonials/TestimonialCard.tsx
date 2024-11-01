import { UsersResponse } from '@/components/types';
import Image from 'next/image';
import React from 'react';

interface TestimonilaCardProps {
    data: UsersResponse
}

export const TestimonialCard: React.FC<TestimonilaCardProps> = ({ data }) => {
    return (
        <div className="shadow-[0px 0px 6px 0px #00000012] flex flex-col items-center gap-[16px] bg-white px-[16px] py-[24px] md:max-w-[758px]">
            <h2 className="text-[24px] md:text-[32px] font-bold">{data.title}</h2>
            <p className="text-center text-[16px] md:text-[24px] font-normal text-[#0F172A]">
                {data.body}
            </p>
            <div className="flex flex-col items-center gap-[16px] pt-[24px]">
                <Image
                    src={'/assets/UserTumb.png'}
                    alt="Avatar image"
                    width={64}
                    height={64}
                />
                {/* <User
                    name=""
                    avatarProps={{
                        src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                    }}
                /> */}
                <h4 className="font-normals text-[18px] text-[#0F172A]">
                    Jane Done
                </h4>
                <p className="font-normals text-[16px] text-[#0F172A]">
                    Senior Designer
                </p>
            </div>
        </div>
    );
};
