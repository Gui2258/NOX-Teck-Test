import { Facebook } from '@/icons/Social/Facebook'
import { Instagram } from '@/icons/Social/Instagram'
import { Linkedin } from '@/icons/Social/Linkedin'
import { Twiter } from '@/icons/Social/Twiter'
import { YouTube } from '@/icons/Social/YouTube'
import React from 'react'

export const Social = () => {

    const SocialIcons = [
        {
            icon: <YouTube />,
            link: 'https://www.youtube.com/'
        },
        {
            icon: <Facebook />,
            link: 'https://www.facebook.com/'
        },
        {
            icon: <Twiter />,
            link: 'https://www.twitter.com/'
        },
        {
            icon: <Instagram />,
            link: 'https://www.instagram.com/'
        },
        {
            icon: <Linkedin />,
            link: 'https://www.linkedin.com/'
        },

    ]

    return (
        <div className=' flex flex-col justify-between md:flex-row py-[24px] gap-[16px]'>
            <div className='flex gap-2 flex-col md:flex-row'>

                <div className={`font-medium text-[20px] text-black `}>
                    break<span className="text-rosf">io</span>
                </div>

                <p className='text-[#475569] text-[16px]'>@ 2023 - All rights reserved</p>
            </div>

            <div className='gap-[16px] flex'>
                {SocialIcons.map((icon, index) => (
                    <a key={index} href={icon.link} target='_blank'>
                        {icon.icon}
                    </a>
                ))}
            </div>
        </div>
    )
}
