import React from 'react';
import { StoriesSlier } from './StoriesSlier';

export const StoriesMain = () => {

    return (
        <div className="flex w-full flex-col justify-center items-center gap-8 px-[16px] py-[48px]">
            <div className='md:max-w-[900px]'>

                <h1 className={`gradientText text-center text-[24px] md:text-[56px] font-bold`}>
                    Stories from our users
                </h1>
                <p className="text-justify md:text-[20px] text-[#475569] leading-5">
                    Et pulvinar nec interdum integer id urna molestie porta nullam.
                    A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                    porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <StoriesSlier />
        </div>
    );
};
