'use client';

import { usePathname } from 'next/navigation';

import { NavigationTabItem } from '../atoms/navigation-tab-item.jsx';

type NavigationTabsProps = {
    tabs: Array<{
        label: string;
        href: string;
    }>;
    className?: string;
};

export const NavigationTabs = ({ tabs, className }: NavigationTabsProps) => {
    const currentPathname = usePathname();

    return (
        <nav className={`flex-1 ${className || ''}`}>
            <ul className="flex flex-row">
                {tabs.map((tab) => (
                    <li key={tab.label} className="">
                        <NavigationTabItem
                            label={tab.label}
                            selected={tab.href === currentPathname}
                            onClick={() => {}}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};
