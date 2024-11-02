import { TestimonialsResponse } from '@/components/types';
import { User } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

interface TestimonilaCardProps {
    data: TestimonialsResponse
}

const users = [
    {
        id: 1,
        name: 'John Doe',
        image: '/assets/UserTumb.png',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nunc nisl eget ultricies aliquam.',
    },
    {
        id: 2,
        name: 'Jane Smith',
        image: '/assets/UserTumb.png',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nunc nisl eget ultricies aliquam.',
    },
    {
        id: 3,
        name: 'John Doe',
        image: '/assets/UserTumb.png',
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget"
    }]
export const TestimonialCard: React.FC<TestimonilaCardProps> = ({ data }) => {

    https://jsonplaceholder.typicode.com/users
    return (
        // Add this CSS class to the TestimonialCard wrapper div
        <div className="shadow-[0px 0px 6px 0px #00000012] flex flex-col items-center gap-[16px] bg-white px-[16px] py-[24px] md:max-w-[758px] ">
            <h2 className="text-[24px] md:text-[32px] font-bold">{data.title}</h2>
            <p className="text-center text-[16px] md:text-[24px] font-normal text-[#0F172A]">
                {data.body}
            </p>
            <div className="flex flex-col items-center gap-[16px] pt-[24px]">
                <Image
                    src={'https://i.pravatar.cc/64'}
                    alt="Avatar image"
                    width={64}
                    height={64}
                />
                <User
                    name={data.title}

                />
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
