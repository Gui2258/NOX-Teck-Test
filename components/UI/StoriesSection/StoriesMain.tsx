import { roboto } from '@/app/layout';
import React from 'react';
import { StoriesSlier } from './StoriesSlier';

export const StoriesMain = () => {
    return (
        <div className="w-full items-center justify-center gap-4">
            <h1 className={`gradientText text-xl ${roboto.className}`}>
                Stories from our users
            </h1>
            <p className="text-sm">
                Et pulvinar nec interdum integer id urna molestie porta nullam.
                A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
            <StoriesSlier />
        </div>
    );
};
