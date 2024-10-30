import { Button } from '@nextui-org/react';
import React from 'react';
import { MobilePng } from './MobilePng';

export const Better = () => {
    return (
        <div className="flex w-full gap-[32px] flex-col py-[48px] px-[16px] items-center justify-center ">
            <h1 className="gradientText text-[24px] font-bold">Get better everyday</h1>
            <p className="text-center text-grayText text-[16] ">
                Et pulvinar nec interdum integer id urna molestie porta nullam.
                A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                porttitor pharetra sed in mauris elementum sollicitudin.
            </p>

            <Button className="text-white w-[144px] h-[48px]" color="primary" radius='full'>
                <span className='font-medium'>
                    Button text
                </span>
            </Button>


            <MobilePng />
            {/* <MobileScreenIcon /> */}
        </div>
    );
};
