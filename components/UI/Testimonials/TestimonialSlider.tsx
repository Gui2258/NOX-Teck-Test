"use client";
import React, { useEffect, useState } from 'react';
import { UsersResponse } from '../../types';
import { Button } from '@nextui-org/react';
import { Card, Skeleton } from '@nextui-org/react';
import { TestimonialCard } from './TestimonialCard';
import { LeftArrow } from '@/icons/LeftArrow';
import { RightArrow } from '@/icons/RightArrow';

interface TestimonialSliderProps {
    testimonials: Promise<UsersResponse[]>;
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<UsersResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await testimonials;
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error loading testimonials:', error);
                setLoading(false);
                setError(true)
            }
        };
        fetchData();
    }, [testimonials]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    if (loading) {
        return (
            <Card className="w-full max-w-[600px] p-4 space-y-5" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>
            </Card>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Error loading testimonials</h1>
                <Button
                    color="primary"
                    variant="shadow"
                    onClick={() => window.location.reload()}
                >
                    Reload
                </Button>
            </div>
        );
    }

    return (
        <div className="relative gap-4 flex items-center  w-full max-w-[600px]">
            <Button
                isIconOnly
                onClick={handlePrevious}
                className="bg-white shadow-lg rounded-full"
            >
                <LeftArrow disabled={false} />
            </Button>
            <TestimonialCard data={data[currentIndex]} />
            {/* <Card className="p-6">
                {data.length > 0 && (
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">{data[currentIndex].title}</h3>
                        <p className="text-gray-600">{data[currentIndex].body}</p>
                        <p className="text-sm text-gray-500">User ID: {data[currentIndex].userId}</p>
                    </div>
                )}
            </Card> */}

            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">

            </div>
            <Button

                isIconOnly
                onClick={handleNext}
                className="bg-white shadow-lg rounded-full"
            >
                <RightArrow disabled />
            </Button>
        </div>
    );
};
