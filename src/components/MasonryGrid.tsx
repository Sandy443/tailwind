import React from 'react';

interface MasonryGridProps {
    children: React.ReactNode;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ children }) => {
    return (
        <div className="gap-4 columns-1 md:columns-2">
            {children}
        </div>
    );
};

export default MasonryGrid;
