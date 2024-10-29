import { roboto } from '@/app/layout';
import { Button, Input } from '@nextui-org/react';
import React from 'react';

export const Main: React.FunctionComponent = () => {
    return (
        <>
            <main className="flex flex-col items-center justify-center bg-white">
                <h1
                    className={`bg-gradient-to-r from-rosf to-fuchsia-900 bg-clip-text text-3xl font-bold text-transparent ${roboto.className}`}
                >
                    It’s time to take a break
                </h1>
                <p className="text-center text-black">
                    Build your meditation skills with an app that gives you all
                    you need!
                </p>

                <div className="flex w-full gap-4">
                    <Input
                        type="name"
                        label="Enter your name"
                        //placeholder="Enter your name"
                        variant="bordered"
                    />
                    <Button className="bg-rosf" color="primary">
                        Button
                    </Button>
                </div>
            </main>
        </>
    );
};
