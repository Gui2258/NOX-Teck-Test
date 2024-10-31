import React from 'react'
import { FotterItem } from './FotterItem'
import { Social } from './Social'

export const Fotter = () => {


    const foterElements = [
        {
            title: 'Company',
            links: ['About', 'Careers', 'Partners', 'Blog']
        },
        {
            title: 'Support',
            links: ['Help Center', 'Safety Center', 'Community Guidelines']
        },
        {
            title: 'Legal',
            links: ['Cookies Policy', 'Privacy Policy', 'Terms of Service']
        },
        {
            title: 'Install App',
            links: ['Android App', 'IOS App']
        },
    ]

    return (
        <footer className='px-[16px] w-full'>
            <div className='py-[24px] gap-[24px]'>
                {foterElements.map((element, index) => (
                    <FotterItem title={element.title} links={element.links} key={index} />
                ))}
            </div>

            <Social />
        </footer >
    )
}
