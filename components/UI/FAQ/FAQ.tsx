import React from 'react'
import { FAQItem } from './FAQItem'

export const FAQ = () => {

    const faq = [

        {
            question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?"
        },
        {
            question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?"
        },
        {
            question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?"
        },
        {
            question: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?"
        },
        {
            question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?"
        },
    ]

    return (
        <div className="flex flex-col items-center gap-[32px] px-[16px] py-[32px] bg-[#F1F5F9]">
            <h1 className={`gradientText font-bold text-[24px] `}>
                Your Favorite Tools
            </h1>
            <p className="text-[16px] text-[#475569] text-center">
                In risus nec molestie at in pulvinar tellus. At integer id
                condimentum gravida nisi nisl. Sem vitae porttitor arcu congue
                sem erat et sit faucibus. Sollicitudin elit gravida tellus
                mattis porttitor.
            </p>
            <div className='gap-[24px]'></div>
            {
                faq.map((faq, index) => (<FAQItem question={faq.question} key={index} />))
            }

        </div>
    )
}
