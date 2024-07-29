import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    projectName: string;
    navItems: { name: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({ projectName, navItems }) => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">{projectName}</div>
                <nav>
                    <ul className="flex space-x-4">
                        {navItems.map((item) => (
                            <li key={item.href}>
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
