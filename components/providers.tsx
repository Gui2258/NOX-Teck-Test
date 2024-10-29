import { NextUIProvider } from '@nextui-org/react';
import React from 'react';

interface IprovidersProps {
    children: React.ReactNode
}

export const providers: React.FunctionComponent<IprovidersProps> = ({ children }) => {
    return <>
        <NextUIProvider>
            {children}
        </NextUIProvider>
    </>;
};
