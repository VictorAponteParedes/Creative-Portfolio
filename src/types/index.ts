export interface NavItem {
    name: string;
    href: string;
}

export interface HeaderProps {
    projectName: string;
    navItems: NavItem[];
}

export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    description: string;
    image?: string;
}