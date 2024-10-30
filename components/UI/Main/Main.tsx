import { Button, Input } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

export const Main: React.FunctionComponent = () => {
    return (
        <>
            <main className="px-4 py-12 flex gap-6 flex-col items-center justify-center bg-white">
                <h1 className={`font-bold gradientText text-[32px] text-center`}>
                    It’s time to take a break
                </h1>
                <p className={`text-center text-grayText tex-[16px]`}>
                    Build your meditation skills with an app that gives you all
                    you need!
                </p>

                <div className="flex items-start w-full h-[48px] gap-2">
                    <Input
                        width={'221px'}
                        type="name"
                        label={<span className='text-[16px] text-grayText'>Enter your name</span>}
                        //placeholder="Enter your name"
                        variant="bordered"
                        radius='full'
                        className='max-w-[221px]'
                    />
                    <Button className="text-white h-[48px] max-w-[132px] px-[16px]" color="primary" style={{ width: 132, borderRadius: 16 }}>
                        Start now
                    </Button>
                </div>

                <div>
                    <Image
                        src={'/assets/mainImage.png'}
                        width={361}
                        height={222}
                        alt="Customer Photo"
                    />
                </div>
            </main>
        </>
    );
};
