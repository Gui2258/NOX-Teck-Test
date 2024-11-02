import { Button } from '@nextui-org/react';
import React from 'react';
import { MobilePng } from './MobilePng';
import { DeskPng } from './DeskPng';

export const Better = () => {
    return (
        <>
            <div className="flex w-full gap-[32px] flex-col py-[48px] px-[16px] items-center justify-center md:max-w-[900px]">
                <h1 className="gradientText text-[24px] font-bold md:text-[56px]">Get better everyday</h1>
                <p className="text-center text-grayText text-[16] md:text-[20px] leading-9">
                    Et pulvinar nec interdum integer id urna molestie porta nullam.
                    A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                    porttitor pharetra sed in mauris elementum sollicitudin.
                </p>





                <Button className="text-white w-[144px] h-[48px] md:w-[208] md:h-[64px] px-[16px] md:px-[24px] md:p-[20px] md:text-[24px] md:hidden" color="primary" style={{ width: 132, borderRadius: 16 }}>
                    <span className='font-medium md:font-bold md:text-[24px] md:py-[20px] md:px-[24px]'>
                        Start Now
                    </span>
                </Button>
                <Button className="text-white w-[144px] h-[48px] md:w-[208] md:h-[64px] px-[16px] md:px-[24px] md:p-[20px] md:text-[24px] hidden md:flex" color="primary" style={{ width: 208, borderRadius: 26 }}>
                    <span className='font-medium md:font-bold md:text-[24px] md:py-[20px] md:px-[24px]'>
                        Start Now
                    </span>
                </Button>



                {/* <MobileScreenIcon /> */}
            </div>
            <div className='hidden md:block'>
                <DeskPng />
            </div>
            <div className='md:hidden'>
                <MobilePng />
            </div>
        </>
    );
};
