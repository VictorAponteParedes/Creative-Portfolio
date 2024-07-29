import React, { useState } from 'react';
import { Certificate } from '../../types';

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
    const { title, issuer, date, description, image } = certificate;

    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageLoaded(false);
        setImageError(true);
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg flex">
            {image && !imageError ? (
                <img
                    src={image}
                    alt={title}
                    className={`w-32 h-32 object-cover rounded-md mr-4 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />
            ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-md mr-4">
                    <span className={`text-${imageError ? 'red' : 'gray'}-500`}>
                        {imageError ? 'Image not available' : 'Sin imagen'}
                    </span>
                </div>
            )}
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-gray-600">{issuer}</p>
                <p className="text-gray-500">{date}</p>
                <p className="text-gray-700 mt-2">{description}</p>
            </div>
        </div>
    );
};

export default CertificateCard;