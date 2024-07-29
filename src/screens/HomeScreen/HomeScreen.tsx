// HomeScreen.tsx
import React from 'react';

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
                        <img src="[url-de-imagen]" alt="Proyecto 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h3 className="text-xl font-semibold mb-2">Nombre del Proyecto</h3>
                        <p className="text-gray-600 mb-4">Descripción breve del proyecto.</p>
                        <a href="[enlace-del-proyecto]" className="text-blue-500 hover:underline">Ver Más</a>
                    </div>
                    {/* Más tarjetas de proyectos */}
                </div>
            </section>

            {/* Habilidades y Experiencia */}
            <section className="my-12">
                <h2 className="text-3xl font-bold mb-6">Habilidades y Experiencia</h2>
                {/* Aquí podrías incluir gráficos, listas o cualquier otro elemento visual */}
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
