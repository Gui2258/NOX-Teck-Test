import { Togle } from '@/icons/Togle'
import React from 'react'

interface Props {
    question: string,
    answer?: string
}

export const FAQItem: React.FC<Props> = ({ question }) => {
    return (
        <div className='flex justify-around p-[16px] w-full shadow-3xl '>
            <div className=' gap-[16px]'></div>

            <p className='font-medium text-[16px] text-[#0F172A]'>{question}</p>
            <Togle />
        </div>
    )
}
// shadow-[0px_0px_6px_0px_rgba(0, 0, 0, 0.07)]