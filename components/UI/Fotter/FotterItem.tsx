import React from 'react'

interface Props {
    title: string
    links: string[]
}

export const FotterItem: React.FC<Props> = ({ title, links }) => {
    return (
        <div>
            <div className='py-[12px] gap-[8px]'>
                <p className='font-medium text-[16] text-[#475569]'>{title}</p>
            </div>

            {links.map((link, index) => (
                <div key={index} className='py-[12px] gap-[8px]'>
                    <p className='text-[16px] text-[#475569]'>{link}</p>
                </div>
            ))}
        </div>
    )
}
