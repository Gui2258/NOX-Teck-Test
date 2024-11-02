"use client"
import React, { useState } from 'react'
import { Togle } from '@/icons/Togle'

interface Props {
    question: string,
    answer: string
}

export const FAQItem: React.FC<Props> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full'>
            <div
                className='flex justify-between p-[16px] w-full shadow-3xl cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className='font-medium text-[16px] md:text-[20px] md:font-medium text-[#0F172A]'>{question}</p>
                <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <Togle />
                </div>
            </div>

            {isOpen && (
                <div className='p-[16px] bg-gray-50'>
                    <p className='text-[14px] md:text-[16px] text-gray-600'>
                        {answer}
                    </p>
                </div>
            )}
        </div>
    )
}
