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
    const [slideDirection, setSlideDirection] = useState<'slide-left' | 'slide-right' | ''>('');
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
        setSlideDirection('slide-right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % data.length);
            setSlideDirection('');
        }, 300);
    };

    const handlePrevious = () => {
        setSlideDirection('slide-left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
            setSlideDirection('');
        }, 300);
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
        <div className="relative gap-4 flex items-center w-full max-w-[756px] min-h-[500px] ">
            <Button
                isIconOnly
                onClick={handlePrevious}
                className="bg-white shadow-lg rounded-full z-10 min-w-[48px] md:min-w-[48px] md:min-h-[48px] hidden sm:flex"
            >
                <LeftArrow />
            </Button>
            <div id='box' className="shadow-lg w-full min-h-[200px] overflow-hidden">
                <div className={`transition-all duration-300 ease-in-out
            ${slideDirection === 'slide-left' ? '-translate-x-full' :
                        slideDirection === 'slide-right' ? 'translate-x-full' : 'translate-x-0'}`}
                >
                    <TestimonialCard data={data[currentIndex]} />
                </div>
            </div>
            <Button
                isIconOnly
                onClick={handleNext}
                className="bg-white shadow-lg rounded-full z-10 min-w-[48px] min-h-[48px] hidden sm:flex"
            >
                <RightArrow />
            </Button>

            {/* Mobile navigation buttons */}
            <div className="absolute bottom-[-50px] pb-7 left-0 right-0 flex justify-center gap-4 sm:hidden">
                <Button
                    isIconOnly
                    onClick={handlePrevious}
                    className="bg-white shadow-lg rounded-full z-10 min-w-[40px] min-h-[40px]"
                >
                    <LeftArrow />
                </Button>
                <Button
                    isIconOnly
                    onClick={handleNext}
                    className="bg-white shadow-lg rounded-full z-10 min-w-[40px] min-h-[40px]"
                >
                    <RightArrow />
                </Button>
            </div>
        </div>
    );
};
