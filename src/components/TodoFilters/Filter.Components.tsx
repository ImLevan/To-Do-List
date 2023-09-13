const FiltersContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-100 border-b border-solid border-gray-100">
            {children}
        </div>
    )
};

const ItemsLeft = ({ total }: { total: number }) => {
    return (
        <p className="text-gray-400 text-sm">
            {total} tareas
        </p>
    )
};

const FilterButtonContainer = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
};

const FilterButton = ({ action, active, filter }: { action: () => void, active: string, filter: string }) => {
    return (
        <button onClick={action}
            className={` hover:text-pink-800 cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-blue-400' : 'text-gray-400')}>{filter}</button>
    )
}

export { ItemsLeft, FiltersContainer, FilterButtonContainer, FilterButton }