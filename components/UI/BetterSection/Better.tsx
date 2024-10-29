import { MobileScreenIcon } from '@/icons/MobileScreenIcon';
import { Button } from '@nextui-org/react';
import React from 'react';

export const Better = () => {
    return (
        <div className="mt-20 flex w-full flex-col items-center justify-center gap-4">
            <h1 className="gradientText text-xl">Get better everyday</h1>
            <p className="justify-center text-sm">
                Et pulvinar nec interdum integer id urna molestie porta nullam.
                A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat
                porttitor pharetra sed in mauris elementum sollicitudin.
            </p>

            <Button className="text-white" color="primary">
                Button text
            </Button>

            <MobileScreenIcon />
        </div>
    );
};
