import React from 'react'
import { FAQItem } from './FAQItem'

export const FAQ = () => {

    const faq = [

        {
            question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
            answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
            answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
            answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
            answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
        }

    ]

    return (
        <div className="flex flex-col w-full items-center gap-[32px] px-[16px] py-[32px] bg-[#F1F5F9] md:p-[80px]">
            <div className='flex flex-col md:max-w-[900px] gap-[24px] items-center'>

                <h1 className={`gradientText font-bold text-[24px] md:text-[56px] `}>
                    Frequently asked questions
                </h1>
                <p className="text-[16px] text-[#475569] text-center md:text-[20px]">
                    In risus nec molestie at in pulvinar tellus. At integer id
                    condimentum gravida nisi nisl. Sem vitae porttitor arcu congue
                    sem erat et sit faucibus. Sollicitudin elit gravida tellus
                    mattis porttitor.
                </p>
            </div>
            <div className='gap-[24px]'></div>
            {
                faq.map((faq, index) => (<FAQItem question={faq.question} answer={faq.answer} key={index} />))
            }

        </div>
    )
}
