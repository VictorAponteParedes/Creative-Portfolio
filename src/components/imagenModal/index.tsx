import React from 'react';

interface ImageModalProps {
    imageUrl: string;
    isOpen: boolean;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, isOpen, onClose }) => {
    if (!isOpen) return null;

    // Manejar clic en el fondo del modal


    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose}>
            <div className="relative bg-white p-8 rounded-lg max-w-screen-lg mx-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                >
                    &times;
                </button>
                <img
                    src={imageUrl}
                    alt="Large view"
                    className="w-full h-auto max-h-screen object-contain"
                />
            </div>
        </div>
    );
};

export default ImageModal;
