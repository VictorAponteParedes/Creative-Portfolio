// screens/AboutMeScreen.tsx
import React from 'react';
import AboutMeCard from '../../components/about';
import { perfilImagen, skillsPrograming, myCareer, personalSkills, familyHappies } from '../../assets';



export const AboutScreen: React.FC = () => {
    
    const aboutMeData = [
        {
            title: 'Quién Soy',
            description: 'Soy un desarrollador apasionado con experiencia en aplicaciones web y móviles. Mi amor por la programación va más allá del trabajo; es mi hobby y mi pasión. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.',
            imageUrl: perfilImagen,
        },
        {
            title: 'Mis Habilidades',
            description: 'Poseo experiencia en React, TypeScript y Tailwind CSS, entre otras tecnologías. Me esfuerzo por mantenerme actualizado y dominar las herramientas más efectivas para desarrollar soluciones innovadoras.',
            imageUrl: skillsPrograming,
        },
        {
            title: 'Mi Trayectoria',
            description: 'Comencé mi carrera como desarrollador junior y he trabajado y estoy trabajando arduamente para llegar a una posición senior. Disfruto del desafío constante y de la oportunidad de crecer en el campo de la tecnología.',
            imageUrl: myCareer,
        },
        {
            title: 'Más Sobre Mí',
            description: 'Además de mi pasión por la programación, disfruto de la buena música, hacer nuevas amistades, explorar nuevos lugares y hacer compras. Valoro mucho el tiempo con mi familia, que es una fuente de gran alegría y apoyo en mi vida.',
            imageUrl: familyHappies,
        },
        {
            title: 'Habilidades Personales',
            description: 'Además de mis habilidades técnicas, comunicación efectiva y trabajo en equipo. Estas habilidades me han permitido colaborar exitosamente en proyectos complejos y liderar equipos hacia el éxito.',
            imageUrl: personalSkills,
        },
        
    ];
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Sobre Mí</h1>
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
