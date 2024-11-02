
import { Button, Input } from '@nextui-org/react';
import React from 'react';
import { ImageResponsive } from './ImageResponsive';

export const Main: React.FunctionComponent = () => {
    return (
        <>
            <main className="px-4 py-12 flex gap-6 flex-col items-center justify-center bg-white md:p-[80px] md:gap-[80px] ">
                <div className='gap-6 flex flex-col'>

                    <h1 className={`font-bold gradientText text-[32px] text-center md:text-[72px]`}>
                        It’s time to take a break
                    </h1>
                    <p className={`text-center text-grayText tex-[16px] md:text-[20px]`}>
                        Build your meditation skills with an app that gives you all
                        you need!
                    </p>

                    <div className="flex items-center w-full h-[48px] gap-2">
                        <Input
                            width={'221px'}
                            type="name"
                            label={<span className='text-[16px] md:text-[24px] text-grayText'>Enter your name</span>}
                            //placeholder="Enter your name"
                            variant="bordered"
                            radius='full'
                            className='max-w-[221px] md:max-w-[476px] ml-[20px] md:py-[13px] md:px-[24px]'
                        />
                        <Button className="text-white h-[48px] md:h-[64px] max-w-[132px] md:w-[208px] px-[16px] md:px-[24px] md:p-[20px] md:text-[24px] md:hidden" color="primary" style={{ width: 132, borderRadius: 16 }}>
                            Start now
                        </Button>
                        <Button className="text-white h-[48px] md:h-[64px] max-w-[208px] md:w-[208px] px-[16px] md:px-[24px] md:p-[20px] md:text-[24px] hidden md:flex" color="primary" style={{ width: 208, borderRadius: 26 }}>
                            Start now
                        </Button>
                    </div>
                </div>
                <ImageResponsive />
            </main>
        </>
    );
};
