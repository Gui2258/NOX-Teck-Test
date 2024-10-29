import React from 'react';
import { StoriesCard } from './StoriesCard';

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

export const StoriesSlier = () => {
    return (
        <div className="h-screen w-full overflow-hidden">
            <div className="h-full overflow-y-auto scroll-smooth p-4">
                {mockStories.map((story) => (
                    <StoriesCard
                        name={story.title}
                        description={story.description}
                        imgage={story.image}
                        key={story.id}
                    />
                ))}
            </div>
        </div>
    );
};
