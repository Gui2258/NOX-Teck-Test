import React from 'react';
import { StoriesCard } from './StoriesCard';

interface StoryCard {
    id: number;
    title: string;
    image: string;
    description: string;
    avatar: string;
}

const mockStories: StoryCard[] = [
    {
        id: 1,
        title: 'Flower Decoration',
        image: 'story1.jpg',
        description: 'Melvina Spring',
        avatar: "avatar1.png",
    },
    {
        id: 2,
        title: 'Flower Decoration',
        image: 'story2.jpg',
        description: 'Melvina Spring',
        avatar: "avatar1.png",

    },
    {
        id: 3,
        title: 'Splash',
        image: 'story3.jpg',
        description: 'Rwanda Melfor',
        avatar: "avatar3.png",
    },
    {
        id: 4,
        title: 'Colorfull face',
        image: 'story5.png',
        description: 'Melvina Spring',
        avatar: "avatar1.png",

    },
    // Add more stories as needed
];



export const StoriesSlier: React.FC = async () => {
    // const storiesData = await stories;

    return (
        <div
            id="snapx"
            className="flex max-w-full snap-x snap-proximity gap-6 overflow-x-scroll "
        >
            {mockStories.map((story) => (
                <StoriesCard
                    key={story.id}
                    name={story.title}
                    description={story.description}
                    imgage={story.image}
                    id={story.id}
                    avatarProps={{
                        src: story.avatar,
                    }}
                />
            ))}
        </div>
    );
};
