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
        <div
            id="snapx"
            className="flex max-w-full snap-x snap-proximity overflow-x-scroll"
        >
            {mockStories.map((story) => (
                <StoriesCard
                    key={story.id}
                    name={story.title}
                    description={story.description}
                    imgage={story.image}
                />
            ))}
        </div>
    );
};
