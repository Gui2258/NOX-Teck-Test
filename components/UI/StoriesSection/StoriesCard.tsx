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
}
export const StoriesCard: React.FunctionComponent<Props> = ({
    description,
    imgage,
    name,
}) => {
    return (
        <div>
            <Image
                src={`/assets/${imgage}`}
                alt="Imagen del usuario  "
                width={350}
                height={750}
            />
            <div>
                <User
                    name={name}
                    description={description}
                    avatarProps={{
                        src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                        //src: avatarProps.src,
                    }}
                />
            </div>
        </div>
    );
};
