type NavItem = {
    id: string;
    name: string;
    url: string;
};

type NavKey = 'home' | 'photography' | 'projects' | 'contact' | 'privacy';

const navigation: Record<NavKey, NavItem> = {
    home: { id: 'home', name: 'Home', url: '/' },
    photography: { id: 'photography', name: 'Photography', url: '/photography' },
    projects: { id: 'projects', name: 'Projects', url: '/projects' },
    contact: { id: 'contact', name: 'Contact', url: '/contact' },
    privacy: { id: 'privacy', name: 'Privacy', url: '/privacy' },
};

export const footerNav: NavItem[] = [
    navigation.privacy,
    navigation.photography,
];

export const headerNav: NavItem[] = [
    navigation.home,
    navigation.photography,
    navigation.projects,
];
