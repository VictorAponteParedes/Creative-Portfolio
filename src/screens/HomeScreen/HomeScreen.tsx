// HomeScreen.tsx
import React from 'react';
import { cerkImagen, tnaImagen, pipImagen, abcImagen } from '../../assets';

export const HomeScreen: React.FC = () => {
    return (
        <div className="p-4">
            {/* Hero Section */}
            <section className="bg-blue-500 text-white p-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Hola, soy Victor Aponte</h1>
                <p className="text-xl mb-8">Desarrollador Full Stack con experiencia en React y Node.js.</p>
                <button className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100">Ver Proyectos</button>
            </section>

            {/* Proyectos Destacados */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ejemplo de Tarjeta de Proyecto */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <img src={tnaImagen} alt="Proyecto 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">App Nueva Amaricana</h3>
                        <p className="text-gray-600 mb-4">Aplicación de la tarjeta de crédito de Nueva Americana</p>
                        <a href="#" className="text-blue-500 hover:underline">Ver Más</a>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <img src={pipImagen} alt="Proyecto 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">App PIP</h3>
                        <p className="text-gray-600 mb-4">PiP es tu nueva app para hacer compras con las mejores promociones..</p>
                        <a href="#" className="text-blue-500 hover:underline">Ver Más</a>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <img src={cerkImagen} alt="Proyecto 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">Cerk</h3>
                        <p className="text-gray-600 mb-4">La ruta más rápida al éxito.</p>
                        <a href="#" className="text-blue-500 hover:underline">Ver Más</a>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <img src={abcImagen} alt="Proyecto 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">App ABC color</h3>
                        <p className="text-gray-600 mb-4">Con la aplicación de ABC Color para Android Ud. podrá hojear a la edición impresa del diario tal como si fuera el papel.</p>
                        <a href="#" className="text-blue-500 hover:underline">Ver Más</a>
                    </div>
                    {/* Más tarjetas de proyectos */}
                </div>
            </section>

            {/* Habilidades y Experiencia */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Habilidades y Experiencia</h2>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold mb-2">Ide for Ideas (2021-2022)</h3>
                    <p className="text-gray-600 mb-4">
                        Participé en un equipo de desarrollo colaborativo, donde adquirí experiencia práctica en tecnologías como NodeJS y JavaScript. Colaboré en el desarrollo de un sistema de gestión de proyectos, contribuyendo al diseño y la implementación de nuevas funcionalidades. Trabajé estrechamente con colegas para resolver desafíos técnicos y optimizar el rendimiento del sistema. Aprendí sobre buenas prácticas de codificación, control de versiones y metodologías ágiles.
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">Softec (2022-2024)</h3>
                    <p className="text-gray-600 mb-4">
                        Desarrollé aplicaciones móviles nativas utilizando React Native, optimizando así la experiencia del usuario en plataformas iOS y Android. Diseñé y desarrollé backend robustos utilizando Python y el framework Django, asegurando un rendimiento óptimo y una alta seguridad.
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">Azeta (Actualidad)</h3>
                    <p className="text-gray-600">
                        Desarrollo de aplicaciones móviles.
                    </p>
                </div>
            </section>

            {/* Testimonios */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
                <div className="bg-white shadow-md p-6 rounded-lg">
                    <p className="text-gray-600">“Comentario de un cliente o colega.”</p>
                    <p className="text-gray-500 mt-2">- Nombre del Testimonial</p>
                </div>
            </section>

            {/* Contacto */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Contacto</h2>
                <form className="bg-white shadow-md p-6 rounded-lg">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                        <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md" rows={4}></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Enviar</button>
                </form>
            </section>
        </div>
    );
};
