import React from 'react';
import { Certificate } from '../../types';
import CertificateCard from '../../components/certificate';
import { certifiReactNative, certifiDjandoTest, certificateDjangoRest, certificateLapidacoes, certificateSpringBoot, certificateSwift } from '../../assets';

const certificates: Certificate[] = [
    {
        id: 1,
        title: 'Especialista en React Native',
        issuer: 'Alura',
        date: '12 de agosto de 2023',
        description: 'Certificación otorgada por completar el curso avanzado de React Native, que demuestra habilidades profundas en el desarrollo de aplicaciones móviles usando este potente framework.',
        image: certifiReactNative,
    },
    {
        id: 2,
        title: 'Desarrollador Django (Prueba)',
        issuer: 'Alura',
        date: '16 de julio de 2023',
        description: 'Certificación en desarrollo con Django, demostrando habilidades en el uso del framework para crear aplicaciones web eficientes y seguras.',
        image: certifiDjandoTest,
    },    
    {
        id: 3,
        title: 'Desarrollador Full Stack',
        issuer: 'Alura',
        date: '10 de diciembre de 2022',
        description: 'Certificación integral en desarrollo full stack, enfocada en la creación de aplicaciones robustas con habilidades avanzadas en múltiples tecnologías.',
        image: '', 
    },
    {
        id: 4,
        title: 'Desarrollador Django Rest Framework',
        issuer: 'Alura',
        date: '23 de julio de 2023',
        description: 'Certificación especializada en Django Rest Framework, demostrando competencias en la construcción de APIs eficientes y seguras.',
        image: certificateDjangoRest, 
    },
    {
        id: 5,
        title: 'Desarrollador Swift Básico',
        issuer: 'Alura',
        date: '28 de julio de 2024',
        description: 'Certificación que acredita conocimientos fundamentales en el lenguaje Swift, ideal para el desarrollo de aplicaciones iOS.',
        image: certificateSwift, 
    },
    {
        id: 6,
        title: 'Desarrollador Spring Boot',
        issuer: 'Alura',
        date: '03 de julio de 2024',
        description: 'Certificación en Spring Boot, destacando habilidades en el desarrollo de aplicaciones Java basadas en este popular framework.',
        image: certificateSpringBoot, 
    },
    {
        id: 7,
        title: 'Desarrollador Django Lapidaciones',
        issuer: 'Alura',
        date: '13 de julio de 2023',
        description: 'Certificación en Django enfocada en el área de lapidaciones, con competencias avanzadas en este marco de trabajo.',
        image: certificateLapidacoes, 
    },
];

const CertificatesScreen: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Mis Certificados</h1>
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
