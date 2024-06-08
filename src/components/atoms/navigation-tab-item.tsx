type NavigationTabItemProps = {
    label: string;
    selected: boolean;
    onClick: () => void;
    className?: string;
};

export const NavigationTabItem = ({
    label,
    selected,
    onClick,
    className,
}: NavigationTabItemProps) => (
    <>
        <button
            onClick={onClick}
            className={`${
                selected ? 'text-black' : 'text-storm-cloud'
            } hover:text-black rounded bg-black-and-white-hover px-4 py-2 my-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-vanilla-punch focus:ring-olive-note-accent ${className ?? ''}`}
        >
            {label}
        </button>
        <div className={`${selected ? 'bg-black' : ''} w-full h-0.5`}></div>
    </>
);
