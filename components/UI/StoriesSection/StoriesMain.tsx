import React from 'react';
import { StoriesSlier } from './StoriesSlier';

export const StoriesMain = () => {
    return (
        <div className=" flex flex-col w-full justify-center px-[16px] py-[48px] gap-8">

            <h1 className={`gradientText text-center text-[24px] font-bold `}>
                Stories from our users
            </h1>
            <p className="text-justify ">
                Et pulvinar nec interdum integer id urna molestie porta nullam.
                A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
            <StoriesSlier />
        </div>
    );
};
