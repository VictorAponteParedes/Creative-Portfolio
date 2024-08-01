interface ListCardProjectsType {
    projects: {
        title: string,
        description: string,
        image: string,
        link: string,
    }[],
}

export const ListCardProjects: React.FC<ListCardProjectsType> = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover mb-4 rounded-md transition-transform transform hover:scale-110"
                    />
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <a
                        href={project.link}
                        className="text-blue-500 hover:underline transition-colors duration-300"
                    >
                        Ver más
                    </a>
                </div>
            ))}
        </div>
    );
};
