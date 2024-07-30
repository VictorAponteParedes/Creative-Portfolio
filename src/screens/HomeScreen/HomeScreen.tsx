import React from 'react';
import { programacionImagen } from '../../assets';
import { ListCardProjects } from '../../components/listCardProjecs';
import { testimonials } from '../../helpers/testimonials';
import { projects } from '../../helpers/projects';
import { ContacMe } from '../ContactScreen/ContactScreen';
import { Experiencie } from '../Experiencie';



export const HomeScreen: React.FC = () => {
    return (
        <div className="p-4">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white p-12 text-center rounded-2xl" style={{ backgroundImage: `url(${programacionImagen})` }}>
                <h1 className="text-4xl font-bold mb-4">Hola, soy Victor Aponte</h1>
                <p className="text-xl mb-8">Desarrollador Full Stack</p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">Ver Proyectos</button>
            </section>

            {/* Proyectos Destacados */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
                <ListCardProjects projects={projects} />
            </section>

            {/* Habilidades y Experiencia */}
            <Experiencie/>

            
            {/* Testimonios */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white shadow-md p-6 rounded-lg flex items-start">
                            <img src={testimonial.image} alt={`Testimonial ${index + 1}`} className="w-24 h-24 object-cover rounded-full mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                                <p className="text-gray-600">{testimonial.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* Contacto */}
            <ContacMe/>
        </div>
    );
};
