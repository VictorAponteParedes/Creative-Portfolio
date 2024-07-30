import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';

const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Mí', href: '/about-me' },
    { name: 'Certificados', href: '/my-certificates' },    
];

const App: React.FC = () => {
    return (
        <>
            <Header projectName="Mi Portafolio" navItems={navItems} />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
