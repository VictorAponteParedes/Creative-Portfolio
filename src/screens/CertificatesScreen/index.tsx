import React from 'react';
import { Certificate } from '../../types';
import CertificateCard from '../../components/certificate';
import { certifiReactNative, certifiDjandoTest } from '../../assets';

const certificates: Certificate[] = [
    {
        id: 1,
        title: 'React Native Specialist',
        issuer: 'Alura',
        date: '2023-01-15',
        description: 'Certificate for completing the React Native course.',
        image: certifiReactNative,
    },
    {
        id: 2,
        title: 'Django Developer',
        issuer: 'Alura',
        date: '2022-12-10',
        description: 'Certificate for completing the Full Stack Development course.',
        image: certifiDjandoTest,
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        issuer: 'Alura',
        date: '2022-12-10',
        description: 'Certificate for completing the Full Stack Development course.',
        image: '', // Asegúrate de tener una imagen válida o deja esto vacío si no hay imagen
    },
];

const CertificatesScreen = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Certificados</h1>
            <ul className="space-y-4">
                {certificates.map((certificate) => (
                    <li key={certificate.id}>
                        <CertificateCard certificate={certificate} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CertificatesScreen;
