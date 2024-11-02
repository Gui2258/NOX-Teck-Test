"use client";
import React, { useEffect, useState } from 'react';
import { TestimonialsResponse } from '../../types';
import { Button } from '@nextui-org/react';
import { Card, Skeleton } from '@nextui-org/react';
import { TestimonialCard } from './TestimonialCard';
import { LeftArrow } from '@/icons/LeftArrow';
import { RightArrow } from '@/icons/RightArrow';
import { getStories } from '@/components/Utils/Fetcher';

export const TestimonialSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<TestimonialsResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getStories();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error loading testimonials:', error);
                setLoading(false);
                setError(true)
            }
        };
        fetchData();
    }, []);

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
        // Add this CSS class to the TestimonialCard wrapper div
        //<div className="relative gap-4 flex items-center w-full max-w-[600px] transition-opacity duration-300 ease-in-out">
        <div className="relative gap-4 flex items-center w-full max-w-[600px] min-h-[500px] md:min-h-[600px]">
            <Button
                isIconOnly
                onClick={handlePrevious}
                className="bg-white shadow-lg rounded-full z-10 min-w-[48px] min-h-[48px]"
            >
                <LeftArrow disabled={false} />
            </Button>
            <div className="transition-all duration-300 ease-in-out transform w-full min-h-[200px]">
                <TestimonialCard data={data[currentIndex]} />
            </div>
            <Button
                isIconOnly
                onClick={handleNext}
                className="bg-white shadow-lg rounded-full z-10 min-w-[48px] min-h-[48px]"
            >
                <RightArrow disabled />
            </Button>
        </div>
    );
};
