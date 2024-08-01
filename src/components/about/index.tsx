import React from 'react';

interface AboutMeCardProps {
    title: string;
    description: string;
    imageUrl?: string;
}

const AboutMeCard: React.FC<AboutMeCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform transform hover:scale-110"
                />
            )}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default AboutMeCard;
