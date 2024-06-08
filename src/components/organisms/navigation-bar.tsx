import { NavigationTabs } from '../molecules/navigation-tabs.jsx';

type NavBarProps = {
    pages: Array<{
        href: string;
        name: string;
    }>;
    className?: string;
};

export const NavigationBar = ({ pages, className }: NavBarProps) => (
    <nav>
        <div className={`flex items-center font-medium bg-white ${className || ''}`}>
            <h1 className="text-xl mx-5 text-olive-note-accent font-semibold">Capitaine IO</h1>
            <NavigationTabs tabs={pages.map(({ href, name }) => ({ href, label: name }))} />
        </div>
        <div
            className="border-black-and-white border-b w-full"
            style={{
                marginTop: -1,
            }}
        ></div>
    </nav>
);
