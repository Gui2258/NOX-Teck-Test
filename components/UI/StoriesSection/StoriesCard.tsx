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
    id

}) => {
    return (
        <div id='Cards' className="w-[320px] flex flex-col shrink-0  ">
            <Image
                src={`/assets/${imgage}`}
                alt="Imagen del usuario  "
                width={320}
                height={220}
            />
            <div className='flex  shrink-0 h-[80px]'>
                <User
                    name={name}
                    description={description}
                    avatarProps={{
                        src: `https://i.pravatar.cc/?img=${id + 5}`,
                        //src: avatarProps.src,
                    }}
                />
            </div>
        </div>
    );
};
