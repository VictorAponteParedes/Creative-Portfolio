import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    projectName: string;
    navItems: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ projectName, navItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">{projectName}</div>
                {/* Botón de menú para pantallas pequeñas */}
                <button
                    className="lg:hidden flex items-center px-3 py-2 border border-gray-700 rounded text-gray-200 hover:text-white hover:border-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                {/* Menú de navegación */}
                <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-4">
                        {navItems.map((item) => (
                            <li key={item.href} className="my-2 lg:my-0">
                                <Link to={item.href} className="hover:underline">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
