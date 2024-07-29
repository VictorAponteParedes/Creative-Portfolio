// screens/AboutMeScreen.tsx
import React from 'react';
import AboutMeCard from '../../components/about';
import { perfilImagen } from '../../assets';

const aboutMeData = [
    {
        title: 'Who I Am',
        description: 'I am a passionate developer with experience in web and mobile applications.',
        imageUrl: perfilImagen,
    },
    {
        title: 'My Skills',
        description: 'I have expertise in React, TypeScript, and Tailwind CSS, among other technologies.',
        imageUrl: 'path/to/your/image.jpg',
    },
    {
        title: 'My Journey',
        description: 'I started as a junior developer and have worked my way up to a senior position.',
        imageUrl: 'path/to/your/image.jpg',
    },
];

export const AboutScreen: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">About Me</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {aboutMeData.map((item, index) => (
                    <AboutMeCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};
