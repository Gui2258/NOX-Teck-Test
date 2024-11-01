import React, { Suspense } from 'react';
import { StoriesCard } from './StoriesCard';
import { UsersResponse } from '@/components/types';

interface StoryCard {
    id: number;
    title: string;
    image: string;
    description: string;
}

const mockStories: StoryCard[] = [
    {
        id: 1,
        title: 'Story 1',
        image: 'story1.jpg',
        description: 'Description 1',
    },
    {
        id: 2,
        title: 'Story 2',
        image: 'story2.jpg',
        description: 'Description 2',
    },
    {
        id: 3,
        title: 'Story 3',
        image: 'story3.jpg',
        description: 'Description 3',
    },
    // Add more stories as needed
];

interface StoriesCardProps {
    stories?: Promise<UsersResponse>;
}

export const StoriesSlier: React.FC<StoriesCardProps> = async () => {
    // const storiesData = await stories;

    return (
        <div
            id="snapx"
            className="flex max-w-full snap-x snap-proximity gap-6 overflow-x-scroll"
        >
            <Suspense fallback={<div>Loading...</div>}>
                {mockStories.map((story) => (
                    <StoriesCard
                        key={story.id}
                        name={story.title}
                        description={story.description}
                        imgage={story.image}
                    />
                ))}
            </Suspense>
        </div>
    );
};
