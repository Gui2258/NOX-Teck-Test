import { User } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

interface Props {
    name: string;
    description: string;
    imgage: string;
    avatarProps?: {
        src: string;
    };
    id: number
}
export const StoriesCard: React.FunctionComponent<Props> = ({
    description,
    imgage,
    name,

    avatarProps,

}) => {
    return (
        <div id='Cards' className="w-[320px] flex  flex-col shrink-0  shadow-[0px_0px_4px_0px_rgba(0,0,0,0.07),0px_4px_16px_rgba(0,0,0,0.1)] mb-2 ">
            <Image
                src={`/assets/${imgage}`}
                alt="Imagen del usuario  "
                width={320}
                height={220}
                className='rounded-t-xl'
            />
            <div className='flex shrink-0 h-[80px] p-3'>
                <User
                    name={name}
                    description={`by ${description}`}
                    avatarProps={{
                        src: `/assets/${avatarProps?.src}`,
                        //src: avatarProps.src,
                    }}
                />
            </div>
        </div>
    );
};




