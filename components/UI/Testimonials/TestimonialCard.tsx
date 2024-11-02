import { TestimonialsResponse } from '@/components/types';
import React from 'react';
import { TestimonalsUser } from './TestimonalsUser';

interface TestimonilaCardProps {
    data: TestimonialsResponse
}


export const TestimonialCard: React.FC<TestimonilaCardProps> = ({ data }) => {
    return (
        <div className="shadow-[0px 0px 6px 0px #00000012] flex flex-col items-center gap-[16px] bg-white px-[16px] py-[24px] md:max-w-[758px] relative">
            <div className="flex flex-col items-center min-h-[200px]">
                <h2 className="text-[24px] md:text-[32px] font-bold">{data.title}</h2>
                <p className="text-center text-[16px] md:text-[24px] font-normal text-[#0F172A]">
                    {data.body}
                </p>
            </div>
            <TestimonalsUser id={data.userId} />
        </div>
    );
};
