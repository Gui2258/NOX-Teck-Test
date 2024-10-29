import { roboto } from '@/app/layout';
import React from 'react';

export const FavoritesTool = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className={`gradientText mt-10 text-xl ${roboto.className}`}>
                Your Favorite Tools
            </h1>
            <p className="text-sm">
                In risus nec molestie at in pulvinar tellus. At integer id
                condimentum gravida nisi nisl. Sem vitae porttitor arcu congue
                sem erat et sit faucibus. Sollicitudin elit gravida tellus
                mattis porttitor.
            </p>
        </div>
    );
};
