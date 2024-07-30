


export const ContacMe = () => {

    return (
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
    )

}